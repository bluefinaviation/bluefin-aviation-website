import type { EncodeDataAttributeCallback } from '@sanity/react-loader/rsc'

import { StatsSection } from '@/components/pages/about/stats-section'
import { StorySection } from '@/components/pages/about/story-section'
import { TeamSection } from '@/components/pages/about/team-section'
import { PageContainer } from '@/components/shared/pace-container'
import { AboutPagePayload } from '@/types'

export interface AboutPageProps {
  data: AboutPagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export const AboutPage = ({ data, encodeDataAttribute }: AboutPageProps) => {
  // Default to an empty object to allow previews on non-existent documents
  const {
    storySection = null,
    statsSection = null,
    teamSection = null
  } = data ?? {}

  return (
    <PageContainer className='space-y-12'>
      <StorySection storySection={storySection} />
      <StatsSection statsSection={statsSection!} />
      <TeamSection teamSection={teamSection!} />
    </PageContainer>
  )
}
