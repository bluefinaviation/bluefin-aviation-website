import '@/app/globals.css'

import { Analytics } from '@vercel/analytics/react'
import { Metadata, Viewport } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { ReactNode, Suspense } from 'react'

// // import { toPlainText } from '@portabletext/react'
import { Footer } from '@/components/nav/footer'
import { Navbar } from '@/components/nav/navbar'
import { Toaster } from '@/components/ui/toaster'
// // import { token } from '@/sanity/lib/token'

// // const PostHogPageView = dynamic(
// //   () => import('../../components/analytics/posthog-page-view'),
// //   {
// //     ssr: false
// //   }
// // )

const LiveVisualEditing = dynamic(
  () => import('@/sanity/loader/LiveVisualEditing')
)

export const metadata: Metadata = {
  metadataBase: new URL('https://bluefinaviation.com'),
  title: {
    default: 'Bluefin Aviation',
    template: '%s | Bluefin Aviation'
  },
  description:
    'A total concierge-style battery of services awaits you at Bluefin Aviation. Bluefin Aviation offers top quality services for aircraft needs at all levels.',
  openGraph: {
    title: 'Bluefin Aviation',
    description:
      'A total concierge-style battery of services awaits you at Bluefin Aviation. Bluefin Aviation offers top quality services for aircraft needs at all levels.',
    url: 'https://bluefinaviation.com',
    siteName: 'Bluefin Aviation',
    images: [
      {
        url: 'https://bluefinaviation.com/images/og.png',
        width: 1200,
        height: 630
      }
    ],
    locale: 'en-US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: 'Bluefin Aviation',
    card: 'summary_large_image',
    description:
      'A total concierge-style battery of services awaits you at Bluefin Aviation. Bluefin Aviation offers top quality services for aircraft needs at all levels.',
    images: [
      {
        url: 'https://bluefinaviation.com/images/og.png',
        width: 1200,
        height: 630
      }
    ]
  },
  icons: {
    shortcut: '/favicon.ico'
  }
}

export const viewport: Viewport = {
  themeColor: '#000',
}

export default async function RootLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <>
      <Analytics />
      <Toaster />

      <Suspense>
        <Navbar />
      </Suspense>

      <div className='flex-1 grow'>
        <Suspense>{children}</Suspense>
      </div>

      <Suspense>
        <Footer />
      </Suspense>
      {draftMode().isEnabled && <LiveVisualEditing />}
    </>
  )
}
