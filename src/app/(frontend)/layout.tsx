import "@/app/globals.css";

import { Metadata } from "next";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import { DisableDraftMode } from "@/components/draft/disable-draft-mode";
import { Footer } from "@/components/nav/footer";
import { Navbar } from "@/components/nav/navbar";
import { Toaster } from "@/components/ui/sonner";
import { JsonLd } from "@/components/shared/json-ld";

// import { ContactForm } from "@/components/shared/contact-form";

import { SanityLive } from "@/sanity/lib/live";

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

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Bluefin Aviation",
      legalName: "Bluefin Aviation",
      email: "operations@bluefinaviation.com",
      url: "https://www.bluefinaviation.com/",
      logo: "/images/logos/bluefin-logo.png",
      sameAs: [],
    },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <JsonLd data={organizationSchema} />

      <Navbar />
      {children}
      {/* <ContactForm /> */}
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
  );
}
