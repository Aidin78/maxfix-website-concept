'use client';

import Link from 'next/link';
import { type DragEvent, type FormEvent, useEffect, useRef, useState } from 'react';
import Icon from '~/components/Icon';
import { company } from '~/data/company';
import { type Lang, paths } from '~/i18n';
import { getDictionary } from '~/i18n/ui';
import {
  ALLOWED_EXTENSIONS,
  MAX_FILES,
  MAX_FILE_BYTES,
  formatBytes,
  isAllowedFile,
  isEmail,
  isPersonnummer,
  isPhone,
} from '~/lib/validation';
import s from './RequestForm.module.css';

const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? '';
const ACCEPT = ALLOWED_EXTENSIONS.map((ext) => `.${ext}`).join(',');

type ContactField = 'first_name' | 'last_name' | 'email' | 'phone' | 'address' | 'personnummer';
type FieldName = 'message' | 'rot_rut' | ContactField;
type Status = 'idle' | 'sending' | 'success' | 'failure';

const FIELD_ORDER: FieldName[] = [
  'message',
  'rot_rut',
  'first_name',
  'last_name',
  'email',
  'phone',
  'address',
  'personnummer',
];

const EMPTY: Record<FieldName, string> = {
  message: '',
  rot_rut: '',
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  address: '',
  personnummer: '',
};

interface RequestFormProps {
  lang: Lang;
  serviceOptions: string[];
}

export default function RequestForm({ lang, serviceOptions }: RequestFormProps) {
  const t = getDictionary(lang).form;
  const locale = lang === 'sv' ? 'sv-SE' : 'en-GB';

  const [values, setValues] = useState(EMPTY);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [summary, setSummary] = useState<FieldName[] | null>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [mailto, setMailto] = useState(`mailto:${company.email}`);
  const [dragging, setDragging] = useState(false);

  const summaryRef = useRef<HTMLDivElement>(null);
  const failureRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const trapRef = useRef<HTMLInputElement>(null);

  const contactFields: {
    name: ContactField;
    label: string;
    type: string;
    autoComplete: string;
    inputMode?: 'email' | 'tel' | 'numeric';
    hint?: string;
  }[] = [
    { name: 'first_name', label: t.firstName, type: 'text', autoComplete: 'given-name' },
    { name: 'last_name', label: t.lastName, type: 'text', autoComplete: 'family-name' },
    { name: 'email', label: t.email, type: 'email', autoComplete: 'email', inputMode: 'email' },
    { name: 'phone', label: t.phone, type: 'tel', autoComplete: 'tel', inputMode: 'tel' },
    { name: 'address', label: t.address, type: 'text', autoComplete: 'street-address', hint: t.addressHint },
    { name: 'personnummer', label: t.pnr, type: 'text', autoComplete: 'off', inputMode: 'numeric', hint: t.pnrHint },
  ];

  const labels: Record<FieldName, string> = {
    message: t.messageLabel,
    rot_rut: t.housingLegend,
    first_name: t.firstName,
    last_name: t.lastName,
    email: t.email,
    phone: t.phone,
    address: t.address,
    personnummer: t.pnr,
  };

  function validate(name: FieldName, value: string): string | null {
    const trimmed = value.trim();
    if (name === 'rot_rut') return trimmed ? null : t.errors.choice;
    if (!trimmed) return t.errors.required;
    if (name === 'email' && !isEmail(trimmed)) return t.errors.email;
    if (name === 'phone' && !isPhone(trimmed)) return t.errors.phone;
    if (name === 'personnummer' && !isPersonnummer(trimmed)) return t.errors.pnr;
    return null;
  }

  const errorFor = (name: FieldName) => (touched[name] ? validate(name, values[name]) : null);

  const setValue = (name: FieldName, value: string) => setValues((v) => ({ ...v, [name]: value }));
  const touch = (name: FieldName) => setTouched((prev) => (prev[name] ? prev : { ...prev, [name]: true }));

  // Move focus to whichever status panel just appeared.
  useEffect(() => {
    if (status === 'failure') failureRef.current?.focus();
    if (status === 'success') successRef.current?.focus();
  }, [status]);

  useEffect(() => {
    if (summary?.length) summaryRef.current?.focus();
  }, [summary]);

  /* ---------- Files ---------- */
  function addFiles(incoming: File[]) {
    const problems: string[] = [];
    const next = [...files];
    for (const file of incoming) {
      if (next.some((f) => f.name === file.name && f.size === file.size)) continue;
      if (!isAllowedFile(file)) problems.push(`${t.errors.fileType} ${file.name}`);
      else if (file.size > MAX_FILE_BYTES) problems.push(`${t.errors.fileSize} ${file.name}`);
      else if (next.length >= MAX_FILES) {
        problems.push(t.errors.fileCount);
        break;
      } else next.push(file);
    }
    setFiles(next);
    setFileError(problems.length ? Array.from(new Set(problems)).join(' ') : null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  function removeFile(index: number) {
    setFiles((current) => current.filter((_, i) => i !== index));
    setFileError(null);
    fileInputRef.current?.focus();
  }

  const onDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
    if (event.dataTransfer.files.length) addFiles(Array.from(event.dataTransfer.files));
  };

  /* ---------- Submit ---------- */
  function buildMailto(): string {
    const lines = [
      selectedServices.length ? `${t.servicesLabel} ${selectedServices.join(', ')}` : null,
      ...FIELD_ORDER.map((name) => (values[name] ? `${labels[name]}: ${values[name]}` : null)),
    ].filter(Boolean);
    const subject = lang === 'sv' ? 'Förfrågan via maxfix.nu' : 'Request via maxfix.nu';
    return `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const invalid = FIELD_ORDER.filter((name) => validate(name, values[name]));
    setTouched(Object.fromEntries(FIELD_ORDER.map((name) => [name, true])));

    if (invalid.length) {
      setSummary(invalid);
      return;
    }
    setSummary(null);

    // Spam trap: real people never fill the hidden field.
    if (trapRef.current?.value) return;

    if (!ENDPOINT) {
      setMailto(buildMailto());
      setStatus('failure');
      return;
    }

    const data = new FormData();
    data.append('language', lang);
    selectedServices.forEach((service) => data.append('services', service));
    FIELD_ORDER.forEach((name) => data.append(name, values[name].trim()));
    files.forEach((file) => data.append('files', file, file.name));

    setStatus('sending');
    try {
      const response = await fetch(ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setStatus('success');
    } catch {
      setMailto(buildMailto());
      setStatus('failure');
    }
  }

  function reset() {
    setValues(EMPTY);
    setSelectedServices([]);
    setFiles([]);
    setFileError(null);
    setTouched({});
    setSummary(null);
    setStatus('idle');
  }

  const describedBy = (...ids: (string | false | null | undefined)[]) => ids.filter(Boolean).join(' ') || undefined;

  if (status === 'success') {
    return (
      <div className={s.rqWrap}>
        <div className={s.rqSuccess} role="status" tabIndex={-1} ref={successRef}>
          <span className={s.rqSuccessIcon}>
            <Icon name="check" size={28} />
          </span>
          <h3>{t.success.title}</h3>
          <p>
            {t.success.text} <a href={company.phone.href}>{company.phone.display}</a>.
          </p>
          <button type="button" className="btn btn--ghost" onClick={reset}>
            {t.success.again}
          </button>
        </div>
      </div>
    );
  }

  const messageError = errorFor('message');
  const housingError = errorFor('rot_rut');

  return (
    <div className={s.rqWrap}>
      <form className={s.rq} noValidate aria-label={t.label} onSubmit={onSubmit}>
        {summary && summary.length > 0 && (
          <div className={s.rqSummary} role="alert" tabIndex={-1} ref={summaryRef}>
            <Icon name="alert" size={22} />
            <div>
              <p>{t.errors.summary}</p>
              <ul>
                {summary.map((name) => (
                  <li key={name}>
                    <a
                      href={`#rq-${name}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(name === 'rot_rut' ? 'rq-own' : `rq-${name}`)?.focus();
                      }}
                    >
                      {labels[name]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* 01 · About the job */}
        <fieldset className={s.rqStep}>
          <legend className={s.rqLegend}>
            <span className={`mono ${s.rqStepNum}`}>01</span>
            {t.step1}
          </legend>

          <fieldset className={s.rqField}>
            <legend className={s.rqLabel}>
              {t.servicesLabel} <span className={s.rqOptional}>({t.optional})</span>
            </legend>
            <div className={s.chips}>
              {serviceOptions.map((title) => (
                <label key={title} className={s.chip}>
                  <input
                    type="checkbox"
                    name="services"
                    value={title}
                    checked={selectedServices.includes(title)}
                    onChange={(e) =>
                      setSelectedServices((current) =>
                        e.target.checked ? [...current, title] : current.filter((x) => x !== title),
                      )
                    }
                  />
                  <span>
                    <Icon name="check" size={14} />
                    {title}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className={`${s.rqField} ${messageError ? s.hasError : ''}`}>
            <label htmlFor="rq-message" className={s.rqLabel}>
              {t.messageLabel}
              <span className={s.rqReq} aria-hidden="true">
                *
              </span>
            </label>
            <p id="rq-message-hint" className={s.rqHint}>
              {t.messageHint}
            </p>
            <textarea
              id="rq-message"
              name="message"
              rows={5}
              required
              className={s.rqControl}
              value={values.message}
              onChange={(e) => setValue('message', e.target.value)}
              onBlur={() => values.message && touch('message')}
              aria-invalid={Boolean(messageError)}
              aria-describedby={describedBy('rq-message-hint', messageError && 'rq-message-error')}
            />
            {messageError && (
              <p id="rq-message-error" className={s.rqError}>
                {messageError}
              </p>
            )}
          </div>

          <div className={s.rqField}>
            <span className={s.rqLabel} id="rq-files-label">
              {t.filesLabel} <span className={s.rqOptional}>({t.optional})</span>
            </span>
            <div
              className={`${s.dropzone} ${dragging ? s.isDragging : ''}`}
              onDragEnter={(e) => {
                e.preventDefault();
                setDragging(true);
              }}
              onDragOver={(e) => e.preventDefault()}
              onDragLeave={() => setDragging(false)}
              onDrop={onDrop}
            >
              <input
                ref={fileInputRef}
                id="rq-files"
                type="file"
                multiple
                accept={ACCEPT}
                className={s.dropzoneInput}
                aria-labelledby="rq-files-label"
                aria-describedby={describedBy('rq-files-hint', fileError && 'rq-files-error')}
                onChange={(e) => e.target.files && addFiles(Array.from(e.target.files))}
              />
              <label htmlFor="rq-files" className={s.dropzoneLabel} aria-hidden="true">
                <Icon name="upload" size={26} />
                <span>
                  {t.filesDrop} <u>{t.filesChoose}</u>
                </span>
              </label>
              <p id="rq-files-hint" className={`${s.rqHint} ${s.dropzoneHint}`}>
                {t.filesHint}
              </p>
            </div>
            <ul className={s.files} aria-live="polite">
              {files.map((file, index) => (
                <li key={`${file.name}-${file.size}`} className={s.filesItem}>
                  <span className={s.filesName}>{file.name}</span>
                  <span className={s.filesSize}>{formatBytes(file.size, locale)}</span>
                  <button
                    type="button"
                    className={s.filesRemove}
                    aria-label={`${t.filesRemove}: ${file.name}`}
                    onClick={() => removeFile(index)}
                  >
                    {t.filesRemove}
                  </button>
                </li>
              ))}
            </ul>
            {fileError && (
              <p id="rq-files-error" className={s.rqError}>
                {fileError}
              </p>
            )}
          </div>
        </fieldset>

        {/* 02 · ROT/RUT */}
        <fieldset className={s.rqStep}>
          <legend className={s.rqLegend}>
            <span className={`mono ${s.rqStepNum}`}>02</span>
            {t.step2}
          </legend>

          <fieldset
            className={`${s.rqField} ${housingError ? s.hasError : ''}`}
            aria-invalid={Boolean(housingError)}
            aria-describedby={describedBy('rq-housing-hint', housingError && 'rq-housing-error')}
          >
            <legend className={s.rqLabel}>
              {t.housingLegend}
              <span className={s.rqReq} aria-hidden="true">
                *
              </span>
            </legend>
            <p id="rq-housing-hint" className={s.rqHint}>
              {t.housingHint}
            </p>
            <div className={s.options}>
              {[
                { id: 'rq-own', value: t.own, desc: t.ownDesc },
                { id: 'rq-rent', value: t.rent, desc: t.rentDesc },
              ].map((option) => (
                <label key={option.id} className={s.option}>
                  <input
                    type="radio"
                    id={option.id}
                    name="rot_rut"
                    value={option.value}
                    required
                    checked={values.rot_rut === option.value}
                    onChange={() => {
                      setValue('rot_rut', option.value);
                      touch('rot_rut');
                    }}
                  />
                  <span className={s.optionBox}>
                    <span className={s.optionDot} aria-hidden="true" />
                    <strong>{option.value}</strong>
                    <small>{option.desc}</small>
                  </span>
                </label>
              ))}
            </div>
            {values.rot_rut === t.rent && (
              <p className={s.rqNote}>
                <Icon name="alert" size={18} />
                {t.rentNote}
              </p>
            )}
            {housingError && (
              <p id="rq-housing-error" className={s.rqError}>
                {housingError}
              </p>
            )}
          </fieldset>
          <p className={`${s.rqHint} ${s.rqAbroad}`}>{t.abroadNote}</p>
        </fieldset>

        {/* 03 · Contact details */}
        <fieldset className={s.rqStep}>
          <legend className={s.rqLegend}>
            <span className={`mono ${s.rqStepNum}`}>03</span>
            {t.step3}
          </legend>

          <div className={s.rqGrid}>
            {contactFields.map((field) => {
              const id = `rq-${field.name}`;
              const error = errorFor(field.name);
              return (
                <div key={field.name} className={`${s.rqField} ${error ? s.hasError : ''}`}>
                  <label htmlFor={id} className={s.rqLabel}>
                    {field.label}
                    <span className={s.rqReq} aria-hidden="true">
                      *
                    </span>
                  </label>
                  {field.hint && (
                    <p id={`${id}-hint`} className={s.rqHint}>
                      {field.hint}
                    </p>
                  )}
                  <input
                    id={id}
                    name={field.name}
                    type={field.type}
                    autoComplete={field.autoComplete}
                    inputMode={field.inputMode}
                    spellCheck={field.type === 'text' && field.name !== 'personnummer' ? undefined : false}
                    required
                    className={s.rqControl}
                    value={values[field.name]}
                    onChange={(e) => setValue(field.name, e.target.value)}
                    onBlur={() => values[field.name] && touch(field.name)}
                    aria-invalid={Boolean(error)}
                    aria-describedby={describedBy(field.hint && `${id}-hint`, error && `${id}-error`)}
                  />
                  {error && (
                    <p id={`${id}-error`} className={s.rqError}>
                      {error}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </fieldset>

        <div className={s.rqTrap} aria-hidden="true">
          <label>
            Website
            <input ref={trapRef} type="text" name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        {status === 'failure' && (
          <div className={s.rqFailure} role="alert" tabIndex={-1} ref={failureRef}>
            <Icon name="alert" size={22} />
            <div>
              <p>
                <strong>{t.failure.title}</strong>
              </p>
              <p>{t.failure.text}</p>
              <a href={mailto} className="text-link">
                <Icon name="mail" size={18} />
                {company.email}
              </a>
            </div>
          </div>
        )}

        <div className={s.rqSubmit}>
          <p className={s.rqPrivacy}>
            <span className={s.rqReq} aria-hidden="true">
              *
            </span>
            {t.required}. {t.privacy} <Link href={paths.terms(lang)}>{t.privacyLink}</Link>.
          </p>
          <button type="submit" className={`btn ${s.rqButton}`} disabled={status === 'sending'}>
            <span>{status === 'sending' ? t.sending : t.submit}</span>
            <Icon name="arrow" className="arrow" />
          </button>
        </div>
      </form>
    </div>
  );
}
