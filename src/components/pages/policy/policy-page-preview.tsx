'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { PolicyPage } from '@/components/pages/policy/policy-page'
import { policyBySlugQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { PolicyPagePayload } from '@/types'

type Props = {
  params: { slug: string }
  initial: QueryResponseInitial<PolicyPagePayload | null>
}

export default function ProjectPreview(props: Props) {
  const { params, initial } = props
  const { data, encodeDataAttribute } = useQuery<PolicyPagePayload | null>(
    policyBySlugQuery,
    params,
    { initial }
  )

  return <PolicyPage data={data!} encodeDataAttribute={encodeDataAttribute} />
}
