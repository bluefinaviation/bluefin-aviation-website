import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { TripServicePage } from '@/components/pages/tripService/TripServicePage';
import { TripServicePagePreview } from '@/components/pages/tripService/TripServicePagePreview';
import { PreviewSuspense } from '@/components/preview/PreviewSuspense';
import { PreviewWrapper } from '@/components/preview/PreviewWrapper';
import { getTripServicePage } from '@/lib/sanity.client';
import { getPreviewToken } from '@/lib/sanity.server.preview';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Trip Support',
  description:
    'The best solution for your aviation needs with concierge-style trip support and worldwide fuel network. Learn more about our trip services.',
};

export default async function TripSupportRoute() {
  const token = getPreviewToken();
  const data = (await getTripServicePage({ token })) || {
    heroSection: null,
    featuresSection: null,
    gallerySection: null,
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
                <TripServicePage data={data} />
              </PreviewWrapper>
            }
          >
            <TripServicePagePreview token={token} />
          </PreviewSuspense>
        </>
      ) : (
        <TripServicePage data={data} />
      )}
    </>
  );
}
