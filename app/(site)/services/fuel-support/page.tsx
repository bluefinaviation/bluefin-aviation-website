import type { Metadata } from "next"
import { draftMode } from "next/headers"
import { LiveQuery } from "next-sanity/preview/live-query"

import { getFuelServicePage } from "@/lib/sanity.fetch"
import { fuelServicePageQuery } from "@/lib/sanity.queries"
import { FuelServicePage } from "@/components/pages/fuel-service/fuel-service-page"
import { FuelServicePagePreview } from "@/components/pages/fuel-service/fuel-service-page-preview"

export const revalidate = 60

export const metadata: Metadata = {
  title: "Fuel Support",
  description:
    "The best solution for your aviation needs with concierge-style trip support and worldwide fuel network. Learn more about our trip services.",
}

export default async function FuelSupportRoute() {
  const data = await getFuelServicePage()

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={fuelServicePageQuery}
      initialData={data}
      as={FuelServicePagePreview}
    >
      <FuelServicePage data={data} />
    </LiveQuery>
  )
}
