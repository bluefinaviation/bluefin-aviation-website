import createImageUrlBuilder from "@sanity/image-url"
import type { Image } from "sanity"

import { dataset, projectId } from "@/sanity/lib/api"

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
})

export const urlForImage = (source: Image | undefined) => {
  // Ensure that source image contains a valid reference
  if (!source?.asset?._ref) {
    return undefined
  }

  return imageBuilder?.image(source).auto("format").fit("max")
}

export function urlForOpenGraphImage(image: Image | undefined) {
  return urlForImage(image)?.width(1200).height(627).fit("crop").url()
}

export function resolveHref(
  documentType?: string,
  slug?: string
): string | undefined {
  switch (documentType) {
    case "home":
      return "/"
    case "about":
      return "/about"
    case "contact":
      return "/contact"
    case "newsletter":
      return "/newsletter"
    case "services":
      return "/services"
    case "inquiry":
      return "/inquiry"
    case "fuelService":
      return "/fuel-service"
    case "tripService":
      return "/trip-service"
    case "linktree":
      return "/linktree"
    default:
      console.warn("Invalid document type:", documentType)
      return undefined
  }
}
