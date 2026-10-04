import TermsPage from '~/components/TermsPage';
import { terms } from '~/data/terms';
import { paths } from '~/i18n';
import { buildMetadata } from '~/lib/metadata';

export const metadata = buildMetadata({
  lang: 'en',
  title: `${terms.en.title} | MaxFix`,
  description: terms.en.intro,
  alternates: { sv: paths.terms('sv'), en: paths.terms('en') },
});

export default function Page() {
  return <TermsPage lang="en" />;
}
