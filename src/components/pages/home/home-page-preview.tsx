"use client"

import { type QueryResponseInitial } from "@sanity/react-loader"

import { HomePage } from "@/components/pages/home/home-page"
import { homePageQuery } from "@/sanity/lib/queries"
import { useQuery } from "@/sanity/loader/useQuery"
import { HomePagePayload } from "@/types"

type Props = {
  initial: QueryResponseInitial<HomePagePayload | null>
}

export default function HomePagePreview(props: Props) {
  const { initial } = props
  const { data, encodeDataAttribute } = useQuery<HomePagePayload | null>(
    homePageQuery,
    {},
    { initial }
  )

  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Home document to see the preview!
      </div>
    )
  }

  return <HomePage data={data} encodeDataAttribute={encodeDataAttribute} />
}
