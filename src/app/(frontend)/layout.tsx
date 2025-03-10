import '@/app/globals.css'

import { draftMode } from 'next/headers'
import { VisualEditing } from 'next-sanity'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

import { DisableDraftMode } from '@/components/draft/disable-draft-mode'
import { Footer } from '@/components/nav/footer'
import { Navbar } from '@/components/nav/navbar'
import { Toaster } from '@/components/ui/sonner'
import { JsonLd } from '@/components/shared/json-ld'

import { SanityLive } from '@/sanity/lib/live'

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />

      <Toaster />
      <Analytics />
      <SpeedInsights />
      <SanityLive />
      {(await draftMode()).isEnabled && (
        <>
          <DisableDraftMode />
          <VisualEditing />
        </>
      )}
    </section>
  )
}
