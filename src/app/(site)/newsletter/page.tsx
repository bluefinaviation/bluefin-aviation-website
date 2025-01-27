import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'

import { NewsletterPage } from '@/components/pages/newsletter/newsletter-page'
import { studioUrl } from '@/sanity/lib/api'
import { loadNewsletterPage } from '@/sanity/loader/loadQuery'

const NewsletterPagePreview = dynamic(
  () => import('@/components/pages/newsletter/newsletter-page-preview')
)

export const metadata: Metadata = {
  title: 'Newsletter'
}

export default async function NewsletterRoute() {
  const initial = await loadNewsletterPage()

  if (draftMode().isEnabled) {
    return <NewsletterPagePreview initial={initial} />
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

  return <NewsletterPage data={initial.data} />
}
