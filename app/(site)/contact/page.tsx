import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ContactPage } from '@/components/pages/contact/ContactPage';
import { ContactPagePreview } from '@/components/pages/contact/ContactPagePreview';
import { PreviewSuspense } from '@/components/preview/PreviewSuspense';
import { PreviewWrapper } from '@/components/preview/PreviewWrapper';
import { getContactPage } from '@/lib/sanity.client';
import { getPreviewToken } from '@/lib/sanity.server.preview';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'The best solution for your aviation needs with concierge-style trip support and worldwide fuel network. Contact us to discuss more.',
};

export default async function ContactRoute() {
  const token = getPreviewToken();
  const data = (await getContactPage({ token })) || {
    contactSection: null,
    locationSection: null,
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
                <ContactPage data={data} />
              </PreviewWrapper>
            }
          >
            <ContactPagePreview token={token} />
          </PreviewSuspense>
        </>
      ) : (
        <ContactPage data={data} />
      )}
    </>
  );
}
