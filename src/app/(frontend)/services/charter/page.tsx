import { Metadata } from 'next'

import { PlaneFilters } from '@/components/broker/planes-filters'
import { Container } from '@/components/shared/section-container'
import { SectionHeading } from '@/components/shared/section-heading'
import { PlanesGrid } from '@/components/broker/planes-grid'
import { StickyNav } from '@/components/shared/sticky-nav'
import { EmptyLegs } from '@/components/broker/empty-legs'
import { FAQs } from '@/components/blocks/faqs'
import { SectionSummary } from '@/components/shared/section-summary'
import { Hero } from '@/components/blocks/hero'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

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

  const adaptedPlaneFilters = adaptPlaneFilters(allPlaneFilters)

  return (
    <div>
      <Hero
        title='Charter'
        text='Seamless private jet charters, tailored to your needs—with
            cost-efficiency, safety, and luxury at every step.'
        image='/images/charter-hero.webp'
        isBreadcrumb={true}
      />
      <StickyNav className='top-16 sm:top-20 lg:top-22' />
      {tab === 'fleet' ? (
        <div className=''>
          <Container className='py-16 sm:py-24'>
            <div className='mx-auto flex flex-col items-center text-center'>
              <SectionHeading>Explore Our Fleet</SectionHeading>
              <SectionSummary className='mt-4'>
                We offer a wide range of private jets to suit your needs, from
                small, compact aircraft to large, luxurious planes.
              </SectionSummary>
              <PlaneFilters allPlaneFilters={adaptedPlaneFilters} />
            </div>
            {/* @ts-expect-error - PlanesGrid expects a Plane[] type, but FLEET_QUERYResult is not compatible */}
            <PlanesGrid planes={planes} hasFilters={hasFilters} />
          </Container>

          <section className='bg-primary py-16'>
            <Container>
              <div className='mx-auto flex max-w-3xl flex-col items-center text-center'>
                <SectionHeading className='text-white'>
                  Looking for Last Minute Deals?
                </SectionHeading>
                <SectionSummary className='mt-4 text-zinc-200'>
                  Check out our empty leg flights for exclusive last-minute
                  deals on private jet travel.
                </SectionSummary>
                <Link
                  href={{
                    pathname: '/services/charter',
                    query: { tab: 'empty-legs' }
                  }}
                  className='mt-8'
                >
                  <Button variant='outline' size='lg'>
                    View Empty Leg Flights
                  </Button>
                </Link>
              </div>
            </Container>
          </section>

          {/* @ts-expect-error - PlanesGrid expects a Plane[] type, but FLEET_QUERYResult is not compatible */}
          <FAQs title='Frequently Asked Questions' faqs={faqs} />
        </div>
      ) : (
        <div>
          <Container className='py-16 sm:py-24'>
            <SectionHeading>Upcoming Last Minute Flights</SectionHeading>
            <EmptyLegs />
          </Container>

          <section className='bg-primary py-16'>
            <Container>
              <div className='mx-auto flex max-w-3xl flex-col items-center text-center'>
                <SectionHeading className='text-white'>
                  Explore Our Full Fleet{' '}
                </SectionHeading>
                <SectionSummary className='mt-4 text-zinc-200'>
                  Browse our complete selection of private jets available for
                  charter to find the perfect aircraft for your next journey.
                </SectionSummary>
                <Link
                  href={{
                    pathname: '/services/charter',
                    query: { tab: 'fleet' }
                  }}
                  className='mt-8'
                >
                  <Button variant='outline' size='lg'>
                    View Our Fleet
                  </Button>
                </Link>
              </div>
            </Container>
          </section>

          {/* @ts-expect-error - PlanesGrid expects a Plane[] type, but FLEET_QUERYResult is not compatible */}
          <FAQs title='Frequently Asked Questions' faqs={faqs} />
        </div>
      )}
    </div>
  )
}
