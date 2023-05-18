import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { PageContainer } from '@/components/global/PageContainer';
import { AboutPage } from '@/components/pages/about/AboutPage';
import { AboutPagePreview } from '@/components/pages/about/AboutPagePreview';
import { StatsSection } from '@/components/pages/about/StatsSection';
import { StorySection } from '@/components/pages/about/StorySection';
import { TeamSection } from '@/components/pages/about/TeamSection';
import { PreviewSuspense } from '@/components/preview/PreviewSuspense';
import { PreviewWrapper } from '@/components/preview/PreviewWrapper';
import { getAboutPage } from '@/lib/sanity.client';
import { getPreviewToken } from '@/lib/sanity.server.preview';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'About',
  description:
    'The best solution for your aviation needs with concierge-style trip support and worldwide fuel network. Find out more about our story and team.',
};

export default async function AboutRoute() {
  const token = getPreviewToken();
  const data = (await getAboutPage({ token })) || {
    storySection: null,
    statsSection: null,
    teamSection: null,
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
                <AboutPage data={data} />
              </PreviewWrapper>
            }
          >
            <AboutPagePreview token={token} />
          </PreviewSuspense>
        </>
      ) : (
        <AboutPage data={data} />
      )}
    </>
  );
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
