import '@/app/globals.css'

import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
export { metadata, viewport } from 'next-sanity/studio'

import { cn } from '@/lib/utils'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap'
})

export default async function RootLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang='en' className={inter.variable}>
      <body className={cn('min-h-screen')}>{children}</body>
    </html>
  )
}
