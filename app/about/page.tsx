import { StatsSection } from '@/components/about/StatsSection';
import { StorySection } from '@/components/about/StorySection';
import { TeamSection } from '@/components/about/TeamSection';
import { PageContainer } from '@/components/shared/PageContainer';
import { getAboutPage } from '@/lib/sanity.client';

export default async function AboutRoute() {
  const [aboutPageData] = await Promise.all([getAboutPage()]);
  return (
    <PageContainer className="space-y-12">
      <StorySection storySection={aboutPageData.storySection} />
      <StatsSection statsSection={aboutPageData.statsSection} />
      <TeamSection teamSection={aboutPageData.teamSection} />
    </PageContainer>
  );
}

export const revalidate = 1;
