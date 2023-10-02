import { Metadata } from "next"
import { draftMode } from "next/headers"
import { toPlainText } from "@portabletext/react"
import { LiveQuery } from "next-sanity/preview/live-query"

import { getHomePage } from "@/lib/sanity.fetch"
import { homePageQuery } from "@/lib/sanity.queries"
import { defineMetadata } from "@/lib/utils.metadata"
import { HomePage } from "@/components/pages/home/home-page"
import { HomePagePreview } from "@/components/pages/home/home-page-preview"

// // export const runtime = "edge"

// // export async function generateMetadata(): Promise<Metadata> {
// //   const [settings, page] = await Promise.all([getSettings(), getHomePage()])

// //   return defineMetadata({
// //     description: page?.overview ? toPlainText(page.overview) : "",
// //     image: settings?.ogImage,
// //     title: page?.title,
// //   })
// // }

export default async function HomeRoute() {
  const data = await getHomePage()

  // // if (!data && !draftMode().isEnabled) {
  // //   return (
  // //     <div className="text-center">
  // //       You don&rsquo;t have a homepage document yet,{" "}
  // //       <Link
  // //         href="/studio/desk/home%7C%2Cview%3Dpreview"
  // //         className="underline"
  // //       >
  // //         create one now
  // //       </Link>
  // //       !
  // //     </div>
  // //   )
  // // }

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={homePageQuery}
      initialData={data}
      as={HomePagePreview}
    >
      <HomePage data={data} />
    </LiveQuery>
  )
}
