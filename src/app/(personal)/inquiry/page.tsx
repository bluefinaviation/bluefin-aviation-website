import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'

import { InquiryPage } from '@/components/pages/inquiry/inquiry-page'
import { studioUrl } from '@/sanity/lib/api'
import { loadInquiryPage } from '@/sanity/loader/loadQuery'

const InquiryPagePreview = dynamic(
  () => import('@/components/pages/inquiry/inquiry-page-preview')
)

export const metadata: Metadata = {
  title: 'Inquiry'
}

export default async function TeamRoute() {
  const initial = await loadInquiryPage()

  if (draftMode().isEnabled) {
    return <InquiryPagePreview initial={initial} />
  }

  if (!initial.data) {
    return (
      <div className='text-center'>
        {`You don't have an inquiry page yet, `}
        <Link href={`${studioUrl}/desk/home`} className='underline'>
          create one now
        </Link>
        !
      </div>
    )
  }

  return <InquiryPage data={initial.data} />
}
