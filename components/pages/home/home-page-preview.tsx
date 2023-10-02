"use client"

import dynamic from "next/dynamic"

import type { HomePageProps } from "@/components/pages/home/home-page"

// Re-exported components using next/dynamic ensures they're not bundled
// and sent to the browser unless actually used, with draftMode().enabled.

// @ts-expect-error
const HomePage = dynamic(() => import("@/components/pages/home/home-page"))

export const HomePagePreview = ({ data }: HomePageProps) => {
  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Home document to see the preview!
      </div>
    )
  }

  // @ts-expect-error
  return <HomePage data={data} />
}
