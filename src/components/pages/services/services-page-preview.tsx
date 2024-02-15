'use client'

import { type QueryResponseInitial } from '@sanity/react-loader/rsc'

import { ServicesPage } from '@/components/pages/services/services-page'
import { newsletterPageQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { ServicesPagePayload } from '@/types'

type Props = {
  initial: QueryResponseInitial<ServicesPagePayload | null>
}

export default function ServicesPagePreview(props: Props) {
  const { initial } = props
  const { data, encodeDataAttribute } = useQuery<ServicesPagePayload | null>(
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

  return <ServicesPage data={data} encodeDataAttribute={encodeDataAttribute} />
}
