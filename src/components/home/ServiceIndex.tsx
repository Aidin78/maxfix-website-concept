'use client';

import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Icon from '~/components/Icon';
import s from './Services.module.css';

export interface ServiceIndexItem {
  id: string;
  number: string;
  title: string;
  href: string;
  examples: string;
  priceNote?: string;
  image: StaticImageData;
}

export interface ServiceIndexGroup {
  id: string;
  label: string;
  items: ServiceIndexItem[];
}

interface ServiceIndexProps {
  groups: ServiceIndexGroup[];
  tips: { href: string; title: string; text: string };
}

/** Service list with a sticky photo preview that follows hover/focus (desktop). */
export default function ServiceIndex({ groups, tips }: ServiceIndexProps) {
  const items = groups.flatMap((g) => g.items);
  const [active, setActive] = useState<string | null>(null);
  const preview = items.find((i) => i.id === active) ?? items[0];

  return (
    <div className={s.servicesLayout}>
      <div className={s.servicesPreview} aria-hidden="true">
        <div className={s.servicesPreviewFrame}>
          {items.map((item, i) => (
            <Image
              key={item.id}
              src={item.image}
              alt=""
              sizes="(min-width: 1000px) 36vw, 1px"
              loading={i === 0 ? 'eager' : 'lazy'}
              className={`${s.servicesPreviewImg} ${item.id === preview?.id ? s.isActive : ''}`}
            />
          ))}
        </div>
        <p className={`mono ${s.servicesPreviewCaption}`}>{preview?.title}</p>
      </div>

      <div>
        {groups.map((group) => (
          <div key={group.id} className={s.servicesGroup}>
            <h3 className={s.servicesGroupTitle}>
              <span>{group.label}</span>
              <span className="mono">{String(group.items.length).padStart(2, '0')}</span>
            </h3>
            <ul className={s.servicesList}>
              {group.items.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`${s.serviceRow} ${item.id === active ? s.isActive : ''}`}
                    onMouseEnter={() => setActive(item.id)}
                    onFocus={() => setActive(item.id)}
                  >
                    <span className={s.serviceRowThumb} aria-hidden="true">
                      <Image src={item.image} alt="" width={64} height={64} />
                    </span>
                    <span className={`mono ${s.serviceRowNum}`} aria-hidden="true">
                      {item.number}
                    </span>
                    <span className={s.serviceRowBody}>
                      <span className={s.serviceRowTitle}>
                        {item.title}
                        {item.priceNote && <span className={`mono ${s.serviceRowPrice}`}>{item.priceNote}</span>}
                      </span>
                      <span className={s.serviceRowExamples}>{item.examples}</span>
                    </span>
                    <Icon name="arrow" className={s.serviceRowArrow} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <Link href={tips.href} className={s.servicesTips}>
          <Icon name="ruler" size={28} />
          <span>
            <strong>{tips.title}</strong>
            {tips.text}
          </span>
          <Icon name="arrow" className={s.serviceRowArrow} />
        </Link>
      </div>
    </div>
  );
}
