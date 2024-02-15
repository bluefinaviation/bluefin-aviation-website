'use client'

import { type QueryResponseInitial } from '@sanity/react-loader/rsc'

import { LinktreePage } from '@/components/pages/linktree/linktree-page'
import { linktreePageQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { LinktreePagePayload } from '@/types'

type Props = {
  initial: QueryResponseInitial<LinktreePagePayload | null>
}

export default function TeamPagePreview(props: Props) {
  const { initial } = props
  const { data, encodeDataAttribute } = useQuery<LinktreePagePayload | null>(
    linktreePageQuery,
    {},
    { initial }
  )

  if (!data) {
    return (
      <div className='text-center'>
        Please start editing your Linktree document to see the preview!
      </div>
    )
  }

  return <LinktreePage data={data} encodeDataAttribute={encodeDataAttribute} />
}
