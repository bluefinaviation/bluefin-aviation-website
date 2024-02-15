import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'

import { HomePage } from '@/components/pages/home/home-page'
import { studioUrl } from '@/sanity/lib/api'
import { loadHomePage } from '@/sanity/loader/loadQuery'

const HomePagePreview = dynamic(
  () => import('@/components/pages/home/home-page-preview')
)

export default async function HomeRoute() {
  const initial = await loadHomePage()

  if (draftMode().isEnabled) {
    return <HomePagePreview initial={initial} />
  }

  if (!initial.data) {
    return (
      <div className='text-center'>
        {`You don't have a homepage yet, `}
        <Link href={`${studioUrl}/desk/home`} className='underline'>
          create one now
        </Link>
        !
      </div>
    )
  }

  return <HomePage data={initial.data} />
}
