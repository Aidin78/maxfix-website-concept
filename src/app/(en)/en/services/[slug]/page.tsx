import ServicePage from '~/components/ServicePage';
import { type ServiceRouteProps, findService, serviceMetadata, serviceParams } from '~/lib/service-route';

export const dynamicParams = false;
export const generateStaticParams = serviceParams('en');
export const generateMetadata = serviceMetadata('en');

export default async function Page({ params }: ServiceRouteProps) {
  const service = await findService('en', params);
  return <ServicePage lang="en" service={service} />;
}
