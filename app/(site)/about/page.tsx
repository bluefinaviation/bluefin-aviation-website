import type { Metadata } from "next"
import { draftMode } from "next/headers"
import { LiveQuery } from "next-sanity/preview/live-query"

import { getAboutPage } from "@/lib/sanity.fetch"
import { aboutPageQuery } from "@/lib/sanity.queries"
import { AboutPage } from "@/components/pages/about/about-page"
import { AboutPagePreview } from "@/components/pages/about/about-page-preview"

export const revalidate = 60

export const metadata: Metadata = {
  title: "About",
  description:
    "The best solution for your aviation needs with concierge-style trip support and worldwide fuel network. Find out more about our story and team.",
}

export default async function AboutRoute() {
  const data = await getAboutPage()
  // // const data = (await getAboutPage()) || {
  // //   storySection: null,
  // //   statsSection: null,
  // //   teamSection: null,
  // // }

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={aboutPageQuery}
      initialData={data}
      as={AboutPagePreview}
    >
      <AboutPage data={data} />
    </LiveQuery>
  )
}
// // import { toPlainText } from '@portabletext/react'
// // import { SiteMeta } from 'components/shared/SiteMeta'
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
