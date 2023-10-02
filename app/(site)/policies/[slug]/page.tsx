import { draftMode } from "next/headers"
import { LiveQuery } from "next-sanity/preview/live-query"

import { getPolicyBySlug } from "@/lib/sanity.fetch"
import { policyBySlugQuery } from "@/lib/sanity.queries"
import { PolicyPage } from "@/components/pages/policy/policy-page"
import { PolicyPagePreview } from "@/components/pages/policy/policy-page-preview"

export const revalidate = 60

export default async function PolicySlugRoute({
  params,
}: {
  params: { slug: string }
}) {
  const data = await getPolicyBySlug({ slug: params.slug })

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={policyBySlugQuery}
      initialData={data}
      as={PolicyPagePreview}
    >
      <PolicyPage data={data!} />
    </LiveQuery>
  )
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
