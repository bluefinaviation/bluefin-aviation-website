import { StatsSection } from "@/components/pages/about/stats-section";
import { StorySection } from "@/components/pages/about/story-section";
import { TeamSection } from "@/components/pages/about/team-section";
import { PageContainer } from "@/components/shared/pace-container";
import type { PortableTextBlock } from "@portabletext/types";
import type { Section } from "@/sanity/types";
import type { Stat } from "@/components/pages/about/stats-section";

import { ABOUT_PAGE_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

export default async function AboutPage() {
  const { data: aboutPageData } = await sanityFetch({
    query: ABOUT_PAGE_QUERY,
  });

  if (!aboutPageData) return null;

  return (
    <PageContainer className="space-y-12">
      {aboutPageData.storySection?.section &&
        aboutPageData.storySection.bio && (
          <StorySection
            storySection={
              aboutPageData.storySection as {
                section: Section;
                bio: PortableTextBlock[];
              }
            }
          />
        )}
      {aboutPageData.statsSection?.stats && (
        <StatsSection
          statsSection={{
            stats: aboutPageData.statsSection.stats.filter(
              (stat) =>
                typeof stat._key === "string" &&
                typeof stat.value === "string" &&
                typeof stat._type === "string" &&
                typeof stat.label === "string"
            ) as Stat[],
          }}
        />
      )}
      {aboutPageData.teamSection?.section && (
        <TeamSection
          teamSection={{ section: aboutPageData.teamSection.section }}
        />
      )}
    </PageContainer>
  );
}
