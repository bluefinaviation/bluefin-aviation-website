import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'

import { LinktreePage } from '@/components/pages/linktree/linktree-page'
import { studioUrl } from '@/sanity/lib/api'
import { loadLinktreePage } from '@/sanity/loader/loadQuery'

const LinktreePagePreview = dynamic(
  () => import('@/components/pages/linktree/linktree-page-preview')
)

export const metadata: Metadata = {
  title: 'Linktree'
}

export default async function LinktreeRoute() {
  const initial = await loadLinktreePage()

  if (draftMode().isEnabled) {
    return <LinktreePagePreview initial={initial} />
  }

  if (!initial.data) {
    return (
      <div className='text-center'>
        {`You don't have a linktree page yet, `}
        <Link href={`${studioUrl}/desk/home`} className='underline'>
          create one now
        </Link>
        !
      </div>
    )
  }

  return <LinktreePage data={initial.data} />
}
