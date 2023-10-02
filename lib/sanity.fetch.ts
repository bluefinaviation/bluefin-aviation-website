import "server-only"

import { draftMode } from "next/headers"
import type {
  AboutPagePayload,
  ContactPagePayload,
  FooterPayload,
  FuelServicePagePayload,
  HomePagePayload,
  InquiryPagePayload,
  LinktreePagePayload,
  NewsletterPagePayload,
  PolicyPagePayload,
  ServicesPagePayload,
  TripServicePagePayload,
} from "@/types"
import type { QueryParams } from "@sanity/client"

import { revalidateSecret } from "@/lib/sanity.api"
import { client } from "@/lib/sanity.client"
import {
  aboutPageQuery,
  contactPageQuery,
  footerQuery,
  fuelServicePageQuery,
  homePageQuery,
  inquiryPageQuery,
  // // homePageTitleQuery,
  linktreePageQuery,
  newsletterPageQuery,
  policyBySlugQuery,
  // // pagePaths,
  // // pagesBySlugQuery,
  // // projectBySlugQuery,
  // // projectPaths,
  servicesPageQuery,
  // // settingsQuery,
  tripServicePageQuery,
} from "@/lib/sanity.queries"

export const token = process.env.SANITY_API_READ_TOKEN

const DEFAULT_PARAMS = {} as QueryParams
const DEFAULT_TAGS = [] as string[]

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}: {
  query: string
  params?: QueryParams
  tags: string[]
}): Promise<QueryResponse> {
  const isDraftMode = draftMode().isEnabled
  if (isDraftMode && !token) {
    throw new Error(
      "The `SANITY_API_READ_TOKEN` environment variable is required."
    )
  }

  // @TODO this won't be necessary after https://github.com/sanity-io/client/pull/299 lands
  const sanityClient =
    client.config().useCdn && isDraftMode
      ? client.withConfig({ useCdn: false })
      : client
  return sanityClient.fetch<QueryResponse>(query, params, {
    // We only cache if there's a revalidation webhook setup
    cache: revalidateSecret ? "force-cache" : "no-store",
    ...(isDraftMode && {
      cache: undefined,
      token: token,
      perspective: "previewDrafts",
    }),
    next: {
      ...(isDraftMode && { revalidate: 30 }),
      tags,
    },
  })
}

export function getHomePage() {
  return sanityFetch<HomePagePayload | null>({
    query: homePageQuery,
    tags: ["home", "services"],
  })
}

export function getFooter() {
  return sanityFetch<FooterPayload | null>({
    query: footerQuery,
    tags: ["policies", "newsletter", "contact"],
  })
}

export function getServicesPage() {
  return sanityFetch<ServicesPagePayload | null>({
    query: servicesPageQuery,
    tags: ["services", "fuel", "trip"],
  })
}

export function getTripServicePage() {
  return sanityFetch<TripServicePagePayload | null>({
    query: tripServicePageQuery,
    tags: ["services", "trip"],
  })
}

export function getFuelServicePage() {
  return sanityFetch<FuelServicePagePayload | null>({
    query: fuelServicePageQuery,
    tags: ["services", "fuel"],
  })
}

export function getAboutPage() {
  return sanityFetch<AboutPagePayload | null>({
    query: aboutPageQuery,
    tags: ["about"],
  })
}

export function getContactPage() {
  return sanityFetch<ContactPagePayload | null>({
    query: contactPageQuery,
    tags: ["contact"],
  })
}

export function getLinktreePage() {
  return sanityFetch<LinktreePagePayload | null>({
    query: linktreePageQuery,
    tags: ["links"],
  })
}

export function getInquiryPage() {
  return sanityFetch<InquiryPagePayload | null>({
    query: inquiryPageQuery,
    tags: ["inquiry"],
  })
}

export function getNewsletterPage() {
  return sanityFetch<NewsletterPagePayload | null>({
    query: newsletterPageQuery,
    tags: ["newsletter"],
  })
}

export function getPolicyBySlug({ slug }: { slug: string }) {
  return sanityFetch<PolicyPagePayload | null>({
    query: policyBySlugQuery,
    params: { slug },
    tags: [`policy:${slug}`],
  })
}

// // export function getSettings() {
// //   return sanityFetch<SettingsPayload>({
// //     query: settingsQuery,
// //     tags: ["settings", "home", "page", "project"],
// //   })
// // }

// // export function getPageBySlug(slug: string) {
// //   return sanityFetch<PagePayload | null>({
// //     query: pagesBySlugQuery,
// //     params: { slug },
// //     tags: [`page:${slug}`],
// //   })
// // }

// // export function getProjectBySlug(slug: string) {
// //   return sanityFetch<ProjectPayload | null>({
// //     query: projectBySlugQuery,
// //     params: { slug },
// //     tags: [`project:${slug}`],
// //   })
// // }

// // export function getHomePageTitle() {
// //   return sanityFetch<string | null>({
// //     query: homePageTitleQuery,
// //     tags: ["home"],
// //   })
// // }

// // export function getPagesPaths() {
// //   return client.fetch<string[]>(
// //     pagePaths,
// //     {},
// //     { token, perspective: "published" }
// //   )
// // }
// // export function getProjectsPaths() {
// //   return client.fetch<string[]>(
// //     projectPaths,
// //     {},
// //     { token, perspective: "published" }
// //   )
// // }
