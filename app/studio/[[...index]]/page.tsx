import Studio from "@/app/studio/[[...index]]/Studio"

export const dynamic = 'force-static'

export { metadata } from "next-sanity/studio/metadata"

export default function StudioPage() {
  return <Studio />
}
