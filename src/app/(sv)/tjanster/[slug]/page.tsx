import ServicePage from '~/components/ServicePage';
import { type ServiceRouteProps, findService, serviceMetadata, serviceParams } from '~/lib/service-route';

export const dynamicParams = false;
export const generateStaticParams = serviceParams('sv');
export const generateMetadata = serviceMetadata('sv');

export default async function Page({ params }: ServiceRouteProps) {
  const service = await findService('sv', params);
  return <ServicePage lang="sv" service={service} />;
}
