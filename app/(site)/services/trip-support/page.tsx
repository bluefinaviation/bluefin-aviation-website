import type { Metadata } from "next"
import { draftMode } from "next/headers"
import { LiveQuery } from "next-sanity/preview/live-query"

import { getTripServicePage } from "@/lib/sanity.fetch"
import { tripServicePageQuery } from "@/lib/sanity.queries"
import { TripServicePage } from "@/components/pages/trip-service/trip-service-page"
import { TripServicePagePreview } from "@/components/pages/trip-service/trip-service-page-preview"

export const revalidate = 60

export const metadata: Metadata = {
  title: "Trip Support",
  description:
    "The best solution for your aviation needs with concierge-style trip support and worldwide fuel network. Learn more about our trip services.",
}

export default async function TripSupportRoute() {
  const data = await getTripServicePage()

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={tripServicePageQuery}
      initialData={data}
      as={TripServicePagePreview}
    >
      <TripServicePage data={data} />
    </LiveQuery>
  )
}
