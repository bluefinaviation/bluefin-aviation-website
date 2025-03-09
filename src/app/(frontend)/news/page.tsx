import { Metadata } from 'next'

import { Hero } from '@/components/blocks/hero'
import { Container } from '@/components/shared/section-container'
import { NewsCard } from '@/components/news/news-card'

import { NEWS_QUERY } from '@/sanity/lib/queries'
import { sanityFetch } from '@/sanity/lib/live'

export const metadata: Metadata = {
  title: 'News'
}

interface Article {
  _id: string
  title: string
  slug: string
  image?: string
  publishedAt?: string
  excerpt?: string
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
              {news?.map((article: Article) => (
                <NewsCard key={article._id} article={article} />
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
