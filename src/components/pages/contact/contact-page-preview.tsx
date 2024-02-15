'use client'

import { type QueryResponseInitial } from '@sanity/react-loader/rsc'

import { ContactPage } from '@/components/pages/contact/contact-page'
import { contactPageQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { ContactPagePayload } from '@/types'

type Props = {
  initial: QueryResponseInitial<ContactPagePayload | null>
}

export default function TeamPagePreview(props: Props) {
  const { initial } = props
  const { data, encodeDataAttribute } = useQuery<ContactPagePayload | null>(
    contactPageQuery,
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

  return <ContactPage data={data} encodeDataAttribute={encodeDataAttribute} />
}
