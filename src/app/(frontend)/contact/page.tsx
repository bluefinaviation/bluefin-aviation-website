import { Metadata } from 'next'

import { Container } from '@/components/shared/section-container'
import { Offices } from '@/components/contact/offices'
import { SectionHeading } from '@/components/shared/section-heading'
import { ContactForm } from '@/components/shared/contact-form'
import { Hero } from '@/components/blocks/hero'

import { CONTACT_PAGE_QUERY } from '@/sanity/lib/queries'
import { sanityFetch } from '@/sanity/lib/live'

export const metadata: Metadata = {
  title: 'Contact Us'
}

export default async function ContactPage() {
  const { data: contact } = await sanityFetch({
    query: CONTACT_PAGE_QUERY
  })

  if (!contact) return null

  return (
    <div>
      <Hero
        title='Contact Us'
        text="We're here to help you with your aviation and charter needs. Our team of experts are here to assist you 24/7."
        image='/images/contact-hero.webp'
      />

      <Container className='py-8 sm:py-16 lg:py-24'>
        <SectionHeading className='mx-auto text-center'>
          Our Offices
        </SectionHeading>

        <Offices />
      </Container>

      <ContactForm />
    </div>
  )
}
