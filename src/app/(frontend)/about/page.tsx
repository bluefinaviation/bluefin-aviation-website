import { Metadata } from 'next'
import Image from 'next/image'

import { Hero } from '@/components/blocks/hero'
import { Timeline } from '@/components/shared/timeline'
import { SectionHeading } from '@/components/shared/section-heading'
import { SectionSummary } from '@/components/shared/section-summary'

import { ABOUT_QUERY } from '@/sanity/lib/queries'
import { sanityFetch } from '@/sanity/lib/live'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Nothing is too large, too small or to difficult. We'll take you there!"
}

export default async function AboutPage() {
  const { data: companyDetails } = await sanityFetch<typeof ABOUT_QUERY>({
    query: ABOUT_QUERY
  })

  return (
    <div>
      <Hero
        title='About Us'
        text="Nothing is too large, too small or to difficult. We'll take you there!"
        image='/images/empty-legs.webp'
      />

      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-16 sm:px-0 sm:py-24 md:grid-cols-2'>
        <div className='space-y-4'>
          <SectionHeading>Our Story</SectionHeading>
          <div className='prose'>
            <p>
              {`Bluefin Aviation addresses the needs of our discerning clients. Our company offers smart, convenient, and economical solutions to ensure the best service. We provide low fuel prices, flight planning, handling services, and tailored charters. Bluefin prioritizes safety, efficiency, and swift processes, effectively delivering the best value for money without compromise.`}
            </p>
            <p>
              {`Our global operations team provides year-round services from four strategic locations: the United States, serving North America; Mexico, covering Latin America; and Italy and Spain for Europe. Our management and software systems seamlessly control our services and communications, providing clients with premium care across all time zones.`}
            </p>
            <p className='font-bold'>{`Why Bluefin Aviation?`}</p>
            <p>
              {`Our service has been designed to enhance our clients' individuality. Hand-picked professionals who are passionate about providing this superior experience are the essence of Bluefin. We understand the fine balance between high quality and delivering an attractive bottom line for commercial services.`}
            </p>
            <p>{`We maintain a consistent commitment—24/7/365—ensuring fast, efficient, and always on-time service.`}</p>
          </div>
        </div>
        <div className='relative aspect-square w-full md:aspect-auto md:h-[500px]'>
          <Image
            src='/images/about.webp'
            alt='About Us'
            fill
            className='rounded-br-[12rem] bg-zinc-100 object-cover object-[5%_90%]'
          />
        </div>
      </div>

      <div className='grid grid-cols-1 divide-y divide-white bg-primary py-16 text-white sm:grid-cols-4 sm:divide-x sm:divide-y-0 sm:py-24'>
        {companyDetails?.stats?.map(stat => (
          <div key={stat._key} className='py-8 text-center'>
            <h3 className='text-5xl font-bold text-white sm:text-7xl'>
              <span>{stat.value}</span>
              {stat.hasUnit && (
                <span className='text-3xl sm:text-5xl'>{stat.unit}</span>
              )}
            </h3>
            <p className='mt-2 text-lg text-white/80 sm:text-xl'>
              {stat.title}
            </p>
          </div>
        ))}
      </div>

      <div className='overflow-x-hidden bg-zinc-300 py-16 sm:py-24'>
        <div className='flex flex-col items-center text-center'>
          <SectionHeading>Our History</SectionHeading>
          <SectionSummary className='mt-4'>{`With over 100 years of combined experience in the aviation industry, we have a proven track record of providing exceptional service to our clients.`}</SectionSummary>
        </div>
        <Timeline events={companyDetails?.timeline || []} />
      </div>
    </div>
  )
}
