import Link from 'next/link';
import { getImageProps } from 'next/image';
import GalleryGrid, { type GalleryItem } from './GalleryGrid';
import Icon from './Icon';
import { categories, work } from '~/data/gallery';
import { type Lang, paths } from '~/i18n';
import { getDictionary } from '~/i18n/ui';
import s from './GalleryPage.module.css';

export default function GalleryPage({ lang }: { lang: Lang }) {
  const t = getDictionary(lang);
  const g = t.galleryPage;

  const items: GalleryItem[] = work.map((item) => ({
    id: item.id,
    category: item.category,
    caption: item.caption[lang],
    date: item.date,
    image: item.image,
    fullSrc: getImageProps({ src: item.image, alt: '', width: Math.min(1920, item.image.width) }).props.src,
  }));
  const usedCategories = categories
    .filter((c) => work.some((w) => w.category === c.id))
    .map((c) => ({ id: c.id, label: c.label[lang] }));

  return (
    <section className={s.gallery}>
      <div className="container">
        <header className={s.galleryHead}>
          <p className="eyebrow">{t.work.eyebrow}</p>
          <h1>{g.title}</h1>
          <p className="lead">{g.lead}</p>
        </header>

        <GalleryGrid
          items={items}
          categories={usedCategories}
          labels={{
            all: g.all,
            filter: g.filterLabel,
            open: g.open,
            close: g.close,
            prev: g.prev,
            next: g.next,
            title: g.title,
          }}
        />

        <div className={s.galleryCta}>
          <p>{t.servicePage.ctaText}</p>
          <Link href={paths.section(lang, 'contact')} className="btn">
            {t.nav.cta}
            <Icon name="arrow" className="arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
