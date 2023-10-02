import "@/app/globals.css"

import { ReactNode, Suspense } from "react"
import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { draftMode } from "next/headers"

import { token } from "@/lib/sanity.fetch"
import { Footer } from "@/components/nav/footer"
import { Navbar } from "@/components/nav/navbar"
import { PreviewBanner } from "@/components/preview/preview-banner"

export const metadata: Metadata = {
  metadataBase: new URL("https://bluefinaviation.com"),
  title: {
    default: "Bluefin Aviation",
    template: "%s | Bluefin Aviation",
  },
  description:
    "A total concierge-style battery of services awaits you at Bluefin Aviation. Bluefin Aviation offers top quality services for aircraft needs at all levels.",
  openGraph: {
    title: "Bluefin Aviation",
    description:
      "A total concierge-style battery of services awaits you at Bluefin Aviation. Bluefin Aviation offers top quality services for aircraft needs at all levels.",
    url: "https://bluefinaviation.com",
    siteName: "Bluefin Aviation",
    images: [
      {
        url: "https://bluefinaviation.com/images/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Bluefin Aviation",
    card: "summary_large_image",
    description:
      "A total concierge-style battery of services awaits you at Bluefin Aviation. Bluefin Aviation offers top quality services for aircraft needs at all levels.",
    images: [
      {
        url: "https://bluefinaviation.com/images/og.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    shortcut: "/favicon.ico",
  },
}

const PreviewProvider = dynamic(
  () => import("@/components/preview/preview-provider")
)

export default async function IndexRoute({
  children,
}: {
  children: ReactNode
}) {
  const isDraftMode = draftMode().isEnabled

  const layout = (
    <div className="flex min-h-screen flex-col bg-white text-black">
      {isDraftMode && <PreviewBanner />}
      <Suspense>
        <Navbar />
      </Suspense>
      <div>
        <Suspense>{children}</Suspense>
      </div>
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  )

  if (isDraftMode) {
    return <PreviewProvider token={token!}>{layout}</PreviewProvider>
  }

  return layout
}
