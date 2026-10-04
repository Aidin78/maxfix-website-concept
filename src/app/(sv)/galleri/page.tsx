import GalleryPage from '~/components/GalleryPage';
import { paths } from '~/i18n';
import { getDictionary } from '~/i18n/ui';
import { buildMetadata } from '~/lib/metadata';

const t = getDictionary('sv').galleryPage;

export const metadata = buildMetadata({
  lang: 'sv',
  title: `${t.title} | MaxFix`,
  description: t.lead,
  alternates: { sv: paths.gallery('sv'), en: paths.gallery('en') },
});

export default function Page() {
  return <GalleryPage lang="sv" />;
}
