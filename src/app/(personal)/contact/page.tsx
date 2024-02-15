import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'

import { ContactPage } from '@/components/pages/contact/contact-page'
import { studioUrl } from '@/sanity/lib/api'
import { loadContactPage } from '@/sanity/loader/loadQuery'

const ContactPagePreview = dynamic(
  () => import('@/components/pages/contact/contact-page-preview')
)

export const metadata: Metadata = {
  title: 'Contact'
}

export default async function ContactRoute() {
  const initial = await loadContactPage()

  if (draftMode().isEnabled) {
    return <ContactPagePreview initial={initial} />
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
  return <ContactPage data={initial.data} />
}
