"use client"

import dynamic from "next/dynamic"

import type { InquiryPageProps } from "@/components/pages/inquiry/inquiry-page"

// Re-exported components using next/dynamic ensures they're not bundled
// and sent to the browser unless actually used, with draftMode().enabled.

const InquiryPage = dynamic(
  // @ts-expect-error
  () => import("@/components/pages/inquiry/inquiry-page")
)

export const InquiryPagePreview = ({ data }: InquiryPageProps) => {
  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Home document to see the preview!
      </div>
    )
  }

  // @ts-expect-error
  return <InquiryPage data={data} />
}
