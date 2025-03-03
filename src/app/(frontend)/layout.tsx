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

// // export async function generateMetadata(): Promise<Metadata> {
// //   const { data: gpDetails } = await sanityFetch({
// //     query: GP_DETAILS_QUERY,
// //   });

// //   return {
// //     title: {
// //       template: `${gpDetails?.seo?.title || "2026 F1 Spanish Grand Prix"} | %s`,
// //       default: `${gpDetails?.seo?.title || "IFEMA Madrid Circuit"} | 2026 F1 Spanish Grand Prix`,
// //     },
// //     openGraph: {
// //       title: `${gpDetails?.seo?.title || "2026 F1 Spanish Grand Prix"}`,
// //       description:
// //         gpDetails?.seo?.description ||
// //         "After more than 4 decades of absence, the Formula 1 is back in Madrid. From 2026 to 2035, the capital will be the home of the Spanish Grand Prix.",
// //       url: "https://madrid-f1-gp.vercel.app/",
// //       siteName: "2026 F1 GP Madrid",
// //       images: [
// //         {
// //           url: "https://madrid-f1-gp.vercel.app/images/og.png",

// //           width: 1200,
// //           height: 630,
// //         },
// //       ],
// //       locale: "en-GB",
// //       type: "website",
// //     },
// //     description:
// //       gpDetails?.seo?.description ||
// //       "After more than 4 decades of absence, the Formula 1 is back in Madrid. From 2026 to 2035, the capital will be the home of the Spanish Grand Prix.",
// //     robots: {
// //       index: true,
// //       follow: true,
// //       googleBot: {
// //         index: true,
// //         follow: true,
// //         "max-video-preview": -1,
// //         "max-image-preview": "large",
// //         "max-snippet": -1,
// //       },
// //     },
// //     twitter: {
// //       title: `${gpDetails?.seo?.title || "2026 F1 Spanish Grand Prix"}`,
// //       site: "https://madrid-f1-gp.vercel.app/",
// //       card: "summary_large_image",
// //       description: `${gpDetails?.seo?.description || "After more than 4 decades of absence, the Formula 1 is back in Madrid. From 2026 to 2035, the capital will be the home of the Spanish Grand Prix."}`,
// //       images: [
// //         {
// //           url: "https://madrid-f1-gp.vercel.app/images/og.png",
// //           alt: "2026 F1 GP Madrid",
// //           width: 1200,
// //           height: 630,
// //         },
// //       ],
// //     },
// //     icons: {
// //       icon: "/favicon.ico",
// //       shortcut: "/favicon.ico",
// //       apple: "/favicon/apple-icon.png",
// //     },
// //   };
// // }

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="">
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
