import { ReactNode } from "react"
// import type { PortableTextBlock } from '@portabletext/types';
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

import { Toaster } from "@/components/ui/toaster"
import { Footer } from "@/components/navigation/footer"

// import { Navbar } from '@/components/shared/Navbar';
// import { getSettings } from '@/lib/sanity.client';
// import { getPreviewToken } from '@/lib/sanity.server.preview';

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
})

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  // const token = getPreviewToken();
  // const settings = (await getSettings({ token })) || {
  //   menuItems: [],
  //   footer: [],
  // };
  return (
    <html lang="en" className={`${inter.variable} `}>
      {/* <Navbar menuItems={settings.menuItems} /> */}
      {/* <Provider> */}
      <body>
        <main>{children}</main>
        <Toaster />
        <Analytics />
      </body>
      {/* </Provider> */}
      {/* <Footer footer={settings.footer as PortableTextBlock[]} /> */}
    </html>
  )
}
