"use client"

import dynamic from "next/dynamic"

import type { PolicyPageProps } from "@/components/pages/policy/policy-page"

// Re-exported components using next/dynamic ensures they're not bundled
// and sent to the browser unless actually used, with draftMode().enabled.

const PolicyPage = dynamic(
  // @ts-expect-error
  () => import("@/components/pages/policy/policy-page")
)

export const PolicyPagePreview = ({ data }: PolicyPageProps) => {
  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Home document to see the preview!
      </div>
    )
  }

  // @ts-expect-error
  return <PolicyPage data={data} />
}
