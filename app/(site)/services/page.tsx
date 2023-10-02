import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getServicesPage } from "@/lib/sanity.fetch"
import { ServicesPage } from "@/components/pages/services/services-page"

// // export const runtime = "edge"

export const metadata: Metadata = {
  title: "Services",
  description:
    "The best solution for your aviation needs with concierge-style trip support and worldwide fuel network. Learn more about our total aircraft management services.",
}

export default async function ServicesRoute() {
  const data = (await getServicesPage()) || {
    title: {},
    heroSection: {},
    tripService: {},
    fuelService: {},
  }

  return <ServicesPage data={data} />
}
