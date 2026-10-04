'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type CSSProperties, useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import LanguageLink from './LanguageLink';
import Logo from './Logo';
import { company } from '~/data/company';
import { type Lang, paths } from '~/i18n';
import { getDictionary } from '~/i18n/ui';
import s from './Header.module.css';

interface HeaderProps {
  lang: Lang;
}

export default function Header({ lang }: HeaderProps) {
  const t = getDictionary(lang);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const links = [
    { label: t.nav.services, href: paths.section(lang, 'services'), section: 'services' },
    { label: t.nav.pricing, href: paths.section(lang, 'pricing'), section: 'pricing' },
    { label: t.nav.about, href: paths.section(lang, 'about'), section: 'about' },
    { label: t.nav.reviews, href: paths.section(lang, 'reviews'), section: 'reviews' },
    { label: t.nav.gallery, href: paths.gallery(lang), section: 'gallery' },
    { label: t.nav.contact, href: paths.section(lang, 'contact'), section: 'contact' },
  ];
  const contactHref = paths.section(lang, 'contact');
  // Section highlighting only makes sense on the home page.
  const currentSection = pathname === paths.home(lang) ? activeSection : null;

  // Sticky header shadow.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the nav link for the home-page section currently in view.
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-section]');
    if (!sections.length) return;
    const inView = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const key = (entry.target as HTMLElement).dataset.section ?? '';
          if (entry.isIntersecting) inView.add(key);
          else inView.delete(key);
        });
        setActiveSection(Array.from(inView).pop() ?? null);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  // Mobile menu: lock scroll, focus first link, close on Escape / desktop width.
  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? 'hidden' : '';
    if (menuOpen) menuRef.current?.querySelector<HTMLElement>('a')?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 1100px)');
    const onWidth = (e: MediaQueryListEvent) => e.matches && setMenuOpen(false);
    document.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onWidth);
    return () => {
      document.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onWidth);
      document.documentElement.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className={s.topbar}>
        <div className={`container ${s.topbarInner}`}>
          <p className={s.topbarText}>
            <Icon name="pin" size={15} />
            <span>{t.hero.eyebrow}</span>
          </p>
          <div className={s.topbarLinks}>
            <a href={company.phone.href}>
              <Icon name="phone" size={15} />
              <span>{company.phone.display}</span>
              <span className={s.topbarMuted}>· {t.hero.hours}</span>
            </a>
            <a href={`mailto:${company.email}`}>
              <Icon name="mail" size={15} />
              <span>{company.email}</span>
            </a>
            <LanguageLink lang={lang} className={s.topbarLang}>
              {t.nav.language}
            </LanguageLink>
          </div>
        </div>
      </div>

      <header className={`${s.header} ${scrolled ? s.isScrolled : ''}`}>
        <div className={`container ${s.headerInner}`}>
          <Link href={paths.home(lang)} className={s.headerLogo} aria-label={t.nav.home}>
            <Logo height={46} preload />
          </Link>

          <nav className={s.headerNav} aria-label={t.nav.label}>
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={currentSection === link.section ? s.isActive : undefined}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={s.headerActions}>
            <LanguageLink lang={lang} className={s.headerLang} label={t.nav.language}>
              {t.nav.languageShort}
            </LanguageLink>
            <Link href={contactHref} className={`btn ${s.headerCta}`}>
              {t.nav.cta}
            </Link>
            <a
              href={company.phone.href}
              className={s.headerIconBtn}
              aria-label={`${t.nav.call}: ${company.phone.display}`}
            >
              <Icon name="phone" size={20} />
            </a>
            <button
              ref={toggleRef}
              type="button"
              className={`${s.headerIconBtn} ${s.headerToggle}`}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="visually-hidden">{menuOpen ? t.nav.close : t.nav.menu}</span>
              <Icon name="menu" size={22} className={s.iconOpen} />
              <Icon name="close" size={22} className={s.iconClose} />
            </button>
          </div>
        </div>

        <div id="mobile-menu" ref={menuRef} className={s.mobileMenu} hidden={!menuOpen}>
          <nav className="container" aria-label={t.nav.label}>
            <ul className={s.mobileMenuLinks}>
              {links.map((link, i) => (
                <li key={link.href} style={{ '--i': i } as CSSProperties}>
                  <Link href={link.href} onClick={closeMenu}>
                    <span className="mono">{String(i + 1).padStart(2, '0')}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={s.mobileMenuFooter}>
              <Link href={contactHref} className="btn" onClick={closeMenu}>
                {t.nav.cta}
                <Icon name="arrow" className="arrow" />
              </Link>
              <a href={company.phone.href} className="btn btn--ghost">
                <Icon name="phone" />
                {company.phone.display}
              </a>
              <p className={s.mobileMenuMeta}>
                <a href={`mailto:${company.email}`}>{company.email}</a>
                <LanguageLink lang={lang}>{t.nav.language}</LanguageLink>
              </p>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
