import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '~/components/Icon';
import SiteChrome from '~/components/SiteChrome';
import { company } from '~/data/company';
import { paths } from '~/i18n';
import { getDictionary } from '~/i18n/ui';
import { siteMetadata } from '~/lib/metadata';
import s from '~/components/NotFound.module.css';

const sv = getDictionary('sv').notFound;
const en = getDictionary('en').notFound;

export const metadata: Metadata = {
  ...siteMetadata,
  title: `${sv.title} | MaxFix`,
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <SiteChrome lang="sv">
      <section className={s.nf}>
        <div className="container">
          <p className={`mono ${s.nfCode}`}>404</p>
          <h1>{sv.title}</h1>
          <p className="lead">{sv.text}</p>
          <div className={s.nfActions}>
            <Link href={paths.home('sv')} className="btn">
              {sv.home}
              <Icon name="arrow" className="arrow" />
            </Link>
            <a href={company.phone.href} className="btn btn--ghost">
              <Icon name="phone" />
              {company.phone.display}
            </a>
          </div>
          <p className={s.nfEn} lang="en">
            {en.title}. <a href={paths.home('en')}>{en.home}</a>
          </p>
        </div>
      </section>
    </SiteChrome>
  );
}
