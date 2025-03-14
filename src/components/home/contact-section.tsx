import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { TypedObject } from '@portabletext/types'

import { CircleBackground } from '@/components/backgrounds/circle-background'
import { Container } from '@/components/shared/section-container'
import { SectionHeading } from '@/components/shared/section-heading'
import { SectionSummary } from '@/components/shared/section-summary'
import { Button } from '@/components/ui/button'

import { Section } from '@/sanity/types'

interface ContactSectionProps {
  contactSection: {
    section: Section
  }
}

export const ContactSection = ({ contactSection }: ContactSectionProps) => {
  return (
    <section
      id='contact-section'
      className='relative overflow-hidden bg-primary py-20 sm:py-28'
    >
      <div className='-tranzinc-y-1/2 sm:-tranzinc-x-1/2 absolute top-1/2 left-20 -z-0 sm:left-1/2'>
        <CircleBackground color='#93c5fd' className='animate-spin-slower' />
      </div>
      <Container className='relative z-50 flex flex-col items-center justify-center gap-8 text-center'>
        <div>
          <SectionHeading className='text-zinc-50'>
            {contactSection.section.heading}
          </SectionHeading>
          <SectionSummary className='text-zinc-200'>
            <PortableText
              value={contactSection.section.summary as TypedObject[]}
            />
          </SectionSummary>
        </div>

        <div>
          <Button variant='outline' className='mt-5'>
            <Link href='/inquiry'>Get in Touch</Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
