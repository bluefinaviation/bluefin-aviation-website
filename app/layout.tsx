import '@/styles/globals.css';

// import type { PortableTextBlock } from '@portabletext/types';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

// import { Footer } from '@/components/global/Footer';
// import { Navbar } from '@/components/global/Navbar';
// import { getSettings } from '@/lib/sanity.client';
// import { getPreviewToken } from '@/lib/sanity.server.preview';

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-sans',
});

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // const token = getPreviewToken();
  // const settings = (await getSettings({ token })) || {
  //   menuItems: [],
  //   footer: [],
  // };
  return (
    <html lang="en" className={`${inter.variable} `}>
      {/* <Navbar menuItems={settings.menuItems} /> */}
      <body>{children}</body>
      {/* <Footer footer={settings.footer as PortableTextBlock[]} /> */}
    </html>
  );
}
