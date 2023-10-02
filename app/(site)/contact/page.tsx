import type { Metadata } from "next"
import { draftMode } from "next/headers"
import { LiveQuery } from "next-sanity/preview/live-query"

import { getContactPage } from "@/lib/sanity.fetch"
import { contactPageQuery } from "@/lib/sanity.queries"
import { ContactPage } from "@/components/pages/contact/contact-page"
import { ContactPagePreview } from "@/components/pages/contact/contact-page-preview"

export const revalidate = 60

export const metadata: Metadata = {
  title: "Contact",
  description:
    "The best solution for your aviation needs with concierge-style trip support and worldwide fuel network. Contact us to discuss more.",
}

export default async function ContactRoute() {
  const data = await getContactPage()

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={contactPageQuery}
      initialData={data}
      as={ContactPagePreview}
    >
      <ContactPage data={data} />
    </LiveQuery>
  )
}
