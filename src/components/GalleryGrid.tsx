'use client';

import Image, { type StaticImageData } from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import s from './GalleryPage.module.css';

export interface GalleryItem {
  id: string;
  category: string;
  caption: string;
  date?: string;
  image: StaticImageData;
  /** Optimised large version for the lightbox. */
  fullSrc: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
  categories: { id: string; label: string }[];
  labels: { all: string; filter: string; open: string; close: string; prev: string; next: string; title: string };
}

export default function GalleryGrid({ items, categories, labels }: GalleryGridProps) {
  const [filter, setFilter] = useState('all');
  const [current, setCurrent] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const returnFocus = useRef<HTMLButtonElement | null>(null);

  const visible = items.filter((item) => filter === 'all' || item.category === filter);
  const shown = current === null ? null : visible[current];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (current !== null && !dialog.open) {
      dialog.showModal();
      document.documentElement.style.overflow = 'hidden';
    }
    if (current === null && dialog.open) dialog.close();
  }, [current]);

  const step = (delta: number) =>
    setCurrent((index) => (index === null ? null : (index + delta + visible.length) % visible.length));

  return (
    <>
      <div className={s.galleryFilters} role="group" aria-label={labels.filter}>
        {[{ id: 'all', label: labels.all }, ...categories].map((c) => (
          <button
            key={c.id}
            type="button"
            className={s.filter}
            aria-pressed={filter === c.id}
            onClick={() => setFilter(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <ul className={s.galleryGrid}>
        {items.map((item, i) => {
          const index = visible.indexOf(item);
          return (
            <li key={item.id} id={item.id} className={s.galleryItem} hidden={index === -1}>
              <button
                type="button"
                className={s.galleryOpen}
                aria-label={`${labels.open}: ${item.caption}`}
                onClick={(e) => {
                  returnFocus.current = e.currentTarget;
                  setCurrent(index);
                }}
              >
                <Image
                  src={item.image}
                  alt={item.caption}
                  sizes="(min-width: 1100px) 33vw, (min-width: 640px) 50vw, 100vw"
                  loading={i < 3 ? 'eager' : 'lazy'}
                />
              </button>
              <p className={s.galleryCaption}>
                <span>{item.caption}</span>
                {item.date && <span className="mono">{item.date}</span>}
              </p>
            </li>
          );
        })}
      </ul>

      <dialog
        ref={dialogRef}
        className={s.lightbox}
        aria-label={labels.title}
        onClose={() => {
          setCurrent(null);
          document.documentElement.style.overflow = '';
          returnFocus.current?.focus();
        }}
        onClick={(e) => e.target === e.currentTarget && setCurrent(null)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') step(-1);
          if (e.key === 'ArrowRight') step(1);
        }}
      >
        <figure className={s.lightboxFigure}>
          {/* A plain <img>: the optimised URL is resolved on the server and sized by CSS. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {shown && <img src={shown.fullSrc} alt={shown.caption} />}
          <figcaption>{shown?.caption}</figcaption>
        </figure>
        <button
          type="button"
          className={`${s.lightboxBtn} ${s.lightboxClose}`}
          aria-label={labels.close}
          onClick={() => setCurrent(null)}
        >
          <Icon name="close" />
        </button>
        <button type="button" className={`${s.lightboxBtn} ${s.lightboxPrev}`} aria-label={labels.prev} onClick={() => step(-1)}>
          <Icon name="arrow-left" />
        </button>
        <button type="button" className={`${s.lightboxBtn} ${s.lightboxNext}`} aria-label={labels.next} onClick={() => step(1)}>
          <Icon name="arrow" />
        </button>
      </dialog>
    </>
  );
}
