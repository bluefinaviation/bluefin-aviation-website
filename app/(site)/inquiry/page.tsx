import type { Metadata } from "next"
import { draftMode } from "next/headers"
import { LiveQuery } from "next-sanity/preview/live-query"

import { getInquiryPage } from "@/lib/sanity.fetch"
import { inquiryPageQuery } from "@/lib/sanity.queries"
import { InquiryPage } from "@/components/pages/inquiry/inquiry-page"
import { InquiryPagePreview } from "@/components/pages/inquiry/inquiry-page-preview"

export const revalidate = 60

export const metadata: Metadata = {
  title: "Inquiry",
  description: "Fill our inquiry form and our team will reach out in no time.",
}

export default async function InquiryRoute() {
  const data = await getInquiryPage()

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={inquiryPageQuery}
      initialData={data}
      as={InquiryPagePreview}
    >
      <InquiryPage data={data} />
    </LiveQuery>
  )
}
