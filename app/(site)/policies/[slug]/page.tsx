import { notFound } from 'next/navigation';

import { PolicyPage } from '@/components/pages/policy/PolicyPage';
import { PolicyPreview } from '@/components/pages/policy/PolicyPreview';
import { PreviewSuspense } from '@/components/preview/PreviewSuspense';
import { PreviewWrapper } from '@/components/preview/PreviewWrapper';
import { getPolicyBySlug } from '@/lib/sanity.client';
import { getPreviewToken } from '@/lib/sanity.server.preview';

export default async function PolicySlugRoute({
  params,
}: {
  params: { slug: string };
}) {
  const token = getPreviewToken();
  const data = await getPolicyBySlug({ slug: params.slug });
  if (!data && !token) {
    notFound();
  }

  return (
    <>
      {token ? (
        <PreviewSuspense
          fallback={
            <PreviewWrapper>
              <PolicyPage data={data!} />
            </PreviewWrapper>
          }
        >
          <PolicyPreview token={token} slug={params.slug} />
        </PreviewSuspense>
      ) : (
        <PolicyPage data={data!} />
      )}
    </>
  );
}

// // import { Page } from 'components/pages/page/Page'
// // import { PagePreview } from 'components/pages/page/PagePreview'
// // import { PreviewSuspense } from 'components/preview/PreviewSuspense'
// // import { PreviewWrapper } from 'components/preview/PreviewWrapper'
// // import { getPageBySlug } from 'lib/sanity.client'
// // import { getPreviewToken } from 'lib/sanity.server.preview'
// // import { notFound } from 'next/navigation'

// // export default async function PageSlugRoute({
// //   params,
// // }: {
// //   params: { slug: string }
// // }) {
// //   const { slug } = params
// //   const token = getPreviewToken()
// //   const data = await getPageBySlug({ slug })

// //   if (!data && !token) {
// //     notFound()
// //   }

// //   return (
// //     <>
// //       {token ? (
// //         <PreviewSuspense
// //           fallback={
// //             <PreviewWrapper>
// //               <Page data={data!} />
// //             </PreviewWrapper>
// //           }
// //         >
// //           <PagePreview token={token} slug={params.slug} />
// //         </PreviewSuspense>
// //       ) : (
// //         <Page data={data!} />
// //       )}
// //     </>
// //   )
// // }
