import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { NewsletterPage } from '@/components/pages/newsletter/NewsletterPage';
import { NewsletterPagePreview } from '@/components/pages/newsletter/NewsletterPagePreview';
import { PreviewSuspense } from '@/components/preview/PreviewSuspense';
import { PreviewWrapper } from '@/components/preview/PreviewWrapper';
import { getNewsletterPage } from '@/lib/sanity.client';
import { getPreviewToken } from '@/lib/sanity.server.preview';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Newsletter',
  description:
    'The best solution for your aviation needs with concierge-style trip support and worldwide fuel network. Join our newsletter for a monthly dose of aviation news.',
};

export default async function NewsletterRoute() {
  const token = getPreviewToken();
  const data = (await getNewsletterPage({ token })) || {
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
                <NewsletterPage data={data} />
              </PreviewWrapper>
            }
          >
            <NewsletterPagePreview token={token} />
          </PreviewSuspense>
        </>
      ) : (
        <NewsletterPage data={data} />
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
