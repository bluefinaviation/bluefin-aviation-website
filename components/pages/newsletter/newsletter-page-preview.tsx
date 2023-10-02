"use client"

import dynamic from "next/dynamic"

import type { NewsletterPageProps } from "@/components/pages/newsletter/newsletter-page"

// Re-exported components using next/dynamic ensures they're not bundled
// and sent to the browser unless actually used, with draftMode().enabled.

const NewsletterPage = dynamic(
  //@ts-expect-error
  () => import("@/components/pages/newsletter/newsletter-page")
)

export const NewsletterPagePreview = ({ data }: NewsletterPageProps) => {
  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Home document to see the preview!
      </div>
    )
  }

  //@ts-expect-error
  return <NewsletterPage data={data} />
}
