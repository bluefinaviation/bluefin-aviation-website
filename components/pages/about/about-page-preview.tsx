"use client"

import dynamic from "next/dynamic"

import type { AboutPageProps } from "@/components/pages/about/about-page"

// Re-exported components using next/dynamic ensures they're not bundled
// and sent to the browser unless actually used, with draftMode().enabled.

// @ts-expect-error
const AboutPage = dynamic(() => import("@/components/pages/about/about-page"))

export const AboutPagePreview = ({ data }: AboutPageProps) => {
  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Home document to see the preview!
      </div>
    )
  }

  // @ts-expect-error
  return <AboutPage data={data} />
}
