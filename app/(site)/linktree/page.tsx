import type { Metadata } from "next"
import { draftMode } from "next/headers"
import { LiveQuery } from "next-sanity/preview/live-query"

import { getLinktreePage } from "@/lib/sanity.fetch"
import { linktreePageQuery } from "@/lib/sanity.queries"
import { LinktreePage } from "@/components/pages/linktree/linktree-page"
import { LinktreePagePreview } from "@/components/pages/linktree/linktree-page-preview"

export const revalidate = 60

export const metadata: Metadata = {
  title: "Linktree",
  description:
    "Bluefin best solution for your aviation needs with concierge-style trip support and worldwide fuel network. Check out our more important links.",
}

export default async function LinktreeRoute() {
  const data = await getLinktreePage()

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={linktreePageQuery}
      initialData={data}
      as={LinktreePagePreview}
    >
      <LinktreePage data={data} />
    </LiveQuery>
  )
}
