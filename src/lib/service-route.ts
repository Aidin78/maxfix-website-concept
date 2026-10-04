import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { type Service, services } from '~/data/services';
import { type Lang, paths } from '~/i18n';
import { buildMetadata } from '~/lib/metadata';

export interface ServiceRouteProps {
  params: Promise<{ slug: string }>;
}

export function serviceParams(lang: Lang) {
  return () => services.map((service) => ({ slug: service.slug[lang] }));
}

export async function findService(lang: Lang, params: ServiceRouteProps['params']): Promise<Service> {
  const { slug } = await params;
  const service = services.find((s) => s.slug[lang] === slug);
  if (!service) notFound();
  return service;
}

export function serviceMetadata(lang: Lang) {
  return async ({ params }: ServiceRouteProps): Promise<Metadata> => {
    const service = await findService(lang, params);
    const page = service.page[lang];
    return buildMetadata({
      lang,
      title: `${page.heading} | MaxFix`,
      description: `${page.intro[0]?.slice(0, 150).trim()}…`,
      alternates: { sv: paths.service('sv', service.slug.sv), en: paths.service('en', service.slug.en) },
    });
  };
}
