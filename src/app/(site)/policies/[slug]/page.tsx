import type { PortableTextBlock } from '@portabletext/types'
import { format } from 'date-fns'

import { CustomPortableText } from '@/components/shared/custom-portable-text'
import { SectionHeading } from '@/components/shared/section-heading'

import { sanityFetch } from '@/sanity/lib/fetch'
import { policyBySlugQuery } from '@/sanity/lib/queries'

interface PolicyPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function PolicyPage({ params }: PolicyPageProps) {
  const { slug } = await params

  const fuelServiceData = await sanityFetch({
    query: policyBySlugQuery,
    params: {
      slug: slug
    }
  })

  if (!fuelServiceData) return null

  const formattedDate = format(
    new Date(fuelServiceData.updatedAt as string),
    'PPP'
  )

  return (
    <div className='py-8 sm:py-16 lg:py-24'>
      <div className='text-center '>
        <SectionHeading>{fuelServiceData.title}</SectionHeading>
        <p className='font-medium text-slate-700'>
          Last updated on {formattedDate}
        </p>
      </div>
      <div className='prose mx-auto mt-16 max-w-prose'>
        <CustomPortableText
          value={fuelServiceData.content as PortableTextBlock[]}
        />
      </div>
    </div>
  )
}
