import Image from 'next/image';
import Link from 'next/link';
import Icon from '~/components/Icon';
import heroImage from '~/assets/images/car-gamla-stan.jpg';
import recoBadge from '~/assets/images/reco-badge.png';
import { company } from '~/data/company';
import { rates } from '~/data/pricing';
import { type Lang, paths } from '~/i18n';
import { getDictionary } from '~/i18n/ui';
import s from './Hero.module.css';

export default function Hero({ lang }: { lang: Lang }) {
  const t = getDictionary(lang);
  const [badgeFact, ...facts] = t.hero.facts;

  return (
    <section className={s.hero} aria-labelledby="hero-title">
      <div className={`container ${s.heroGrid}`}>
        <div className={s.heroCopy}>
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1 id="hero-title" className={s.heroTitle}>
            <span className={s.heroLine}>{t.hero.titleA}</span>
            <span className={s.heroLine}>
              <span className={s.heroUnderline}>
                {t.hero.titleB}
                <svg viewBox="0 0 300 18" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M3 13.5C60 6 150 3.5 297 8.5" pathLength={1} />
                </svg>
              </span>
            </span>
          </h1>
          <p className={`lead ${s.heroLead}`}>{t.hero.lead}</p>
          <div className={s.heroActions}>
            <Link href={paths.section(lang, 'contact')} className="btn">
              {t.hero.primary}
              <Icon name="arrow" className="arrow" />
            </Link>
            <Link href={paths.section(lang, 'services')} className="btn btn--ghost">
              {t.hero.secondary}
            </Link>
          </div>
          <p className={s.heroCall}>
            <span>{t.hero.callLine}</span>
            <a href={company.phone.href}>
              <Icon name="phone" size={18} />
              {company.phone.display}
            </a>
            <span className={s.heroHours}>{t.hero.hours}</span>
          </p>
        </div>

        <figure className={s.heroMedia}>
          <div className={s.heroFrame}>
            <Image
              src={heroImage}
              alt={t.hero.imageAlt}
              sizes="(min-width: 1000px) 40vw, 100vw"
              preload
              className={s.heroImg}
            />
          </div>
          <p className={s.heroTag}>
            <span className={s.heroTagFrom}>{t.hero.priceFrom}</span>
            <span className={s.heroTagPrice}>
              {rates.fromPerHour}
              <small>{t.hero.priceUnit}</small>
            </span>
            <span className={s.heroTagNote}>{t.hero.priceNote}</span>
          </p>
          <figcaption className={`mono ${s.heroCaption}`}>{t.hero.imageCaption}</figcaption>
        </figure>
      </div>

      <div className="container">
        <div className={`ruler ${s.heroRuler}`} aria-hidden="true" />
        <ul className={s.heroFacts}>
          <li className={`${s.heroFact} ${s.heroFactBadge}`}>
            <Image src={recoBadge} alt="" width={120} className={s.heroBadge} />
            <span>
              <strong>{badgeFact.value}</strong>
              {badgeFact.label}
            </span>
          </li>
          {facts.map((fact) => (
            <li key={fact.value} className={s.heroFact}>
              <span>
                <strong>{fact.value}</strong>
                {fact.label}
              </span>
            </li>
          ))}
          <li className={`${s.heroFact} ${s.heroFactPrice}`}>
            <span>
              <strong>{`${t.hero.priceFrom} ${rates.fromPerHour} ${t.hero.priceUnit}`}</strong>
              {t.hero.priceNote}
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
