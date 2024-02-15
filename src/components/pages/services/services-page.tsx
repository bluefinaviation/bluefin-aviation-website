import { PortableText } from '@portabletext/react'
import type { EncodeDataAttributeCallback } from '@sanity/react-loader/rsc'

import { ServiceCard } from '@/components/services/service-card'
import { PageContainer } from '@/components/shared/pace-container'
import { Container } from '@/components/shared/section-container'
import { SectionHeading } from '@/components/shared/section-heading'
import { SectionSummary } from '@/components/shared/section-summary'
import { ServicesPagePayload } from '@/types'

export interface ServicesPageProps {
  data: ServicesPagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export const ServicesPage = ({
  data,
  encodeDataAttribute
}: ServicesPageProps) => {
  const { heroSection = {}, tripService = {}, fuelService = {} } = data ?? {}

  // // const {
  // //   heroSection = {
  // //     section: {
  // //       heading: '',
  // //       summary: ''
  // //     }
  // //   },
  // // } = data ?? {}

  return (
    <PageContainer>
      <Container className='py-16 sm:py-24'>
        <div className='text-center'>
          {/* @ts-expect-error */}
          <SectionHeading>{heroSection.section.heading}</SectionHeading>
          <SectionSummary className='mx-auto text-slate-700'>
            {/* @ts-expect-error */}
            <PortableText value={heroSection.section.summary} />
          </SectionSummary>
        </div>
      </Container>

      <Container className='grid max-w-5xl grid-cols-1 grid-rows-2 gap-12 pb-16 sm:pb-24 lg:grid-cols-2 lg:grid-rows-1'>
        <ServiceCard
          // @ts-expect-error
          title={tripService.card.title}
          // @ts-expect-error
          tagline={tripService.card.tagline}
          slug='/services/trip-support'
          // @ts-expect-error
          image={tripService.card.image}
        />
        <ServiceCard
          // @ts-expect-error
          title={fuelService.card.title}
          // @ts-expect-error
          tagline={fuelService.card.tagline}
          slug='/services/fuel-support'
          // @ts-expect-error
          image={fuelService.card.image}
        />
      </Container>
    </PageContainer>
  )
}
