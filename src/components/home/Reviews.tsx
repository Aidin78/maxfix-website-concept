import Image from 'next/image';
import Icon from '~/components/Icon';
import recoBadge from '~/assets/images/reco-badge.png';
import { company } from '~/data/company';
import { type Lang, anchors } from '~/i18n';
import { getDictionary } from '~/i18n/ui';
import { revealDelay } from '~/lib/style';
import s from './Reviews.module.css';

export default function Reviews({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).reviews;

  return (
    <section id={anchors[lang].reviews} className="section" data-section="reviews" aria-labelledby="reviews-title">
      <div className="container">
        <div className={s.reviewsTop}>
          <header className={s.reviewsHead} data-reveal>
            <p className="eyebrow">{t.eyebrow}</p>
            <h2 id="reviews-title">{t.title}</h2>
            <p className="lead">{t.lead}</p>
          </header>

          <figure className={s.reviewsAward} data-reveal style={revealDelay(0.1)}>
            <Image src={recoBadge} alt={t.badgeAlt} width={170} className={s.reviewsBadge} />
            <figcaption>
              <strong>{t.badgeText}</strong>
              <span className="mono">{t.badgeDetail}</span>
            </figcaption>
          </figure>
        </div>

        <div className={s.reviewsWidget} data-reveal>
          <span className={`mono ${s.reviewsPlaceholder}`} aria-hidden="true">
            Reco
          </span>
          {/* Live reviews, rating and review count from Reco – nothing is hard-coded. */}
          <iframe src={company.reco.horizontalQuote} title={t.widgetTitle} loading="lazy" width="100%" height="225" />
        </div>

        <div className={s.reviewsBottom} data-reveal>
          <a href={company.reco.profile} target="_blank" rel="noopener" className="text-link">
            {t.readAll}
            <Icon name="arrow-up-right" size={18} />
          </a>
          <div className={s.reviewsSocial}>
            <p className="eyebrow">{t.follow}</p>
            <div className={s.reviewsSocialLinks}>
              <a href={company.social.instagram} target="_blank" rel="noopener" className="btn btn--ghost">
                <Icon name="instagram" />
                @maxfixstockholm
              </a>
              <a href={company.social.facebook} target="_blank" rel="noopener" className="btn btn--ghost">
                <Icon name="facebook" />
                MaxFix.nu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
