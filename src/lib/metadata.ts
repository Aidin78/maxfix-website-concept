import type { Metadata } from 'next';
import ogImage from '~/assets/images/car-gamla-stan.jpg';
import { company } from '~/data/company';
import type { Lang } from '~/i18n';
import { getDictionary } from '~/i18n/ui';

interface PageMeta {
  lang: Lang;
  /** Same page in each language – drives canonical + hreflang. */
  alternates: Record<Lang, string>;
  title?: string;
  description?: string;
  noindex?: boolean;
}

export function buildMetadata({ lang, alternates, title, description, noindex }: PageMeta): Metadata {
  const t = getDictionary(lang);
  const pageTitle = title ?? t.meta.title;
  const pageDescription = description ?? t.meta.description;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: alternates[lang],
      languages: { sv: alternates.sv, en: alternates.en, 'x-default': alternates.sv },
    },
    openGraph: {
      type: 'website',
      siteName: company.brand,
      locale: lang === 'sv' ? 'sv_SE' : 'en_GB',
      title: pageTitle,
      description: pageDescription,
      url: alternates[lang],
      images: [{ url: ogImage.src, width: ogImage.width, height: ogImage.height }],
    },
    twitter: { card: 'summary_large_image' },
    robots: noindex ? { index: false } : undefined,
  };
}

/** Shared by both root layouts. */
export const siteMetadata: Metadata = {
  metadataBase: new URL(company.url),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: company.brand,
  legalName: company.legalName,
  url: company.url,
  telephone: company.phone.e164,
  email: company.email,
  taxID: company.orgNumber,
  vatID: company.vatNumber,
  foundingDate: company.founded,
  areaServed: 'Stockholms län',
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.address.street,
    postalCode: company.address.postalCode,
    addressLocality: company.address.locality,
    addressRegion: company.address.region,
    addressCountry: company.address.country,
  },
  sameAs: [company.social.instagram, company.social.facebook, company.reco.profile],
};
