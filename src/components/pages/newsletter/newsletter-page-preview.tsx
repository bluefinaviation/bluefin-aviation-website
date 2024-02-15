'use client'

import { type QueryResponseInitial } from '@sanity/react-loader/rsc'

import { NewsletterPage } from '@/components/pages/newsletter/newsletter-page'
import { newsletterPageQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { NewsletterPagePayload } from '@/types'

type Props = {
  initial: QueryResponseInitial<NewsletterPagePayload | null>
}

export default function TeamPagePreview(props: Props) {
  const { initial } = props
  const { data, encodeDataAttribute } = useQuery<NewsletterPagePayload | null>(
    newsletterPageQuery,
    {},
    { initial }
  )

  if (!data) {
    return (
      <div className='text-center'>
        Please start editing your newsletter document to see the preview!
      </div>
    )
  }

  return (
    <NewsletterPage data={data} encodeDataAttribute={encodeDataAttribute} />
  )
}
