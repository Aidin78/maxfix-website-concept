import About from './About';
import Contact from './Contact';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import Pricing from './Pricing';
import Reviews from './Reviews';
import Services from './Services';
import Work from './Work';
import type { Lang } from '~/i18n';

export default function HomePage({ lang }: { lang: Lang }) {
  return (
    <>
      <Hero lang={lang} />
      <Services lang={lang} />
      <Pricing lang={lang} />
      <Reviews lang={lang} />
      <About lang={lang} />
      <Work lang={lang} />
      <HowItWorks lang={lang} />
      <Contact lang={lang} />
    </>
  );
}
