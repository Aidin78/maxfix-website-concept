import Image from 'next/image';
import Link from 'next/link';
import Icon from '~/components/Icon';
import { featuredWork, work } from '~/data/gallery';
import { type Lang, anchors, paths } from '~/i18n';
import { getDictionary } from '~/i18n/ui';
import { revealDelay } from '~/lib/style';
import s from './Work.module.css';

const itemClass = [s.workItem1, '', '', s.workItem4, s.workItem5, s.workItem6];

export default function Work({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).work;
  const items = featuredWork.flatMap((id) => work.filter((w) => w.id === id));

  return (
    <section id={anchors[lang].work} className="section" data-section="gallery" aria-labelledby="work-title">
      <div className="container">
        <header className={s.workHead} data-reveal>
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h2 id="work-title">{t.title}</h2>
          </div>
          <p className="lead">{t.lead}</p>
          <Link href={paths.gallery(lang)} className={`btn btn--ghost ${s.workAll}`}>
            {t.all}
            <Icon name="arrow" className="arrow" />
          </Link>
        </header>

        <ul className={s.workGrid}>
          {items.map((item, i) => (
            <li key={item.id} className={itemClass[i]} data-reveal style={revealDelay((i % 3) * 0.08)}>
              <Link href={`${paths.gallery(lang)}#${item.id}`} className={s.workLink}>
                <span className={s.workFrame}>
                  <Image
                    src={item.image}
                    alt={item.caption[lang]}
                    sizes={i === 0 ? '(min-width: 900px) 50vw, 100vw' : '(min-width: 900px) 25vw, 50vw'}
                  />
                </span>
                <span className={s.workCaption}>
                  <span>{item.caption[lang]}</span>
                  {item.date && <span className="mono">{item.date}</span>}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
