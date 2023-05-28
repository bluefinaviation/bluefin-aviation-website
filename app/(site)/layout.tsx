// // import type { PortableTextBlock } from '@portabletext/types';
// // import { PreviewBanner } from 'components/preview/PreviewBanner';
// // import { getSettings } from '@/lib/sanity.client';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Provider } from 'react-wrap-balancer';

import { Footer } from '@/components/navigation/Footer';
import { Navbar } from '@/components/navigation/Navbar';
import { getPreviewToken } from '@/lib/sanity.server.preview';

// // import { toPlainText } from '@portabletext/react'
// // import { SiteMeta } from 'components/global/SiteMeta'
// // import { getHomePage, getSettings } from 'lib/sanity.client'
// // import { getPreviewToken } from 'lib/sanity.server.preview'

// // export default async function HomePageHead() {
// //   const token = getPreviewToken()

// //   const [settings, page] = await Promise.all([
// //     getSettings({ token }),
// //     getHomePage({ token }),
// //   ])

// //   return (
// //     <SiteMeta
// //       description={page?.overview ? toPlainText(page.overview) : ''}
// //       image={settings?.ogImage}
// //       title={page?.title}
// //     />
// //   )
// // }

export const metadata: Metadata = {
  metadataBase: new URL('https://bluefinaviation.com'),
  title: {
    default: 'Bluefin Aviation',
    template: '%s | Bluefin Aviation',
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
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        height: 630,
      },
    ],
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};

export default async function IndexRoute({
  children,
}: {
  children: ReactNode;
}) {
  const token = getPreviewToken();
  // // const settings = (await getSettings({ token })) || {
  // //   menuItems: [],
  // //   footer: [],
  // // };

  return (
    <Provider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex-grow">{children}</div>

        {/* {token && <PreviewBanner />}
      <Navbar menuItems={settings.menuItems} />
      <div className="mt-20 flex-grow px-4 md:px-16 lg:px-32">{children}</div>
    <Footer footer={settings.footer as PortableTextBlock[]} /> */}
        {/* @ts-expect-error Server Component */}

        <Footer />
      </div>
    </Provider>
  );
}
