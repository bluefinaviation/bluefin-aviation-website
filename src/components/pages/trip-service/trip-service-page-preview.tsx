'use client'

import { type QueryResponseInitial } from '@sanity/react-loader/rsc'

import { TripServicePage } from '@/components/pages/trip-service/trip-service-page'
import { tripServicePageQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { TripServicePagePayload } from '@/types'

type Props = {
  initial: QueryResponseInitial<TripServicePagePayload | null>
}

export default function TeamPagePreview(props: Props) {
  const { initial } = props
  const { data, encodeDataAttribute } = useQuery<TripServicePagePayload | null>(
    tripServicePageQuery,
    {},
    { initial }
  )

  if (!data) {
    return (
      <div className='text-center'>
        Please start editing your Home document to see the preview!
      </div>
    )
  }

  return (
    <TripServicePage data={data} encodeDataAttribute={encodeDataAttribute} />
  )
}
