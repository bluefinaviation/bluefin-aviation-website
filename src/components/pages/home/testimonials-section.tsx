'use client'

import 'keen-slider/keen-slider.min.css'

import { PortableText } from '@portabletext/react'
import { useKeenSlider } from 'keen-slider/react'

import { Container } from '@/components/shared/section-container'
import { SectionHeading } from '@/components/shared/section-heading'
import { SectionSummary } from '@/components/shared/section-summary'
import { Section, Testimonial } from '@/types'

interface TestimonialsSectionProps {
  testimonialsSection: {
    section: Section
    testimonials: Testimonial[]
  }
}

export const TestimonialsSection = ({
  testimonialsSection
}: TestimonialsSectionProps) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true
    },
    [
      slider => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      }
    ]
  )
  return (
    <section
      id='testimonials'
      aria-label='What our customers are saying'
      className='bg-slate-100 py-20 sm:py-32'
    >
      <Container className='grid max-w-7xl grid-cols-1 lg:grid-cols-2 lg:gap-x-24'>
        <div className='col-span-1'>
          <SectionHeading>{testimonialsSection.section.heading}</SectionHeading>
          <SectionSummary>
            <PortableText value={testimonialsSection.section.summary} />
          </SectionSummary>
        </div>
        <div className='col-span-1 flex items-center justify-center'>
          <div ref={sliderRef} className='keen-slider'>
            {testimonialsSection.testimonials.map(testimonial => (
              <div
                key={testimonial._key}
                className='keen-slider__slide mt-8 flex cursor-pointer flex-col justify-center lg:mt-0'
              >
                <p className='text-lg font-semibold lg:text-xl'>{`"${testimonial.quote}"`}</p>
                <div className='mt-4 flex items-center gap-x-2 sm:mt-6 lg:mt-8'>
                  <p>
                    <span className='font-medium text-slate-700'>
                      {testimonial.author.name}
                    </span>
                    <span> | </span>
                    <span>{testimonial.author.role}</span>
                    <span> | </span>
                    <span>{testimonial.author.location}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
