import type { EncodeDataAttributeCallback } from '@sanity/react-loader/rsc'

import { TripFeatureSection } from '@/components/services/trip-feature-section'
import { HeroSection } from '@/components/shared/hero-section'
import { PageContainer } from '@/components/shared/pace-container'
import { Slider } from '@/components/shared/slider'

import { TripServicePagePayload } from '@/types'
import { sanityFetch } from '@/sanity/lib/fetch'
import { tripServicePageQuery } from '@/sanity/lib/queries'

export default async function TripServicePage() {
  const tripServiceData = await sanityFetch({
    query: tripServicePageQuery
  })

  if (!tripServiceData) return null

  return (
    <PageContainer>
      <HeroSection hero={tripServiceData.heroSection?.section!} />

      <TripFeatureSection featuresSection={tripServiceData.featuresSection!} />

      <div className='bg-slate-100 py-8 sm:py-16 lg:py-24'>
        <Slider gallery={tripServiceData.gallerySection?.gallery!} />
      </div>
    </PageContainer>
  )
}
