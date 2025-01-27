import { StatsSection } from '@/components/pages/about/stats-section'
import { StorySection } from '@/components/pages/about/story-section'
import { TeamSection } from '@/components/pages/about/team-section'
import { PageContainer } from '@/components/shared/pace-container'
import { aboutPageQuery } from '@/sanity/lib/queries'
import { SanityClient } from 'sanity'

export default async function AboutPage() {
  const aboutPageData = await SanityClient({
    query: aboutPageQuery
  })

  if (!aboutPageData) return null

  return (
    <PageContainer className='space-y-12'>
      <StorySection storySection={storySection} />
      <StatsSection statsSection={statsSection!} />
      <TeamSection teamSection={teamSection!} />
    </PageContainer>
  )
}
