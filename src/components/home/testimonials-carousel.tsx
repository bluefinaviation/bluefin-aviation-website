'use client'

import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel'
import { Testimonial } from '@/sanity/types'

export const TestimonialsCarousel = ({
  testimonials
}: {
  testimonials: Testimonial[]
}) => {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true
      }}
      plugins={[
        Autoplay({
          delay: 7000
        })
      ]}
      className='w-full'
    >
      <CarouselContent>
        {testimonials.map((testimonial, idx) => (
          <CarouselItem
            key={idx}
            className='mt-8 flex cursor-pointer flex-col justify-center lg:mt-0'
          >
            <p className='text-base font-medium text-primary italic sm:text-xl'>{`${testimonial.quote}`}</p>
            {testimonial.author && (
              <p className='mt-4 flex flex-wrap items-center gap-x-2 font-mono text-xs text-slate-600 uppercase sm:text-sm'>
                <span className='font-medium'>{testimonial.author.name}</span>
                <span> | </span>
                <span>{testimonial.author.role}</span>
                <span> | </span>
                <span>{testimonial.author.location}</span>
              </p>
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
