'use client'

import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import { PortableText } from '@portabletext/react'

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel'
import { SectionHeading } from '@/components/shared/section-heading'

import { SERVICE_QUERYResult } from '@/sanity/types'
import { urlFor } from '@/sanity/lib/image'

type InfoCarouselProps = Extract<
  NonNullable<NonNullable<SERVICE_QUERYResult>['content']>[number],
  { _type: 'infoCarousel' }
>

export const InfoCarousel = ({ title, text, items }: InfoCarouselProps) => {
  return (
    <section className='mx-auto grid max-w-7xl grid-cols-2 gap-8 px-3 py-16 sm:px-0 sm:py-24'>
      <div className='flex flex-col gap-4'>
        <SectionHeading>{title}</SectionHeading>
        <div className='prose max-w-prose'>
          {text && <PortableText value={text} />}
        </div>
      </div>

      <Carousel
        opts={{
          align: 'start',
          loop: true
        }}
        plugins={[
          Autoplay({
            delay: 5000
          })
        ]}
        className='w-full'
      >
        <CarouselContent>
          {items?.map((item, idx) => (
            <CarouselItem
              key={idx}
              className='mt-8 flex cursor-pointer flex-col justify-center lg:mt-0'
            >
              <div key={`item-${idx}`} className='grid grid-cols-2'>
                <div className='relative aspect-[3/5]'>
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.title || 'Carousel image'}
                      fill
                      className='object-cover object-center'
                    />
                  )}
                  <h3 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-black/20 p-4 font-serif text-4xl font-bold text-white uppercase backdrop-blur-md'>
                    {item.title}
                  </h3>
                </div>
                <div className='prose prose-lg list-disc rounded-br-[12rem] bg-primary p-4 text-white marker:text-white'>
                  {item.text && <PortableText value={item.text} />}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
