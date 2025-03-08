import { Image as SanityImage } from 'sanity'

import { SectionHeading } from '@/components/shared/section-heading'
import { SectionSummary } from '@/components/shared/section-summary'
import { ServiceCard } from '@/components/services/service-card'

import { SERVICES_QUERY } from '@/sanity/lib/queries'
import { sanityFetch } from '@/sanity/lib/live'
import { Service } from '@/sanity/types'

export const ServicesSection = async () => {
  const { data: services } = await sanityFetch<string>({
    query: SERVICES_QUERY
  })

  if (!services) return null

  return (
    <section id='services' aria-label='BlueFin aviation services'>
      <div className='flex flex-col items-center justify-center px-4 py-16 text-center sm:px-0 sm:py-24'>
        <SectionHeading>Our Services</SectionHeading>
        <SectionSummary className='mt-4'>
          {`We offer a wide range of services to meet your aviation needs. From private jet charters to fuel services, we have you covered.`}
        </SectionSummary>
      </div>
      <div className='grid grid-cols-1 bg-primary md:grid-cols-2 lg:grid-cols-3'>
        {services?.map((service: Service) => (
          <ServiceCard
            key={service._id}
            title={service.name || ''}
            slug={`/services/${service.slug || ''}`}
            image={service.image as SanityImage}
          />
        ))}
        <ServiceCard
          title='Charter'
          slug='/charter'
          image='/images/service-charter.webp'
        />
      </div>
    </section>
  )
}
