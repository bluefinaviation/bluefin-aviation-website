import '@/app/globals.css'

import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

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
  return (
    <html lang='en' className='h-full'>
      <body
        className={cn('antialised relative h-full font-sans', inter.variable)}
      >
        <main className='relative flex min-h-screen flex-col'>{children}</main>
      </body>
    </html>
  )
}
