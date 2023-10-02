import type { Metadata } from "next"
import { draftMode } from "next/headers"
import { LiveQuery } from "next-sanity/preview/live-query"

import { getNewsletterPage } from "@/lib/sanity.fetch"
import { newsletterPageQuery } from "@/lib/sanity.queries"
import { NewsletterPage } from "@/components/pages/newsletter/newsletter-page"
import { NewsletterPagePreview } from "@/components/pages/newsletter/newsletter-page-preview"

export const revalidate = 60

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "The best solution for your aviation needs with concierge-style trip support and worldwide fuel network. Join our newsletter for a monthly dose of aviation news.",
}

export default async function NewsletterRoute() {
  const data = await getNewsletterPage()

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={newsletterPageQuery}
      initialData={data}
      as={NewsletterPagePreview}
    >
      <NewsletterPage data={data} />
    </LiveQuery>
  )
}
// // import { toPlainText } from '@portabletext/react'
// // import { SiteMeta } from 'components/global/SiteMeta'
// // import { getHomePageTitle, getProjectBySlug } from 'lib/sanity.client'
// // import { getPreviewToken } from 'lib/sanity.server.preview'

// // export default async function ProjectPageHead({
// //   params,
// // }: {
// //   params: { slug: string }
// // }) {
// //   const token = getPreviewToken()

// //   const [homePageTitle, project] = await Promise.all([
// //     getHomePageTitle({ token }),
// //     getProjectBySlug({ slug: params.slug, token }),
// //   ])

// //   return (
// //     <SiteMeta
// //       baseTitle={homePageTitle}
// //       description={project?.overview ? toPlainText(project.overview) : ''}
// //       image={project?.coverImage}
// //       title={project?.title}
// //     />
// //   )
// // }
