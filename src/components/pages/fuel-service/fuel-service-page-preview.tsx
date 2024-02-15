'use client'

import { type QueryResponseInitial } from '@sanity/react-loader/rsc'

import { FuelServicePage } from '@/components/pages/fuel-service/fuel-service-page'
import { fuelServicePageQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { FuelServicePagePayload } from '@/types'

type Props = {
  initial: QueryResponseInitial<FuelServicePagePayload | null>
}

export default function TeamPagePreview(props: Props) {
  const { initial } = props
  const { data, encodeDataAttribute } = useQuery<FuelServicePagePayload | null>(
    fuelServicePageQuery,
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
    <FuelServicePage data={data} encodeDataAttribute={encodeDataAttribute} />
  )
}
