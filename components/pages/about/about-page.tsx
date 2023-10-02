import { AboutPagePayload } from "@/types"

import { PageContainer } from "@/components/global/pace-container"
import { StatsSection } from "@/components/pages/about/stats-section"
import { StorySection } from "@/components/pages/about/story-section"
import { TeamSection } from "@/components/pages/about/team-section"

export interface AboutPageProps {
  data: AboutPagePayload | null
}

export const AboutPage = ({ data }: AboutPageProps) => {
  // Default to an empty object to allow previews on non-existent documents
  const {
    storySection = null,
    statsSection = null,
    teamSection = null,
  } = data ?? {}

  return (
    <PageContainer className="space-y-12">
      <StorySection storySection={storySection} />
      <StatsSection statsSection={statsSection!} />
      <TeamSection teamSection={teamSection!} />
    </PageContainer>
  )
}
