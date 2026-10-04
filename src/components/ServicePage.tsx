import Image from 'next/image';
import Link from 'next/link';
import Icon from './Icon';
import { company } from '~/data/company';
import { work } from '~/data/gallery';
import { type Service, serviceGroups, services } from '~/data/services';
import { type Lang, paths } from '~/i18n';
import { getDictionary } from '~/i18n/ui';
import s from './ServicePage.module.css';

interface ServicePageProps {
  lang: Lang;
  service: Service;
}

export default function ServicePage({ lang, service }: ServicePageProps) {
  const t = getDictionary(lang);
  const page = service.page[lang];
  const isFixedPrice = service.id === 'platsbyggt';
  const groupLabel = serviceGroups.find((g) => g.id === service.group)?.label[lang] ?? t.services.featuredEyebrow;
  const others = services.filter((other) => other.id !== service.id);
  const builtInWork = isFixedPrice ? work.filter((w) => w.category === 'built-in' && w.id !== 'bokhylla') : [];
  const [lead, ...intro] = page.intro;

  return (
    <article className={s.svc}>
      <div className="container">
        <nav className={`mono ${s.crumbs}`} aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href={paths.home(lang)}>MaxFix</Link>
            </li>
            <li>
              <Link href={paths.section(lang, 'services')}>{t.servicePage.breadcrumb}</Link>
            </li>
            <li aria-current="page">{service.title[lang]}</li>
          </ol>
        </nav>

        <header className={s.svcHero}>
          <div className={s.svcIntro}>
            <p className="eyebrow">{groupLabel}</p>
            <h1>{page.heading}</h1>
            <p className="lead">{lead}</p>
            {intro.map((p) => (
              <p key={p} className={s.svcP}>
                {p}
              </p>
            ))}
            <div className={s.svcActions}>
              <Link href={paths.section(lang, 'contact')} className="btn">
                {t.nav.cta}
                <Icon name="arrow" className="arrow" />
              </Link>
              <a href={company.phone.href} className="btn btn--ghost">
                <Icon name="phone" />
                {company.phone.display}
              </a>
            </div>
          </div>
          <div className={s.svcMedia}>
            <Image
              src={service.image}
              alt={service.imageAlt[lang]}
              sizes="(min-width: 1000px) 45vw, 100vw"
              preload
            />
          </div>
        </header>

        <div className="ruler" aria-hidden="true" />

        <div className={s.svcBody}>
          <div className={s.svcMain}>
            <section aria-labelledby="help-with">
              <h2 id="help-with" className={s.svcH2}>
                {t.servicePage.helpWith}
              </h2>
              <ul className={s.checklist}>
                {page.list.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {page.sections && (
              <div className={s.svcSections}>
                {page.sections.map((section) => (
                  <section key={section.title}>
                    <h3>{section.title}</h3>
                    <p>{section.text}</p>
                  </section>
                ))}
              </div>
            )}

            {page.conditions && (
              <section className={s.svcConditions} aria-labelledby="conditions">
                <h2 id="conditions" className={s.svcH2}>
                  {t.servicePage.conditions}
                </h2>
                <dl>
                  {page.conditions.map((c) => (
                    <div key={c.title}>
                      <dt>{c.title}</dt>
                      <dd>{c.text}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            {page.tips && (
              <section aria-labelledby="design-tips">
                <h2 id="design-tips" className={s.svcH2}>
                  {t.servicePage.designTips}
                </h2>
                <ol className={s.svcTips}>
                  {page.tips.map((tip, i) => (
                    <li key={tip.title}>
                      <span className="mono">{String(i + 1).padStart(2, '0')}</span>
                      <div>
                        <h3>{tip.title}</h3>
                        <p>{tip.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            <section aria-labelledby="good-to-know">
              <h2 id="good-to-know" className={s.svcH2}>
                {t.servicePage.goodToKnow}
              </h2>
              <ul className={s.svcNotes}>
                {page.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </section>

            {builtInWork.length > 0 && (
              <ul className={s.svcWork}>
                {builtInWork.map((item) => (
                  <li key={item.id}>
                    <figure>
                      <Image src={item.image} alt={item.caption[lang]} sizes="(min-width: 700px) 30vw, 50vw" />
                      <figcaption>{item.caption[lang]}</figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <aside className={s.svcAside}>
            <div className={s.priceCard}>
              <p className={`mono ${s.priceCardLabel}`}>{t.servicePage.priceTitle}</p>
              <p className={s.priceCardValue}>
                {isFixedPrice ? t.servicePage.priceFixed : (service.priceNote?.[lang] ?? t.servicePage.priceGeneral)}
              </p>
              {!isFixedPrice && (
                <ul>
                  {t.servicePage.priceLines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              )}
              <Link href={paths.section(lang, 'pricing')} className="text-link">
                {t.servicePage.pricingLink}
                <Icon name="arrow" size={18} />
              </Link>
            </div>

            <div className={`${s.ctaCard} on-night`}>
              <h2>{t.servicePage.ctaTitle}</h2>
              <p>{t.servicePage.ctaText}</p>
              <Link href={paths.section(lang, 'contact')} className="btn">
                {t.nav.cta}
                <Icon name="arrow" className="arrow" />
              </Link>
              <a href={company.phone.href} className={s.ctaCardPhone}>
                <Icon name="phone" size={18} />
                {company.phone.display}
              </a>
            </div>
          </aside>
        </div>
      </div>

      <section className={`section section--sand ${s.svcOthers}`} aria-labelledby="others">
        <div className="container">
          <h2 id="others" className={s.svcH2}>
            {t.servicePage.other}
          </h2>
          <ul className={s.others}>
            {others.map((other) => (
              <li key={other.id}>
                <Link href={paths.service(lang, other.slug[lang])}>
                  <span>{other.title[lang]}</span>
                  <Icon name="arrow" size={18} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
