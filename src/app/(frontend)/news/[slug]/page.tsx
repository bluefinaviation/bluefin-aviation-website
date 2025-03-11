import { PortableText } from '@portabletext/react'
import { Article, WithContext } from 'schema-dts'

import { Container } from '@/components/shared/section-container'
import { Hero } from '@/components/blocks/hero'
import { JsonLd } from '@/components/shared/json-ld'

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

  const articleSchema: WithContext<Article> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article?.title,
    image: [article?.imageUrl!],
    datePublished: article?.publishedAt,
    dateModified: article?._updatedAt,
    author: article?.author?.name!,
    publisher: article?.publishedAt,
    description: article?.summary,
    url: `https://www.bluefinaviation.com/news/${article?.slug}`
  }

  return (
    <div>
      <JsonLd data={articleSchema} />

      <Hero
        title={article?.title}
        text={article?.summary}
        image={article?.mainImage!}
        isBreadcrumb={true}
      />
      <Container className='mx-auto prose max-w-5xl list-disc py-16 sm:prose-lg sm:py-24'>
        <PortableText value={article?.body!} components={components} />
      </Container>
    </div>
  )
}
