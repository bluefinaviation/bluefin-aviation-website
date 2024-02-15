import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'

import { FuelServicePage } from '@/components/pages/fuel-service/fuel-service-page'
import { studioUrl } from '@/sanity/lib/api'
import { loadFuelServicePage } from '@/sanity/loader/loadQuery'

const FuelServicePagePreview = dynamic(
  () => import('@/components/pages/fuel-service/fuel-service-page-preview')
)

export const metadata: Metadata = {
  title: 'Fuel Service'
}

export default async function TeamRoute() {
  const initial = await loadFuelServicePage()

  if (draftMode().isEnabled) {
    return <FuelServicePagePreview initial={initial} />
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

  return <FuelServicePage data={initial.data} />
}
