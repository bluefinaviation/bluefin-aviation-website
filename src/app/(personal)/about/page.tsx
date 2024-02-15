import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'

import { AboutPage } from '@/components/pages/about/about-page'
import { studioUrl } from '@/sanity/lib/api'
import { loadAboutPage } from '@/sanity/loader/loadQuery'

const AboutPagePreview = dynamic(
  () => import('@/components/pages/about/about-page-preview')
)

export const metadata: Metadata = {
  title: 'About',
  description:
    'The best solution for your aviation needs with concierge-style trip support and worldwide fuel network. Find out more about our story and team.'
}

export default async function AboutRoute() {
  const initial = await loadAboutPage()

  if (draftMode().isEnabled) {
    return <AboutPagePreview initial={initial} />
  }
  // // const data = (await getAboutPage()) || {
  // //   storySection: null,
  // //   statsSection: null,
  // //   teamSection: null,
  // // }

  if (!initial.data) {
    return (
      <div className='text-center'>
        {`You don't have a team page yet, `}
        <Link href={`${studioUrl}/desk/home`} className='underline'>
          create one now
        </Link>
        !
      </div>
    )
  }
  return <AboutPage data={initial.data} />
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
