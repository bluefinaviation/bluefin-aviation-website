"use client"

import dynamic from "next/dynamic"

import { FuelServicePageProps } from "@/components/pages/fuel-service/fuel-service-page"

// Re-exported components using next/dynamic ensures they're not bundled
// and sent to the browser unless actually used, with draftMode().enabled.

const FuelServicePage = dynamic(
  // @ts-expect-error
  () => import("@/components/pages/fuel-service/fuel-service-page")
)

export const FuelServicePagePreview = ({ data }: FuelServicePageProps) => {
  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Home document to see the preview!
      </div>
    )
  }

  // @ts-expect-error
  return <FuelServicePage data={data} />
}
