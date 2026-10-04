import Icon from '~/components/Icon';
import { tips } from '~/data/tips';
import { type Lang, anchors } from '~/i18n';
import { getDictionary } from '~/i18n/ui';
import { revealDelay } from '~/lib/style';
import s from './HowItWorks.module.css';

export default function HowItWorks({ lang }: { lang: Lang }) {
  const t = getDictionary(lang);

  return (
    <section className="section section--sand" aria-labelledby="process-title">
      <div className="container">
        <header className="section-head" data-reveal>
          <p className="eyebrow">{t.process.eyebrow}</p>
          <h2 id="process-title">{t.process.title}</h2>
        </header>

        <ol className={s.steps}>
          {t.process.steps.map((step, i) => (
            <li key={step.title} className={s.step} data-reveal style={revealDelay(i * 0.08)}>
              <span className={`mono ${s.stepNum}`}>{String(i + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>

        <div id={anchors[lang].tips} className={s.tips} data-reveal>
          <div className={s.tipsHead}>
            <p className="eyebrow">{t.tips.eyebrow}</p>
            <h2>{t.tips.title}</h2>
          </div>
          <div className={s.tipsGroups}>
            {tips[lang].map((group) => (
              <div key={group.title} className={s.tipsGroup}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>
                      <Icon name="check" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
