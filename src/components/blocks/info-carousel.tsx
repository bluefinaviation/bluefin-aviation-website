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
    <section className='mx-auto grid max-w-7xl gap-8 px-3 py-16 sm:grid-cols-2 sm:px-0 sm:py-24'>
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
        <CarouselContent className='-ml-0'>
          {items?.map((item, idx) => (
            <CarouselItem key={idx} className='basis-full pl-0'>
              <div
                key={`item-${idx}`}
                className='grid grid-cols-1 sm:grid-cols-2'
              >
                <div className='relative aspect-[3/5] w-full'>
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.title || 'Carousel image'}
                      fill
                      sizes='(max-width: 640px) 100vw, 50vw'
                      className='object-cover object-center'
                    />
                  )}
                  <div className='absolute inset-0 bg-black/50' />
                  <h3 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform font-serif text-4xl font-bold text-white uppercase'>
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
