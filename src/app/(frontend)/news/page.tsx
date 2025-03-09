import { Metadata } from 'next'

import { Hero } from '@/components/blocks/hero'
import { Container } from '@/components/shared/section-container'
import { SectionHeading } from '@/components/shared/section-heading'

export const metadata: Metadata = {
  title: 'News'
}

export default async function NewsPage() {
  return (
    <div>
      <Hero
        title='News'
        text="We're here to help you with your aviation and charter needs. Our team of experts are here to assist you 24/7."
        image='/images/news-hero.webp'
      />

      <div className='py-16 sm:py-24'>
        <Container>
          <SectionHeading>Latest News</SectionHeading>
        </Container>
      </div>
    </div>
  )
}
