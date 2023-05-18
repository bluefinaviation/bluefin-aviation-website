import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { FuelServicePage } from '@/components/pages/fuelService/FuelServicePage';
import { FuelServicePagePreview } from '@/components/pages/fuelService/FuelServicePagePreview';
import { PreviewSuspense } from '@/components/preview/PreviewSuspense';
import { PreviewWrapper } from '@/components/preview/PreviewWrapper';
import { getFuelServicePage } from '@/lib/sanity.client';
import { getPreviewToken } from '@/lib/sanity.server.preview';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Fuel Support',
  description:
    'The best solution for your aviation needs with concierge-style trip support and worldwide fuel network. Learn more about our trip services.',
};

export default async function FuelSupportRoute() {
  const token = getPreviewToken();
  const data = (await getFuelServicePage({ token })) || {
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
                <FuelServicePage data={data} />
              </PreviewWrapper>
            }
          >
            <FuelServicePagePreview token={token} />
          </PreviewSuspense>
        </>
      ) : (
        <FuelServicePage data={data} />
      )}
    </>
  );
}
