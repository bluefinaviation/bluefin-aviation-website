'use client'

import { PortableText } from '@portabletext/react'
import Link from 'next/link'

import { ServiceCard } from '@/components/pages/home/service-card'
import { SectionHeading } from '@/components/shared/section-heading'
import { SectionSummary } from '@/components/shared/section-summary'
import { Button } from '@/components/ui/button'
import { Card, Section } from '@/types'

interface ServicesSectionProps {
  servicesSection: Section
  tripService: Card
  fuelService: Card
}

export const ServicesSection = ({
  servicesSection,
  tripService,
  fuelService
}: ServicesSectionProps) => {
  return (
    <section
      id='services'
      aria-label='BlueFin aviation services'
      className='bg-branding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
    >
      <div className='col-span-1 flex flex-col justify-between px-5 py-10 sm:p-12 md:col-span-2 lg:col-span-1'>
        <SectionHeading className='text-slate-50'>
          {servicesSection.heading}
        </SectionHeading>
        <div>
          <SectionSummary className='text-slate-200'>
            <PortableText value={servicesSection.summary} />
          </SectionSummary>
          <Button variant='outline-light-foreground' className='mt-5'>
            <Link href='/services'>All Services</Link>
          </Button>
        </div>
      </div>
      <ServiceCard
        title={tripService.title}
        tagline={tripService.tagline}
        slug='/services/trip-support'
        image={tripService.image}
        className='relative col-span-1'
      />
      <ServiceCard
        title={fuelService.title}
        tagline={fuelService.tagline}
        slug='/services/fuel-support'
        image={fuelService.image}
        className='relative col-span-1'
      />
    </section>
  )
}
