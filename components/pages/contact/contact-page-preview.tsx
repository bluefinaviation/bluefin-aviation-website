"use client"

import dynamic from "next/dynamic"

import type { ContactPageProps } from "@/components/pages/contact/contact-page"

// Re-exported components using next/dynamic ensures they're not bundled
// and sent to the browser unless actually used, with draftMode().enabled.

const ContactPage = dynamic(
  // @ts-expect-error
  () => import("@/components/pages/contact/contact-page")
)

export const ContactPagePreview = ({ data }: ContactPageProps) => {
  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Home document to see the preview!
      </div>
    )
  }

  // @ts-expect-error
  return <ContactPage data={data} />
}
