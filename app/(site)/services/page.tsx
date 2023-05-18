import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ServicesPage } from '@/components/pages/services/ServicesPage';
import { ServicesPagePreview } from '@/components/pages/services/ServicesPagePreview';
import { PreviewSuspense } from '@/components/preview/PreviewSuspense';
import { PreviewWrapper } from '@/components/preview/PreviewWrapper';
import { getServicesPage } from '@/lib/sanity.client';
import { getPreviewToken } from '@/lib/sanity.server.preview';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Services',
  description:
    'The best solution for your aviation needs with concierge-style trip support and worldwide fuel network. Learn more about our total aircraft management services.',
};

export default async function ServicesRoute() {
  const token = getPreviewToken();
  const data = (await getServicesPage({ token })) || {
    title: {},
    heroSection: {},
    tripService: {},
    fuelService: {},
  };

  if (!data && !token) {
    notFound();
  }

  return (
    <>
      {token ? (
        <>
          <PreviewSuspense
            fallback={
              <PreviewWrapper>
                <ServicesPage data={data} />
              </PreviewWrapper>
            }
          >
            <ServicesPagePreview token={token} />
          </PreviewSuspense>
        </>
      ) : (
        <ServicesPage data={data} />
      )}
    </>
  );
}
