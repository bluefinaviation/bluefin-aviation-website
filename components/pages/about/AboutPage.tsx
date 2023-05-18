import { PageContainer } from '@/components/global/PageContainer';
import { StatsSection } from '@/components/pages/about/StatsSection';
import { StorySection } from '@/components/pages/about/StorySection';
import { TeamSection } from '@/components/pages/about/TeamSection';

export const AboutPage = ({ data }: { data: any }) => {
  // Default to an empty object to allow previews on non-existent documents
  const { storySection, statsSection, teamSection } = data;

  return (
    <PageContainer className="space-y-12">
      <StorySection storySection={storySection} />
      <StatsSection statsSection={statsSection} />
      <TeamSection teamSection={teamSection} />
    </PageContainer>
  );
};
