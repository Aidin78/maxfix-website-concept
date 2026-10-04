import Link from 'next/link';
import Icon from './Icon';
import LanguageLink from './LanguageLink';
import Logo from './Logo';
import { company } from '~/data/company';
import { services } from '~/data/services';
import { type Lang, paths } from '~/i18n';
import { getDictionary } from '~/i18n/ui';
import s from './Footer.module.css';

export default function Footer({ lang }: { lang: Lang }) {
  const t = getDictionary(lang);
  const year = new Date().getFullYear();

  const companyLinks = [
    { label: t.nav.about, href: paths.section(lang, 'about') },
    { label: t.nav.pricing, href: paths.section(lang, 'pricing') },
    { label: t.nav.reviews, href: paths.section(lang, 'reviews') },
    { label: t.nav.gallery, href: paths.gallery(lang) },
    { label: t.footer.tips, href: paths.section(lang, 'tips') },
    { label: t.footer.terms, href: paths.terms(lang) },
  ];

  return (
    <footer className={`${s.footer} on-night`}>
      <div className="container">
        <div className={s.footerTop}>
          <div className={s.footerBrand}>
            <span className={s.footerLogo}>
              <Logo height={52} />
            </span>
            <p>{t.footer.tagline}</p>
            <div className={s.footerSocial}>
              <a href={company.social.instagram} rel="noopener" target="_blank" aria-label="Instagram">
                <Icon name="instagram" size={20} />
              </a>
              <a href={company.social.facebook} rel="noopener" target="_blank" aria-label="Facebook">
                <Icon name="facebook" size={20} />
              </a>
            </div>
          </div>

          <nav aria-labelledby="footer-services">
            <h2 id="footer-services" className={s.footerHeading}>
              {t.footer.services}
            </h2>
            <ul className={`${s.footerList} ${s.footerListTwo}`}>
              {services.map((service) => (
                <li key={service.id}>
                  <Link href={paths.service(lang, service.slug[lang])}>{service.title[lang]}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-company">
            <h2 id="footer-company" className={s.footerHeading}>
              {t.footer.company}
            </h2>
            <ul className={s.footerList}>
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={s.footerHeading}>{t.footer.contact}</h2>
            <address className={s.footerContact}>
              <a href={company.phone.href} className={s.footerPhone}>
                {company.phone.display}
              </a>
              <span className={s.footerMuted}>{t.contact.phoneHours}</span>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <span>
                {company.legalName}
                <br />
                {company.address.street}
                <br />
                {`${company.address.postalCode} ${company.address.locality}`}
              </span>
            </address>
          </div>
        </div>

        <div className={`ruler ${s.footerRuler}`} aria-hidden="true" />

        <div className={s.footerBottom}>
          <p>
            {`© ${year} ${company.legalName} · ${t.contact.orgNr} ${company.orgNumber} · ${t.footer.vat} ${company.vatNumber}`}
          </p>
          <LanguageLink lang={lang}>{t.nav.language}</LanguageLink>
        </div>
      </div>
    </footer>
  );
}
