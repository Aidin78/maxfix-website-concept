import Icon from '~/components/Icon';
import RequestForm from './RequestForm';
import { company } from '~/data/company';
import { services } from '~/data/services';
import { type Lang, anchors } from '~/i18n';
import { getDictionary } from '~/i18n/ui';
import s from './Contact.module.css';

export default function Contact({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).contact;

  return (
    <section id={anchors[lang].contact} className="section" data-section="contact" aria-labelledby="contact-title">
      <div className={`container ${s.contactGrid}`}>
        <div className={s.contactAside}>
          <header data-reveal>
            <p className="eyebrow">{t.eyebrow}</p>
            <h2 id="contact-title">{t.title}</h2>
            <p className="lead">{t.lead}</p>
          </header>

          <div className={s.contactDirect} data-reveal>
            <p className={`mono ${s.contactDirectTitle}`}>{t.direct}</p>
            <a href={company.phone.href} className={s.contactPhone}>
              <Icon name="phone" size={22} />
              {company.phone.display}
            </a>
            <p className={s.contactHours}>
              <Icon name="clock" size={16} />
              {t.phoneHours}
            </p>
            <a href={`mailto:${company.email}`} className={s.contactMail}>
              <Icon name="mail" size={20} />
              {company.email}
            </a>
          </div>

          <dl className={s.contactCompany} data-reveal>
            <div>
              <dt className="mono">{t.company}</dt>
              <dd>
                {company.legalName}
                <br />
                {company.address.street}
                <br />
                {`${company.address.postalCode} ${company.address.locality}`}
              </dd>
            </div>
            <div>
              <dt className="mono">{t.orgNr}</dt>
              <dd>{company.orgNumber}</dd>
            </div>
          </dl>
        </div>

        <div data-reveal>
          <RequestForm lang={lang} serviceOptions={services.map((service) => service.title[lang])} />
        </div>
      </div>
    </section>
  );
}
