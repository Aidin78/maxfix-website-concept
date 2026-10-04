import Link from 'next/link';
import Estimator from './Estimator';
import Icon from '~/components/Icon';
import { pricing, rates } from '~/data/pricing';
import { type Lang, anchors, paths } from '~/i18n';
import { getDictionary } from '~/i18n/ui';
import { revealDelay } from '~/lib/style';
import s from './Pricing.module.css';

export default function Pricing({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).pricing;
  const p = pricing[lang];

  return (
    <section
      id={anchors[lang].pricing}
      className="section section--night on-night"
      data-section="pricing"
      aria-labelledby="pricing-title"
    >
      <div className="container">
        <div className={s.pricingTop}>
          <header className={s.pricingHead} data-reveal>
            <p className="eyebrow">{t.eyebrow}</p>
            <h2 id="pricing-title">{t.title}</h2>
            <p className="lead">{t.lead}</p>
          </header>

          <div className={s.pricingBoard} data-reveal style={revealDelay(0.1)}>
            <p className={s.pricingFrom}>
              <span className="mono">{t.from}</span>
              <strong>{rates.fromPerHour}</strong>
              <span className={s.pricingUnit}>{t.unit}</span>
            </p>
            <p className={s.pricingFromNote}>{t.fromNote}</p>
            <div className={s.pricingDeductions}>
              <div>
                <strong>{`${rates.rutPercent} %`}</strong>
                <span>
                  {t.rut}
                  <br />
                  {t.deductionNote}
                </span>
              </div>
              <div>
                <strong>{`${rates.rotPercent} %`}</strong>
                <span>
                  {t.rot}
                  <br />
                  {t.deductionNote}
                </span>
              </div>
            </div>
            <p className={s.pricingFootnote}>{t.footnote}</p>
          </div>
        </div>

        <div className={s.pricingBody}>
          <div className={s.pricingLists} data-reveal>
            <div className={s.priceList}>
              <h3 className={s.priceListTitle}>{p.labourTitle}</h3>
              <ul>
                {p.labour.map((row) => (
                  <li key={row.id}>
                    <span className={s.priceListLabel}>
                      {row.label}
                      {row.detail && <small>{row.detail}</small>}
                    </span>
                    <span className={s.priceListLeader} aria-hidden="true" />
                    <span className={`mono ${s.priceListValue}`}>{`${row.price} ${t.perHour}`}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={s.priceList}>
              <h3 className={s.priceListTitle}>{p.extrasTitle}</h3>
              <ul>
                {p.extras.map((row) => (
                  <li key={row.label} className={s.priceListExtra}>
                    <span className={s.priceListLabel}>
                      {row.label}
                      {row.detail && <small>{row.detail}</small>}
                    </span>
                    <span className={s.priceListLeader} aria-hidden="true" />
                    <span className={`mono ${s.priceListValue}`}>{row.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={s.pricingEstimator}>
            <Estimator lang={lang} />
          </div>
        </div>

        <div className={s.pricingConditions} data-reveal>
          <h3 className={s.priceListTitle}>{p.conditionsTitle}</h3>
          <ol className={s.conditions}>
            {p.conditions.map((c, i) => (
              <li key={c.title}>
                <span className={`mono ${s.conditionsNum}`}>{String(i + 1).padStart(2, '0')}</span>
                <h4>{c.title}</h4>
                <p>{c.text}</p>
              </li>
            ))}
          </ol>
          <Link href={paths.terms(lang)} className={`text-link ${s.pricingTerms}`}>
            {t.fullTerms}
            <Icon name="arrow" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
