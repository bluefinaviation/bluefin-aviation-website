import { PortableText } from '@portabletext/react'

import { TripFeature } from '@/components/services/trip-feature'
import { Container } from '@/components/shared/section-container'
import { SectionHeading } from '@/components/shared/section-heading'
import { SectionSummary } from '@/components/shared/section-summary'
import { Feature, Section } from '@/types'

interface TripFeatureSectionProps {
  featuresSection: {
    section: Section
    features: Feature[]
  }
}

export const TripFeatureSection = ({
  featuresSection
}: TripFeatureSectionProps) => {
  return (
    <Container className='grid grid-cols-1 py-8 sm:grid-cols-2 sm:gap-x-8 sm:py-16 lg:gap-x-10 lg:py-24'>
      <div className='col-span-1'>
        <SectionHeading>{featuresSection.section.heading}</SectionHeading>
        <SectionSummary className='text-slate-700'>
          <PortableText value={featuresSection.section.summary} />
        </SectionSummary>
      </div>

      <ul
        role='list'
        className='col-span-1 mt-8 grid grid-cols-1 gap-12 sm:mt-0 lg:grid-cols-2'
      >
        {featuresSection.features.map(feature => (
          <li key={feature.id} className='col-span-1'>
            <TripFeature feature={feature} />
          </li>
        ))}
      </ul>
    </Container>
  )
}
