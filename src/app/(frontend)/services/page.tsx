import { Metadata } from 'next'
import { Image as SanityImage } from 'sanity'

import { Container } from '@/components/shared/section-container'
import { SectionHeading } from '@/components/shared/section-heading'
import { PageHero } from '@/components/shared/page-hero'
import { ServiceCard } from '@/components/services/service-card'

import { SERVICES_QUERY } from '@/sanity/lib/queries'
import { sanityFetch } from '@/sanity/lib/live'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'We offer a range of services to support your charter operations. From trip support to fuel services, we have you covered.'
}

interface ServiceData {
  _id: string
  name?: string
  image: SanityImage | string
  slug?: string
}

export default async function ServicesPage() {
  const { data: services } = await sanityFetch<string>({
    query: SERVICES_QUERY
  })

  const servicesData = services as ServiceData[]

  return (
    <div>
      <PageHero
        heading='Our Services'
        summary='We offer a range of services to support your charter operations. From trip support to fuel services, we have you covered.'
        image='/images/services-hero.webp'
        imageAlt=''
      />

      <Container className='py-16 sm:py-24'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          <div>
            <SectionHeading>
              A total concierge-style battery of aviation services
            </SectionHeading>
            <p className='prose mt-4'>
              {`The world is constantly evolving, bringing new challenges and opportunities in how clients experience products and services. The private aviation industry is no exception. At Bluefin Aviation, we are committed to staying ahead of changing market dynamics and client expectations. Through innovation and a comprehensive range of services, we ensure that every solution is seamlessly available under one roof.`}
            </p>
          </div>
          <ServiceCard
            image='/images/charter.webp'
            title='Charter'
            slug='/charter'
            imageClassName='object-cover object-[5%_90%]'
            isSquare={true}
          />
        </div>

        <div className='mt-16 grid grid-cols-2 gap-8'>
          {servicesData?.map((service, index) => (
            <ServiceCard
              key={service._id}
              image={service.image}
              title={service.name || ''}
              slug={`/services/${service.slug || ''}`}
              isSquare={true}
              imageClassName={
                index === servicesData.length - 1 ? 'rounded-br-[12rem]' : ''
              }
            />
          ))}
        </div>
      </Container>
    </div>
  )
}
