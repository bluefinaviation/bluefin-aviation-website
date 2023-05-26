import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { LinktreePage } from '@/components/pages/linktree/LinktreePage';
import { LinktreePagePreview } from '@/components/pages/linktree/LinktreePagePreview';
import { PreviewSuspense } from '@/components/preview/PreviewSuspense';
import { PreviewWrapper } from '@/components/preview/PreviewWrapper';
import { getLinktreePage } from '@/lib/sanity.client';
import { getPreviewToken } from '@/lib/sanity.server.preview';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Linktree',
  description:
    'The best solution for your aviation needs with concierge-style trip support and worldwide fuel network. Check our more important links.',
};

export default async function LinktreeRoute() {
  const token = getPreviewToken();
  const data = (await getLinktreePage({ token })) || {
    heroSection: null,
    links: null,
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
                <LinktreePage data={data} />
              </PreviewWrapper>
            }
          >
            <LinktreePagePreview token={token} />
          </PreviewSuspense>
        </>
      ) : (
        <LinktreePage data={data} />
      )}
    </>
  );
}
