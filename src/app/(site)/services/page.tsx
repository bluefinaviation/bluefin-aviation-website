import { PortableText } from '@portabletext/react'
import type { EncodeDataAttributeCallback } from '@sanity/react-loader/rsc'

import { ServiceCard } from '@/components/services/service-card'
import { PageContainer } from '@/components/shared/pace-container'
import { Container } from '@/components/shared/section-container'
import { SectionHeading } from '@/components/shared/section-heading'
import { SectionSummary } from '@/components/shared/section-summary'
import { sanityFetch } from '@/sanity/lib/fetch'
import { servicesPageQuery } from '@/sanity/lib/queries'

export default async function ServicesPage() {
  const servicesPageData = await sanityFetch({
    query: servicesPageQuery
  })

  if (!servicesPageData) return null

  return (
    <PageContainer>
      <Container className='py-16 sm:py-24'>
        <div className='text-center'>
          <SectionHeading>
            {servicesPageData.heroSection?.section?.heading}
          </SectionHeading>
          <SectionSummary className='mx-auto text-slate-700'>
            <PortableText
              value={servicesPageData.heroSection?.section?.summary}
            />
          </SectionSummary>
        </div>
      </Container>

      <Container className='grid max-w-5xl grid-cols-1 grid-rows-2 gap-12 pb-16 sm:pb-24 lg:grid-cols-2 lg:grid-rows-1'>
        <ServiceCard
          title={servicesPageData.tripService?.card?.title}
          tagline={servicesPageData.tripService?.card?.tagline}
          slug='/services/trip-support'
          image={servicesPageData.tripService?.card?.image}
        />
        <ServiceCard
          title={servicesPageData.fuelService?.card?.title}
          tagline={servicesPageData.fuelService?.card?.tagline}
          slug='/services/fuel-support'
          image={servicesPageData.fuelService?.card?.image}
        />
      </Container>
    </PageContainer>
  )
}
