import type { MetadataRoute } from 'next';
import { company } from '~/data/company';
import { services } from '~/data/services';
import { type Lang, paths } from '~/i18n';

type Pair = Record<Lang, string>;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: Pair[] = [
    { sv: paths.home('sv'), en: paths.home('en') },
    ...services.map((s) => ({ sv: paths.service('sv', s.slug.sv), en: paths.service('en', s.slug.en) })),
    { sv: paths.gallery('sv'), en: paths.gallery('en') },
    { sv: paths.terms('sv'), en: paths.terms('en') },
  ];
  const url = (path: string) => new URL(path, company.url).href;

  return pages.flatMap((pair) =>
    (['sv', 'en'] as const).map((lang) => ({
      url: url(pair[lang]),
      alternates: { languages: { sv: url(pair.sv), en: url(pair.en) } },
    })),
  );
}
