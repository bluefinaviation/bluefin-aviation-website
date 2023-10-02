"use client"

import dynamic from "next/dynamic"

import { TripServicePageProps } from "@/components/pages/trip-service/trip-service-page"

// Re-exported components using next/dynamic ensures they're not bundled
// and sent to the browser unless actually used, with draftMode().enabled.

const TripServicePage = dynamic(
  //@ts-expect-error
  () => import("@/components/pages/trip-service/trip-service-page")
)

export const TripServicePagePreview = ({ data }: TripServicePageProps) => {
  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Home document to see the preview!
      </div>
    )
  }

  //@ts-expect-error
  return <TripServicePage data={data} />
}
