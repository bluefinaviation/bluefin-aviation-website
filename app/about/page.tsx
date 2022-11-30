import { StatsSection } from '@/components/about/StatsSection';
import { StorySection } from '@/components/about/StorySection';
import { TeamSection } from '@/components/about/TeamSection';
import { PageContainer } from '@/components/shared/PageContainer';
import { getAboutPage } from '@/lib/sanity.client';

export default async function AboutRoute() {
  const [aboutPageData] = await Promise.all([getAboutPage()]);
  return (
    <PageContainer
      metaTitle="About Us"
      metaDescription="A total concierge-style battery of services awaits you at Bluefin Aviation. Bluefin Aviation offers top quality services for aircraft needs at all levels."
    >
      <StorySection storySection={aboutPageData.storySection} />
      <StatsSection statsSection={aboutPageData.statsSection} />
      <TeamSection teamSection={aboutPageData.teamSection} />
    </PageContainer>
  );
}

export const revalidate = 1;
