import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'

import { TripServicePage } from '@/components/pages/trip-service/trip-service-page'
import { studioUrl } from '@/sanity/lib/api'
import { loadTripServicePage } from '@/sanity/loader/loadQuery'

const TripServicePagePreview = dynamic(
  () => import('@/components/pages/trip-service/trip-service-page-preview')
)

export const metadata: Metadata = {
  title: 'Trip Service'
}

export default async function TeamRoute() {
  const initial = await loadTripServicePage()

  if (draftMode().isEnabled) {
    return <TripServicePagePreview initial={initial} />
  }

  if (!initial.data) {
    return (
      <div className='text-center'>
        {`You don't have a team page yet, `}
        <Link href={`${studioUrl}/desk/home`} className='underline'>
          create one now
        </Link>
        !
      </div>
    )
  }

  return <TripServicePage data={initial.data} />
}
