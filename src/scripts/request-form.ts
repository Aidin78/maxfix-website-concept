import {
  MAX_FILES,
  MAX_FILE_BYTES,
  formatBytes,
  isAllowedFile,
  isEmail,
  isPersonnummer,
  isPhone,
} from './validation';

interface Messages {
  summary: string;
  required: string;
  email: string;
  phone: string;
  pnr: string;
  choice: string;
  fileType: string;
  fileSize: string;
  fileCount: string;
  remove: string;
  sending: string;
}

type Control = HTMLInputElement | HTMLTextAreaElement;

export function initRequestForm(form: HTMLFormElement) {
  const messages = JSON.parse(form.dataset.messages ?? '{}') as Messages;
  const locale = form.dataset.locale ?? 'sv-SE';
  const endpoint = form.dataset.endpoint ?? '';

  const summary = form.querySelector<HTMLElement>('[data-summary]');
  const summaryList = form.querySelector<HTMLUListElement>('[data-summary-list]');
  const submit = form.querySelector<HTMLButtonElement>('[type="submit"]');
  const failure = form.querySelector<HTMLElement>('[data-failure]');
  const mailtoLink = form.querySelector<HTMLAnchorElement>('[data-mailto]');
  const success = form.parentElement?.querySelector<HTMLElement>('[data-success]');
  const rentNote = form.querySelector<HTMLElement>('[data-rent-note]');

  const fileInput = form.querySelector<HTMLInputElement>('input[type="file"]');
  const dropzone = form.querySelector<HTMLElement>('[data-dropzone]');
  const fileList = form.querySelector<HTMLUListElement>('[data-file-list]');
  let files: File[] = [];

  const touched = new Set<string>();

  /* ---------- Errors ---------- */
  function errorElFor(name: string) {
    return form.querySelector<HTMLElement>(`[data-error-for="${name}"]`);
  }

  function setError(name: string, message: string | null) {
    const el = errorElFor(name);
    const controls = form.querySelectorAll<Control>(`[name="${name}"]`);
    const wrapper = form.querySelector<HTMLElement>(`[data-field="${name}"]`);
    if (el) {
      el.hidden = !message;
      el.textContent = message ?? '';
    }
    controls.forEach((c) => c.setAttribute('aria-invalid', message ? 'true' : 'false'));
    wrapper?.classList.toggle('has-error', Boolean(message));
  }

  function validateField(name: string): string | null {
    const controls = Array.from(form.querySelectorAll<Control>(`[name="${name}"]`));
    const first = controls[0];
    if (!first) return null;

    if (first instanceof HTMLInputElement && first.type === 'radio') {
      const required = controls.some((c) => c.required);
      const checked = controls.some((c) => (c as HTMLInputElement).checked);
      return required && !checked ? messages.choice : null;
    }

    const value = first.value.trim();
    if (first.required && !value) return messages.required;
    if (!value) return null;

    switch (first.dataset.validate) {
      case 'email':
        return isEmail(value) ? null : messages.email;
      case 'phone':
        return isPhone(value) ? null : messages.phone;
      case 'pnr':
        return isPersonnummer(value) ? null : messages.pnr;
      default:
        return null;
    }
  }

  const validatedNames = Array.from(
    new Set(Array.from(form.querySelectorAll<Control>('[data-field] [name]')).map((c) => c.name)),
  ).filter((name) => name !== 'files' && name !== 'services');

  function labelFor(name: string): string {
    const wrapper = form.querySelector<HTMLElement>(`[data-field="${name}"]`);
    const label = wrapper?.querySelector('[data-label]');
    return label?.textContent?.replace('*', '').trim() ?? name;
  }

  function focusTarget(name: string): HTMLElement | null {
    return form.querySelector<HTMLElement>(`[name="${name}"]`);
  }

  function showSummary(errors: { name: string; message: string }[]) {
    if (!summary || !summaryList) return;
    summaryList.replaceChildren(
      ...errors.map(({ name }) => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${focusTarget(name)?.id ?? ''}`;
        link.textContent = labelFor(name);
        link.addEventListener('click', (event) => {
          event.preventDefault();
          focusTarget(name)?.focus();
        });
        li.append(link);
        return li;
      }),
    );
    summary.hidden = false;
    summary.focus();
  }

  /* ---------- Live validation ---------- */
  form.addEventListener('focusout', (event) => {
    const target = event.target as Control;
    if (!target.name || !validatedNames.includes(target.name)) return;
    if (target.type === 'radio') return;
    if (!target.value && !touched.has(target.name)) return;
    touched.add(target.name);
    setError(target.name, validateField(target.name));
  });

  form.addEventListener('input', (event) => {
    const target = event.target as Control;
    if (!target.name || !touched.has(target.name)) return;
    setError(target.name, validateField(target.name));
  });

  form.addEventListener('change', (event) => {
    const target = event.target as HTMLInputElement;
    if (target.type === 'radio') {
      touched.add(target.name);
      setError(target.name, validateField(target.name));
      if (rentNote && target.name === 'rot_rut') rentNote.hidden = target.dataset.rent !== 'true';
    }
  });

  /* ---------- Files ---------- */
  function syncInput() {
    if (!fileInput) return;
    try {
      const transfer = new DataTransfer();
      files.forEach((f) => transfer.items.add(f));
      fileInput.files = transfer.files;
    } catch {
      // Older browsers: the managed list is still sent via fetch.
    }
  }

  function renderFiles() {
    if (!fileList) return;
    fileList.replaceChildren(
      ...files.map((file, index) => {
        const li = document.createElement('li');
        li.className = 'files__item';
        const name = document.createElement('span');
        name.className = 'files__name';
        name.textContent = file.name;
        const size = document.createElement('span');
        size.className = 'files__size';
        size.textContent = formatBytes(file.size, locale);
        const remove = document.createElement('button');
        remove.type = 'button';
        remove.className = 'files__remove';
        remove.textContent = messages.remove;
        remove.setAttribute('aria-label', `${messages.remove}: ${file.name}`);
        remove.addEventListener('click', () => {
          files.splice(index, 1);
          syncInput();
          renderFiles();
          setError('files', null);
          fileInput?.focus();
        });
        li.append(name, size, remove);
        return li;
      }),
    );
  }

  function addFiles(incoming: FileList | File[]) {
    const problems: string[] = [];
    for (const file of Array.from(incoming)) {
      if (!isAllowedFile(file)) {
        problems.push(`${messages.fileType} ${file.name}`);
      } else if (file.size > MAX_FILE_BYTES) {
        problems.push(`${messages.fileSize} ${file.name}`);
      } else if (files.length >= MAX_FILES) {
        problems.push(messages.fileCount);
        break;
      } else if (!files.some((f) => f.name === file.name && f.size === file.size)) {
        files.push(file);
      }
    }
    syncInput();
    renderFiles();
    setError('files', problems.length ? Array.from(new Set(problems)).join(' ') : null);
  }

  fileInput?.addEventListener('change', () => {
    if (fileInput.files?.length) {
      const picked = Array.from(fileInput.files).filter(
        (f) => !files.some((existing) => existing.name === f.name && existing.size === f.size),
      );
      addFiles(picked);
    }
  });

  if (dropzone) {
    ['dragenter', 'dragover'].forEach((type) =>
      dropzone.addEventListener(type, (event) => {
        event.preventDefault();
        dropzone.classList.add('is-dragging');
      }),
    );
    ['dragleave', 'drop'].forEach((type) =>
      dropzone.addEventListener(type, () => dropzone.classList.remove('is-dragging')),
    );
    dropzone.addEventListener('drop', (event) => {
      event.preventDefault();
      if (event.dataTransfer?.files.length) addFiles(event.dataTransfer.files);
    });
  }

  /* ---------- Submit ---------- */
  function buildMailto(data: FormData): string {
    const fields = new Map<string, string[]>();
    for (const [key, value] of data.entries()) {
      if (typeof value !== 'string' || !value || key === 'website' || key === 'language') continue;
      fields.set(key, [...(fields.get(key) ?? []), value]);
    }
    const lines = Array.from(fields, ([key, values]) => `${labelFor(key)}: ${values.join(', ')}`);
    const subject = form.dataset.mailSubject ?? 'Förfrågan';
    return `mailto:${form.dataset.mailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
  }

  function setSending(sending: boolean) {
    if (!submit) return;
    submit.disabled = sending;
    submit.classList.toggle('is-loading', sending);
    const label = submit.querySelector<HTMLElement>('[data-submit-label]');
    if (label) {
      label.dataset.idle ??= label.textContent ?? '';
      label.textContent = sending ? messages.sending : label.dataset.idle;
    }
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (failure) failure.hidden = true;

    const errors = validatedNames
      .map((name) => ({ name, message: validateField(name) }))
      .filter((e): e is { name: string; message: string } => Boolean(e.message));

    validatedNames.forEach((name) => {
      touched.add(name);
      setError(name, errors.find((e) => e.name === name)?.message ?? null);
    });

    if (errors.length) {
      showSummary(errors);
      return;
    }
    if (summary) summary.hidden = true;

    const data = new FormData(form);
    data.delete('files');
    files.forEach((file) => data.append('files', file, file.name));

    // Spam trap: real people never fill the hidden field.
    if (data.get('website')) return;

    if (!endpoint) {
      if (mailtoLink) mailtoLink.href = buildMailto(data);
      if (failure) {
        failure.hidden = false;
        failure.focus();
      }
      return;
    }

    setSending(true);
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      form.hidden = true;
      if (success) {
        success.hidden = false;
        success.focus();
      }
    } catch {
      if (mailtoLink) mailtoLink.href = buildMailto(data);
      if (failure) {
        failure.hidden = false;
        failure.focus();
      }
    } finally {
      setSending(false);
    }
  });

  success?.querySelector('[data-reset]')?.addEventListener('click', () => {
    form.reset();
    files = [];
    syncInput();
    renderFiles();
    touched.clear();
    if (rentNote) rentNote.hidden = true;
    success.hidden = true;
    form.hidden = false;
    form.querySelector<HTMLElement>('textarea')?.focus();
  });
}
