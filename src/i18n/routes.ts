import { type Lang, paths } from './index';

/**
 * URL slugs for each service, per language. Kept free of image imports so
 * client components (the language switch) can use it cheaply.
 */
export const serviceSlugs = {
  snickerier: { sv: 'snickerier', en: 'carpentry' },
  malerier: { sv: 'malerier', en: 'painting' },
  tapeter: { sv: 'tapeter', en: 'wallpapering' },
  golv: { sv: 'golv', en: 'flooring' },
  el: { sv: 'el', en: 'electrical' },
  mobler: { sv: 'mobler', en: 'furniture' },
  gardiner: { sv: 'gardiner', en: 'curtains' },
  utomhussnickerier: { sv: 'utomhussnickerier', en: 'outdoor-carpentry' },
  fasadmalning: { sv: 'fasadmalning', en: 'facade-painting' },
  stad: { sv: 'stad', en: 'cleaning' },
  design: { sv: 'design-services', en: 'design-services' },
  platsbyggt: { sv: 'platsbyggt', en: 'built-in-storage' },
} as const satisfies Record<string, Record<Lang, string>>;

function withSlash(path: string): string {
  return path.endsWith('/') ? path : `${path}/`;
}

/** The equivalent page in the other language, e.g. /tjanster/el/ ↔ /en/services/electrical/. */
export function alternatePath(pathname: string, target: Lang): string {
  const path = withSlash(pathname);
  const from: Lang = path === '/en/' || path.startsWith('/en/') ? 'en' : 'sv';
  if (from === target) return path;

  for (const page of ['gallery', 'terms'] as const) {
    if (path === paths[page](from)) return paths[page](target);
  }

  const servicePrefix = paths.service(from, '').slice(0, -1);
  if (path.startsWith(servicePrefix)) {
    const slug = path.slice(servicePrefix.length).replace(/\/$/, '');
    const match = Object.values(serviceSlugs).find((s) => s[from] === slug);
    if (match) return paths.service(target, match[target]);
  }

  return paths.home(target);
}
