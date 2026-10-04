import HomePage from '~/components/home/HomePage';
import { paths } from '~/i18n';
import { buildMetadata } from '~/lib/metadata';

export const metadata = buildMetadata({
  lang: 'en',
  alternates: { sv: paths.home('sv'), en: paths.home('en') },
});

export default function Page() {
  return <HomePage lang="en" />;
}
