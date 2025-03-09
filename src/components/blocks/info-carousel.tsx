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
    <section className='mx-auto grid max-w-7xl grid-cols-1 gap-8 px-3 py-8 sm:px-0 sm:py-16 md:grid-cols-2 md:py-24'>
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
        className='w-full [&_.embla__container]:!gap-0'
      >
        <CarouselContent className='-ml-0'>
          {items?.map((item, idx) => (
            <CarouselItem key={idx} className='basis-full pl-0'>
              <div
                key={`item-${idx}`}
                className='grid grid-cols-1 gap-0 md:grid-cols-2'
              >
                <div className='relative aspect-[4/3] md:aspect-[3/5]'>
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.title || 'Carousel image'}
                      fill
                      className='object-cover object-center'
                    />
                  )}
                  <h3 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-black/20 p-2 text-center font-serif text-2xl font-bold text-white uppercase backdrop-blur-md sm:p-4 sm:text-3xl md:text-4xl'>
                    {item.title}
                  </h3>
                </div>
                <div className='prose prose-sm list-disc rounded-br-[4rem] bg-primary p-3 text-white marker:text-white sm:prose-base sm:rounded-br-[8rem] sm:p-4 md:prose-lg md:h-full md:rounded-br-[12rem]'>
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
