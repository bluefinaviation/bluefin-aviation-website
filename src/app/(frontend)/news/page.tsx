import { Metadata } from 'next'

import { Hero } from '@/components/blocks/hero'
import { Container } from '@/components/shared/section-container'
import { NewsCard } from '@/components/news/news-card'

import { sanityFetch } from '@/sanity/lib/live'
import { NEWS_QUERY } from '@/sanity/lib/queries'
import { Article } from '@/sanity/types'

export const metadata: Metadata = {
  title: 'News'
}

export default async function NewsPage() {
  const { data: news } = await sanityFetch({
    query: NEWS_QUERY
  })

  return (
    <div>
      <Hero
        title='News'
        text="We're here to help you with your aviation and charter needs. Our team of experts are here to assist you 24/7."
        image='/images/news-hero.webp'
      />

      <div className='py-16 sm:py-24'>
        <Container>
          {news ? (
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
              {news?.map(article => (
                <NewsCard
                  key={article._id}
                  article={article as unknown as Article}
                />
              ))}
            </div>
          ) : (
            <div>No news found</div>
          )}
        </Container>
      </div>
    </div>
  )
}
