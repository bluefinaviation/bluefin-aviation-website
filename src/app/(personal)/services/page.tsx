import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'

import { ServicesPage } from '@/components/pages/services/services-page'
import { studioUrl } from '@/sanity/lib/api'
import { loadServicesPage } from '@/sanity/loader/loadQuery'

const ServicesPagePreview = dynamic(
  () => import('@/components/pages/services/services-page-preview')
)

export const metadata: Metadata = {
  title: 'Services'
}

export default async function ServicesRoute() {
  const initial = await loadServicesPage()

  if (draftMode().isEnabled) {
    return <ServicesPagePreview initial={initial} />
  }

  if (!initial.data) {
    return (
      <div className='text-center'>
        {`You don't have a services page yet, `}
        <Link href={`${studioUrl}/desk/home`} className='underline'>
          create one now
        </Link>
        !
      </div>
    )
  }

  return <ServicesPage data={initial.data} />
}
