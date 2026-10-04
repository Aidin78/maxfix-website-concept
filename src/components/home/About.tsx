import Image from 'next/image';
import vanImage from '~/assets/images/van-gamla-stan.jpg';
import { type Lang, anchors } from '~/i18n';
import { getDictionary } from '~/i18n/ui';
import s from './About.module.css';

export default function About({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).about;
  const [firstParagraph, ...paragraphs] = t.paragraphs;

  return (
    <section
      id={anchors[lang].about}
      className="section section--sand"
      data-section="about"
      aria-labelledby="about-title"
    >
      <div className={`container ${s.aboutGrid}`}>
        <figure className={s.aboutMedia} data-reveal>
          <div className={s.aboutFrame}>
            <Image src={vanImage} alt={t.imageAlt} sizes="(min-width: 1000px) 38vw, 100vw" className={s.aboutImg} />
          </div>
          <figcaption className="mono">Gamla stan, Stockholm</figcaption>
        </figure>

        <div className={s.aboutCopy}>
          <header data-reveal>
            <p className="eyebrow">{t.eyebrow}</p>
            <h2 id="about-title">{t.title}</h2>
          </header>

          <p className={s.aboutIntro} data-reveal>
            {t.intro}
          </p>

          <div className={s.aboutBody} data-reveal>
            <p>{firstParagraph}</p>
            <blockquote className={s.aboutQuote}>
              <p>{t.quote}</p>
            </blockquote>
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className={s.aboutSignature}>
              <span className={s.aboutSigLine} aria-hidden="true" />
              {t.signature}
            </p>
          </div>

          <ol className={s.timeline} data-reveal>
            {t.timeline.map((item) => (
              <li key={item.year}>
                <span className={`mono ${s.timelineYear}`}>{item.year}</span>
                <span className={s.timelineText}>{item.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
