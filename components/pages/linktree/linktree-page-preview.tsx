"use client"

import dynamic from "next/dynamic"

import type { LinktreePageProps } from "@/components/pages/linktree/linktree-page"

// Re-exported components using next/dynamic ensures they're not bundled
// and sent to the browser unless actually used, with draftMode().enabled.

const LinktreePage = dynamic(
  //@ts-expect-error
  () => import("@/components/pages/linktree/linktree-page")
)

export const LinktreePagePreview = ({ data }: LinktreePageProps) => {
  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Home document to see the preview!
      </div>
    )
  }

  //@ts-expect-error
  return <LinktreePage data={data} />
}
