import Image from 'next/image';
import Link from 'next/link';
import Icon from '~/components/Icon';
import ServiceIndex, { type ServiceIndexGroup } from './ServiceIndex';
import hallGarderob from '~/assets/images/gallery/hall-garderob.jpg';
import bokhylla3d from '~/assets/images/gallery/bokhylla-3d.jpg';
import { getService, serviceGroups, services } from '~/data/services';
import { type Lang, anchors, paths } from '~/i18n';
import { getDictionary } from '~/i18n/ui';
import s from './Services.module.css';

export default function Services({ lang }: { lang: Lang }) {
  const t = getDictionary(lang);
  const featured = getService('platsbyggt');

  const ordered = serviceGroups.flatMap((group) => services.filter((service) => service.group === group.id));
  const groups: ServiceIndexGroup[] = serviceGroups.map((group) => ({
    id: group.id,
    label: group.label[lang],
    items: services
      .filter((service) => service.group === group.id)
      .map((service) => ({
        id: service.id,
        number: String(ordered.indexOf(service) + 1).padStart(2, '0'),
        title: service.title[lang],
        href: paths.service(lang, service.slug[lang]),
        examples: service.examples[lang].join(' · '),
        priceNote: service.priceNote?.[lang],
        image: service.image,
      })),
  }));

  return (
    <section
      id={anchors[lang].services}
      className="section section--sand"
      data-section="services"
      aria-labelledby="services-title"
    >
      <div className="container">
        <header className="section-head section-head--split" data-reveal>
          <p className="eyebrow">{t.services.eyebrow}</p>
          <h2 id="services-title">{t.services.title}</h2>
          <p className="lead">{t.services.lead}</p>
        </header>

        <div data-reveal>
          <ServiceIndex
            groups={groups}
            tips={{ href: paths.section(lang, 'tips'), title: t.services.tipsTitle, text: t.services.tipsText }}
          />
        </div>

        <article className={s.featured} data-reveal>
          <div className={s.featuredMedia}>
            <Image
              src={featured.image}
              alt={featured.imageAlt[lang]}
              sizes="(min-width: 1000px) 45vw, 100vw"
              className={s.featuredMain}
            />
            <Image
              src={hallGarderob}
              alt={
                lang === 'sv'
                  ? 'Platsbyggd garderob och skohylla i en hall'
                  : 'Built-in wardrobe and shoe rack in a hallway'
              }
              sizes="(min-width: 1000px) 18vw, 40vw"
              className={s.featuredInset}
            />
          </div>
          <div className={s.featuredCopy}>
            <p className={`mono ${s.featuredBadge}`}>{t.services.featuredEyebrow}</p>
            <h3>{t.services.featuredTitle}</h3>
            <p>{t.services.featuredText}</p>
            <ul className={s.featuredList}>
              {featured.page[lang].conditions?.map((c) => (
                <li key={c.title}>
                  <Icon name="check" size={18} />
                  <span>
                    <strong>{c.title}.</strong> {c.text}
                  </span>
                </li>
              ))}
            </ul>
            <div className={s.featuredFoot}>
              <Link href={paths.service(lang, featured.slug[lang])} className="btn">
                {t.services.featuredCta}
                <Icon name="arrow" className="arrow" />
              </Link>
              <figure className={s.featuredModel}>
                <Image src={bokhylla3d} alt="" width={88} />
                <figcaption className="mono">3D</figcaption>
              </figure>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
