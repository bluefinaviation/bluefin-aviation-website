import "@/app/globals.css";

import { ReactNode } from "react";
import { Metadata } from "next";
import { SanityLive } from "@/sanity/lib/live";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";

import { Footer } from "@/components/nav/footer";
import { Navbar } from "@/components/nav/navbar";
import { Toaster } from "@/components/ui/sonner";

const apercu = localFont({
  variable: "--font-apercu",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  preload: true,
  src: [
    {
      path: "../../../public/fonts/apercu/regular/apercu-thin-pro.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../../public/fonts/apercu/regular/apercu-thin-italic-pro.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../../public/fonts/apercu/regular/apercu-extralight-pro.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../../public/fonts/apercu/regular/apercu-extralight-italic-pro.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../../public/fonts/apercu/regular/apercu-light-pro.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/apercu/regular/apercu-light-italic-pro.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../../public/fonts/apercu/regular/apercu-regular-pro.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/apercu/regular/apercu-italic-pro.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/fonts/apercu/regular/apercu-medium-pro.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/apercu/regular/apercu-medium-italic-pro.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../../public/fonts/apercu/regular/apercu-bold-pro.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/apercu/regular/apercu-bold-italic-pro.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../../public/fonts/apercu/regular/apercu-black-pro.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../../public/fonts/apercu/regular/apercu-black-italic-pro.woff2",
      weight: "900",
      style: "italic",
    },
  ],
});

const apercuCondensed = localFont({
  variable: "--font-apercu-condensed",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  preload: true,
  src: [
    {
      path: "../../../public/fonts/apercu/condensed/apercu-condensed-light-pro.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/apercu/condensed/apercu-condensed-light-italic-pro.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../../public/fonts/apercu/condensed/apercu-condensed-regular-pro.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/apercu/condensed/apercu-condensed-italic-pro.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/fonts/apercu/condensed/apercu-condensed-medium-pro.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/apercu/condensed/apercu-condensed-medium-italic-pro.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../../public/fonts/apercu/condensed/apercu-condensed-bold-pro.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/apercu/condensed/apercu-condensed-bold-italic-pro.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});

const apercuMono = localFont({
  variable: "--font-apercu-mono",
  display: "swap",
  fallback: ["monospace"],
  preload: true,
  src: [
    {
      path: "../../../public/fonts/apercu/mono/apercu-mono-light-pro.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/apercu/mono/apercu-mono-regular-pro.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/apercu/mono/apercu-mono-medium-pro.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/apercu/mono/apercu-mono-bold-pro.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bluefinaviation.com"),
  title: {
    template: `%s | Bluefin Aviation`,
    default:
      "A total concierge-style battery of aviation services | Bluefin Aviation",
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
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${apercu.variable} ${apercuCondensed.variable} ${apercuMono.variable}`}
    >
      <body>
        <Analytics />
        <SpeedInsights />
        <Toaster />
        <Navbar />

        <div className="flex-1 grow">{children}</div>
        <SanityLive />

        <Footer />
      </body>
    </html>
  );
}
