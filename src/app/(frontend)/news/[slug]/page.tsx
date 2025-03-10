import { PortableText } from '@portabletext/react'

import { Container } from '@/components/shared/section-container'
import { Hero } from '@/components/blocks/hero'

import { sanityFetch } from '@/sanity/lib/live'
import { NEWS_ARTICLE_QUERY } from '@/sanity/lib/queries'
import { components } from '@/sanity/portableTextComponents'

export default async function NewsArticlePage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const { data: article } = await sanityFetch({
    query: NEWS_ARTICLE_QUERY,
    params: { slug }
  })

  return (
    <div>
      <Hero
        title={article?.title}
        text={article?.excerpt}
        image={article?.mainImage}
        isBreadcrumb={true}
      />
      <Container className='mx-auto prose max-w-5xl list-disc py-16 sm:prose-lg sm:py-24'>
        <PortableText value={article?.body!} components={components} />
      </Container>
    </div>
  )
}
