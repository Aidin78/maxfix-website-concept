export const languages = {
  sv: 'Svenska',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'sv';

/** Section anchors on the home page, per language. */
export const anchors = {
  sv: {
    services: 'tjanster',
    pricing: 'priser',
    reviews: 'omdomen',
    about: 'om-oss',
    work: 'jobb',
    tips: 'tips',
    contact: 'kontakt',
  },
  en: {
    services: 'services',
    pricing: 'pricing',
    reviews: 'reviews',
    about: 'about',
    work: 'work',
    tips: 'tips',
    contact: 'contact',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type AnchorKey = keyof (typeof anchors)['sv'];

const bases = {
  sv: { home: '/', service: '/tjanster/', gallery: '/galleri/', terms: '/villkor/' },
  en: { home: '/en/', service: '/en/services/', gallery: '/en/gallery/', terms: '/en/terms/' },
} as const;

export const paths = {
  home: (lang: Lang) => bases[lang].home,
  section: (lang: Lang, key: AnchorKey) => `${bases[lang].home}#${anchors[lang][key]}`,
  service: (lang: Lang, slug: string) => `${bases[lang].service}${slug}/`,
  gallery: (lang: Lang) => bases[lang].gallery,
  terms: (lang: Lang) => bases[lang].terms,
};

export function otherLang(lang: Lang): Lang {
  return lang === 'sv' ? 'en' : 'sv';
}

/** Swedish-style number formatting, e.g. 1 200. */
export function formatNumber(value: number, lang: Lang): string {
  return new Intl.NumberFormat(lang === 'sv' ? 'sv-SE' : 'en-GB').format(value);
}
