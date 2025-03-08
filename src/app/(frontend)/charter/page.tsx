import { Metadata } from 'next'

import { PlaneFilters } from '@/components/broker/planes-filters'
import { Container } from '@/components/shared/section-container'
import { SectionHeading } from '@/components/shared/section-heading'
import { PlanesGrid } from '@/components/broker/planes-grid'
import { PageHero } from '@/components/shared/page-hero'
import { StickyNav } from '@/components/shared/sticky-nav'
import { EmptyLegs } from '@/components/broker/empty-legs'
import { FAQs } from '@/components/blocks/faqs'
import { SectionSummary } from '@/components/shared/section-summary'

import { sanityFetch } from '@/sanity/lib/live'
import {
  ALL_PLANE_FILTERS_QUERY,
  FAQ_CHARTER_QUERY,
  FLEET_QUERY
} from '@/sanity/lib/queries'
import {
  // // FLEET_QUERYResult,
  ALL_PLANE_FILTERS_QUERYResult
} from '@/sanity/types'

export const metadata: Metadata = {
  title: 'Charter'
}

interface CharterPageProps {
  searchParams: Promise<{
    category?: string
    manufacturer?: string
    tab?: string
  }>
}

// Type adapter function to transform Sanity data to match PlaneFilters component expectations
function adaptPlaneFilters(data: ALL_PLANE_FILTERS_QUERYResult) {
  return {
    categories: data.categories.map(category => ({
      _id: category._id,
      name: category.name || '', // Convert null to empty string
      slug: category.slug || '' // Convert null to empty string
    })),
    manufacturers: data.manufacturers.map(manufacturer => ({
      _id: manufacturer._id,
      name: manufacturer.name || '', // Convert null to empty string
      slug: manufacturer.slug || '' // Convert null to empty string
    }))
  }
}

export default async function CharterPage({ searchParams }: CharterPageProps) {
  const { category, manufacturer, tab = 'fleet' } = await searchParams

  const { data: planes } = await sanityFetch({
    query: FLEET_QUERY,
    params: {
      category: category || null,
      manufacturer: manufacturer || null
    }
  })

  const { data: allPlaneFilters } = await sanityFetch({
    query: ALL_PLANE_FILTERS_QUERY
  })

  const { data: faqs } = await sanityFetch({
    query: FAQ_CHARTER_QUERY
  })

  const hasFilters = Boolean(category || manufacturer)

  // Adapt the plane filters data to match the expected type
  const adaptedPlaneFilters = adaptPlaneFilters(allPlaneFilters)

  return (
    <div>
      <PageHero
        heading='Charter'
        summary='Seamless private jet charters, tailored to your needs—with
            cost-efficiency, safety, and luxury at every step.'
        image='/images/charter.webp'
        imageAlt='Charter'
      />
      <StickyNav className='top-16 sm:top-20 lg:top-22' />
      {tab === 'fleet' ? (
        <div className=''>
          <Container className='py-16 sm:py-24'>
            <SectionHeading>Our Fleet</SectionHeading>
            <SectionSummary className='mt-4'>
              We offer a wide range of private jets to suit your needs, from
              small, compact aircraft to large, luxurious planes.
            </SectionSummary>
            <PlaneFilters allPlaneFilters={adaptedPlaneFilters} />
            {/* @ts-expect-error - PlanesGrid expects a Plane[] type, but FLEET_QUERYResult is not compatible */}
            <PlanesGrid planes={planes} hasFilters={hasFilters} />
          </Container>
          <div>
            <FAQs faqs={faqs} />
          </div>
        </div>
      ) : (
        <EmptyLegs />
      )}
    </div>
  )
}
