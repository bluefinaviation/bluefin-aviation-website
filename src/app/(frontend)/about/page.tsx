import { StatsSection } from "@/components/pages/about/stats-section";
import { StorySection } from "@/components/pages/about/story-section";
import { TeamSection } from "@/components/pages/about/team-section";
import { PageContainer } from "@/components/shared/pace-container";
import type { PortableTextBlock } from "@portabletext/types";
import type { Section } from "@/sanity/types";
import type { Stat } from "@/components/pages/about/stats-section";

import { client } from "@/sanity/lib/client";
import { ABOUT_PAGE_QUERY } from "@/sanity/lib/queries";

export default async function AboutPage() {
  const aboutPageData = await client.fetch(
    ABOUT_PAGE_QUERY,
    {},
    { next: { revalidate: 60 } }
  );

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
