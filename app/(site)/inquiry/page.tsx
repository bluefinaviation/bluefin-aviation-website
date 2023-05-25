import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { InquiryPage } from '@/components/pages/inquiry/InquiryPage';
import { InquiryPagePreview } from '@/components/pages/inquiry/InquiryPagePreview';
import { PreviewSuspense } from '@/components/preview/PreviewSuspense';
import { PreviewWrapper } from '@/components/preview/PreviewWrapper';
import { getInquiryPage } from '@/lib/sanity.client';
import { getPreviewToken } from '@/lib/sanity.server.preview';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Inquiry',
  description: 'Fill our inquiry form and our team will reach out in no time.',
};

export default async function InquiryRoute() {
  const token = getPreviewToken();
  const data = (await getInquiryPage({ token })) || {
    formSection: null,
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
                <InquiryPage data={data} />
              </PreviewWrapper>
            }
          >
            <InquiryPagePreview token={token} />
          </PreviewSuspense>
        </>
      ) : (
        <InquiryPage data={data} />
      )}
    </>
  );
}
