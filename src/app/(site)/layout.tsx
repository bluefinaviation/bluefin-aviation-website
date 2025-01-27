import '@/app/globals.css'

import { ReactNode, Suspense } from 'react'
import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { Inter } from 'next/font/google'
import { VisualEditing, toPlainText, type PortableTextBlock } from 'next-sanity'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

// // import AlertBanner from './alert-banner'
// // import PortableText from './portable-text'
import { sanityFetch } from '@/sanity/lib/fetch'
import { settingsQuery } from '@/sanity/lib/queries'
import { resolveOpenGraphImage } from '@/sanity/lib/utils'

import { Footer } from '@/components/nav/footer'
import { Navbar } from '@/components/nav/navbar'
import { Toaster } from '@/components/ui/toaster'

// // export const metadata: Metadata = {
// //   metadataBase: new URL('https://bluefinaviation.com'),
// //   title: {
// //     default: 'Bluefin Aviation',
// //     template: '%s | Bluefin Aviation'
// //   },
// //   description:
// //     'A total concierge-style battery of services awaits you at Bluefin Aviation. Bluefin Aviation offers top quality services for aircraft needs at all levels.',
// //   openGraph: {
// //     title: 'Bluefin Aviation',
// //     description:
// //       'A total concierge-style battery of services awaits you at Bluefin Aviation. Bluefin Aviation offers top quality services for aircraft needs at all levels.',
// //     url: 'https://bluefinaviation.com',
// //     siteName: 'Bluefin Aviation',
// //     images: [
// //       {
// //         url: 'https://bluefinaviation.com/images/og.png',
// //         width: 1200,
// //         height: 630
// //       }
// //     ],
// //     locale: 'en-US',
// //     type: 'website'
// //   },
// //   robots: {
// //     index: true,
// //     follow: true,
// //     googleBot: {
// //       index: true,
// //       follow: true,
// //       'max-video-preview': -1,
// //       'max-image-preview': 'large',
// //       'max-snippet': -1
// //     }
// //   },
// //   twitter: {
// //     title: 'Bluefin Aviation',
// //     card: 'summary_large_image',
// //     description:
// //       'A total concierge-style battery of services awaits you at Bluefin Aviation. Bluefin Aviation offers top quality services for aircraft needs at all levels.',
// //     images: [
// //       {
// //         url: 'https://bluefinaviation.com/images/og.png',
// //         width: 1200,
// //         height: 630
// //       }
// //     ]
// //   },
// //   icons: {
// //     shortcut: '/favicon.ico'
// //   }
// // }

// // export async function generateMetadata(): Promise<Metadata> {
// //   const settings = await sanityFetch({
// //     query: settingsQuery,
// //     // Metadata should never contain stega
// //     stega: false,
// //   });
// //   const title = settings?.title || demo.title;
// //   const description = settings?.description || demo.description;

// //   const ogImage = resolveOpenGraphImage(settings?.ogImage);
// //   let metadataBase: URL | undefined = undefined;
// //   try {
// //     metadataBase = settings?.ogImage?.metadataBase
// //       ? new URL(settings.ogImage.metadataBase)
// //       : undefined;
// //   } catch {
// //     // ignore
// //   }
// //   return {
// //     metadataBase,
// //     title: {
// //       template: `%s | ${title}`,
// //       default: title,
// //     },
// //     description: toPlainText(description),
// //     openGraph: {
// //       images: ogImage ? [ogImage] : [],
// //     },
// //   };
// // }

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-sans'
})

export default async function RootLayout({
  children
}: {
  children: ReactNode
}) {
  const data = await sanityFetch({ query: settingsQuery })
  // // const footer = data?.footer || []
  const { isEnabled: isDraftMode } = await draftMode()

  return (
    <html lang='en' className={`${inter.variable} bg-white text-black`}>
      <body>
        <Analytics />
        <SpeedInsights />
        <Toaster />
        <Navbar />

        <div className='flex-1 grow'>{children}</div>

        <Footer />

        {isDraftMode && <VisualEditing />}
      </body>
    </html>
  )
}
