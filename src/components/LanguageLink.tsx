'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { type Lang, otherLang } from '~/i18n';
import { alternatePath } from '~/i18n/routes';

interface LanguageLinkProps {
  lang: Lang;
  className?: string;
  label?: string;
  children: ReactNode;
}

/** Links to the same page in the other language. */
export default function LanguageLink({ lang, className, label, children }: LanguageLinkProps) {
  const pathname = usePathname() ?? '/';
  const target = otherLang(lang);
  // A plain <a>: the languages use separate root layouts, so this is a full page load anyway.
  return (
    <a href={alternatePath(pathname, target)} hrefLang={target} lang={target} className={className} aria-label={label}>
      {children}
    </a>
  );
}
