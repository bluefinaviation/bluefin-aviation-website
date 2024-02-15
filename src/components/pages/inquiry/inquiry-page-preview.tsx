'use client'

import { type QueryResponseInitial } from '@sanity/react-loader/rsc'

import { InquiryPage } from '@/components/pages/inquiry/inquiry-page'
import { inquiryPageQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { InquiryPagePayload } from '@/types'

type Props = {
  initial: QueryResponseInitial<InquiryPagePayload | null>
}

export default function TeamPagePreview(props: Props) {
  const { initial } = props
  const { data, encodeDataAttribute } = useQuery<InquiryPagePayload | null>(
    inquiryPageQuery,
    {},
    { initial }
  )

  if (!data) {
    return (
      <div className='text-center'>
        Please start editing your inquiry document to see the preview!
      </div>
    )
  }

  return <InquiryPage data={data} encodeDataAttribute={encodeDataAttribute} />
}
