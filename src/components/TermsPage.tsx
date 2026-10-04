import Icon from './Icon';
import { company } from '~/data/company';
import { skatteverketUrl, terms } from '~/data/terms';
import type { Lang } from '~/i18n';
import { getDictionary } from '~/i18n/ui';
import s from './TermsPage.module.css';

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function TermsPage({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).termsPage;
  const doc = terms[lang];
  const sections = doc.sections.map((section) => ({ ...section, id: slugify(section.heading) }));
  const toc = sections.filter((section) => section.level === 2);

  const details = [
    { label: t.legalName, value: company.legalName },
    { label: t.address, value: `${company.address.street}, ${company.address.postalCode} ${company.address.locality}` },
    { label: t.email, value: company.email, href: `mailto:${company.email}` },
    { label: t.orgNr, value: company.orgNumber },
    { label: t.vat, value: company.vatNumber },
    { label: t.phone, value: company.phone.display, href: company.phone.href },
  ];

  return (
    <article className={s.terms}>
      <div className={`container ${s.termsGrid}`}>
        <header className={s.termsHead}>
          <p className="eyebrow">MaxFix</p>
          <h1>{doc.title}</h1>
          <p className="lead">{doc.intro}</p>
          <nav className={s.termsToc} aria-label={doc.title}>
            <ul>
              {toc.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.heading}</a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <div className={s.termsBody}>
          {sections.map((section) => {
            const Heading = section.level === 2 ? 'h2' : section.level === 3 ? 'h4' : 'h3';
            return (
              <section key={section.id} id={section.id} className={s.termsSection}>
                <Heading>{section.heading}</Heading>
                {section.blocks.map((block, i) =>
                  typeof block === 'string' ? (
                    <p key={i}>{block}</p>
                  ) : (
                    <ul key={i}>
                      {block.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ),
                )}
              </section>
            );
          })}

          <p className={s.termsMore}>
            <a href={skatteverketUrl} className="text-link" target="_blank" rel="noopener">
              {t.readMore}
              <Icon name="arrow-up-right" size={18} />
            </a>
          </p>

          <section className={s.termsCompany} aria-labelledby="company-details">
            <h2 id="company-details">{t.companyTitle}</h2>
            <dl>
              {details.map((d) => (
                <div key={d.label}>
                  <dt>{d.label}</dt>
                  <dd>{d.href ? <a href={d.href}>{d.value}</a> : d.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </div>
    </article>
  );
}
