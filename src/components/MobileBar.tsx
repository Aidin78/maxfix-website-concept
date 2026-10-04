'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Icon from './Icon';
import { company } from '~/data/company';
import { type Lang, paths } from '~/i18n';
import { getDictionary } from '~/i18n/ui';
import s from './MobileBar.module.css';

/** Sticky "send a request / call" bar on small screens. */
export default function MobileBar({ lang }: { lang: Lang }) {
  const t = getDictionary(lang);
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Hide the bar while the form or footer (which repeat these actions) is on screen.
    const blocking = new Set<Element>();
    const update = () => setVisible(window.scrollY > window.innerHeight * 0.8 && blocking.size === 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? blocking.add(e.target) : blocking.delete(e.target)));
      update();
    });
    document.querySelectorAll('[data-section="contact"], footer').forEach((el) => observer.observe(el));

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', update);
    };
  }, [pathname]);

  return (
    <div className={`${s.mobileBar} ${visible ? s.isVisible : ''}`} aria-hidden={!visible} inert={!visible}>
      <Link href={paths.section(lang, 'contact')} className={`btn ${s.mobileBarCta}`}>
        {t.nav.cta}
        <Icon name="arrow" className="arrow" />
      </Link>
      <a href={company.phone.href} className={s.mobileBarCall} aria-label={`${t.nav.call}: ${company.phone.display}`}>
        <Icon name="phone" size={22} />
      </a>
    </div>
  );
}
