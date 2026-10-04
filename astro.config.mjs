// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.maxfix.nu',
  trailingSlash: 'ignore',
  i18n: {
    locales: ['sv', 'en'],
    defaultLocale: 'sv',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  image: {
    responsiveStyles: false,
  },
});
