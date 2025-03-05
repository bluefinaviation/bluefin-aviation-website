import '@/app/globals.css'

import { ReactNode } from 'react'
import localFont from 'next/font/local'

import { cn } from '@/lib/utils'

const apercu = localFont({
  variable: '--font-apercu',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
  preload: true,
  src: [
    {
      path: '../../public/fonts/apercu/regular/apercu-thin-pro.woff2',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../../public/fonts/apercu/regular/apercu-thin-italic-pro.woff2',
      weight: '100',
      style: 'italic'
    },
    {
      path: '../../public/fonts/apercu/regular/apercu-extralight-pro.woff2',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../../public/fonts/apercu/regular/apercu-extralight-italic-pro.woff2',
      weight: '200',
      style: 'italic'
    },
    {
      path: '../../public/fonts/apercu/regular/apercu-light-pro.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../public/fonts/apercu/regular/apercu-light-italic-pro.woff2',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../../public/fonts/apercu/regular/apercu-regular-pro.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/apercu/regular/apercu-italic-pro.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../public/fonts/apercu/regular/apercu-medium-pro.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/apercu/regular/apercu-medium-italic-pro.woff2',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../../public/fonts/apercu/regular/apercu-bold-pro.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/apercu/regular/apercu-bold-italic-pro.woff2',
      weight: '700',
      style: 'italic'
    },
    {
      path: '../../public/fonts/apercu/regular/apercu-black-pro.woff2',
      weight: '900',
      style: 'normal'
    },
    {
      path: '../../public/fonts/apercu/regular/apercu-black-italic-pro.woff2',
      weight: '900',
      style: 'italic'
    }
  ]
})

const apercuCondensed = localFont({
  variable: '--font-apercu-condensed',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
  preload: true,
  src: [
    {
      path: '../../public/fonts/apercu/condensed/apercu-condensed-light-pro.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../public/fonts/apercu/condensed/apercu-condensed-light-italic-pro.woff2',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../../public/fonts/apercu/condensed/apercu-condensed-regular-pro.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/apercu/condensed/apercu-condensed-italic-pro.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../public/fonts/apercu/condensed/apercu-condensed-medium-pro.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/apercu/condensed/apercu-condensed-medium-italic-pro.woff2',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../../public/fonts/apercu/condensed/apercu-condensed-bold-pro.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/apercu/condensed/apercu-condensed-bold-italic-pro.woff2',
      weight: '700',
      style: 'italic'
    }
  ]
})

const apercuMono = localFont({
  variable: '--font-apercu-mono',
  display: 'swap',
  fallback: ['monospace'],
  preload: true,
  src: [
    {
      path: '../../public/fonts/apercu/mono/apercu-mono-light-pro.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../public/fonts/apercu/mono/apercu-mono-regular-pro.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/apercu/mono/apercu-mono-medium-pro.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/apercu/mono/apercu-mono-bold-pro.woff2',
      weight: '700',
      style: 'normal'
    }
  ]
})

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html
      lang='en'
      className={cn(
        apercu.variable,
        apercuCondensed.variable,
        apercuMono.variable
      )}
    >
      <body>{children}</body>
    </html>
  )
}
