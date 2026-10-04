'use client';

import { useState } from 'react';
import Icon from '~/components/Icon';
import { estimatorRates, pricing, rates } from '~/data/pricing';
import { type Lang, formatNumber } from '~/i18n';
import { getDictionary } from '~/i18n/ui';
import s from './Estimator.module.css';

const MAX_HOURS = 40;

/** Billing is per started half hour, with a two-hour minimum. */
function clampHours(value: number): number {
  if (Number.isNaN(value)) return rates.minimumHours;
  return Math.min(MAX_HOURS, Math.max(rates.minimumHours, Math.ceil(value * 2) / 2));
}

export default function Estimator({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).pricing.estimator;
  const options = estimatorRates.map((id) => {
    const row = pricing[lang].labour.find((r) => r.id === id);
    if (!row) throw new Error(`Missing rate ${id}`);
    return { id, price: row.price, label: t.labels[id] };
  });

  const [rate, setRate] = useState(options[0]!.price);
  const [hoursInput, setHoursInput] = useState(String(rates.minimumHours));
  const hours = clampHours(Number(hoursInput));
  const labour = rate * hours;

  const step = (delta: number) => setHoursInput(String(clampHours(hours + delta)));

  return (
    <form className={s.estimator} aria-labelledby="estimator-title" onSubmit={(e) => e.preventDefault()}>
      <h3 id="estimator-title" className={s.estimatorTitle}>
        <Icon name="ruler" size={22} />
        {t.title}
      </h3>

      <fieldset className={s.estimatorField}>
        <legend>{t.type}</legend>
        <div className={s.estimatorOptions}>
          {options.map((o) => (
            <label key={o.id} className={s.estimatorOption}>
              <input type="radio" name="rate" value={o.price} checked={rate === o.price} onChange={() => setRate(o.price)} />
              <span>
                {o.label}
                <small className="mono">{`${o.price} ${t.currency}`}</small>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className={s.estimatorField}>
        <label htmlFor="estimator-hours" className={s.estimatorLabel}>
          {t.hours}
        </label>
        <div className={s.estimatorStepper}>
          <button type="button" onClick={() => step(-0.5)} aria-label={t.decrease}>
            <Icon name="minus" size={18} />
          </button>
          <input
            id="estimator-hours"
            name="hours"
            type="number"
            inputMode="decimal"
            min={rates.minimumHours}
            max={MAX_HOURS}
            step={0.5}
            value={hoursInput}
            onChange={(e) => setHoursInput(e.target.value)}
            onBlur={() => setHoursInput(String(hours))}
          />
          <span className={`mono ${s.estimatorUnit}`} aria-hidden="true">
            {t.hoursUnit}
          </span>
          <button type="button" onClick={() => step(0.5)} aria-label={t.increase}>
            <Icon name="plus" size={18} />
          </button>
        </div>
      </div>

      <dl className={s.estimatorResult} aria-live="polite">
        <div>
          <dt>{t.labour}</dt>
          <dd>{`${formatNumber(labour, lang)} ${t.currency}`}</dd>
        </div>
        <div>
          <dt>{t.travel}</dt>
          <dd>{`${formatNumber(rates.travelPerVisit, lang)} ${t.currency}`}</dd>
        </div>
        <div className={s.estimatorTotal}>
          <dt>{t.total}</dt>
          <dd>{`${formatNumber(labour + rates.travelPerVisit, lang)} ${t.currency}`}</dd>
        </div>
      </dl>

      <p className={s.estimatorNote}>{t.note}</p>
    </form>
  );
}
