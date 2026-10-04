import '@fontsource-variable/schibsted-grotesk';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';
import '~/styles/globals.css';

import type { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import MobileBar from './MobileBar';
import RevealObserver from './RevealObserver';
import type { Lang } from '~/i18n';
import { getDictionary } from '~/i18n/ui';
import { organizationJsonLd } from '~/lib/metadata';

/** Enables the reveal-on-scroll styles before first paint (no JS → content stays visible). */
const enableJs = "document.documentElement.classList.add('js')";

/** The <html> document shared by the Swedish and English root layouts. */
export default function SiteChrome({ lang, children }: { lang: Lang; children: ReactNode }) {
  const t = getDictionary(lang);
  return (
    <html lang={lang} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: enableJs }} />
        <a href="#main" className="skip-link">
          {t.skip}
        </a>
        <Header lang={lang} />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer lang={lang} />
        <MobileBar lang={lang} />
        <RevealObserver />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
