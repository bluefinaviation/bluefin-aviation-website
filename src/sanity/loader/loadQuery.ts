import 'server-only'

import * as queryStore from '@sanity/react-loader'
import { draftMode } from 'next/headers'

import { client } from '@/sanity/lib/client'
import {
  aboutPageQuery,
  contactPageQuery,
  footerQuery,
  fuelServicePageQuery,
  homePageQuery,
  homePageTitleQuery,
  inquiryPageQuery,
  linktreePageQuery,
  newsletterPageQuery,
  pagePaths,
  pagesBySlugQuery,
  policyBySlugQuery,
  projectBySlugQuery,
  projectPaths,
  servicesPageQuery,
  settingsQuery,
  tripServicePageQuery
} from '@/sanity/lib/queries'
import { token } from '@/sanity/lib/token'
import {
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
  SettingsPayload,
  TripServicePagePayload
} from '@/types'

const serverClient = client.withConfig({
  token,
  stega: {
    // Enable stega if it's a Vercel preview deployment, as the Vercel Toolbar has controls that shows overlays
    enabled: process.env.VERCEL_ENV === 'preview'
  }
})

/**
 * Sets the server client for the query store, doing it here ensures that all data fetching in production
 * happens on the server and not on the client.
 * Live mode in `sanity/presentation` still works, as it uses the `useLiveMode` hook to update `useQuery` instances with
 * live draft content using `postMessage`.
 */
queryStore.setServerClient(serverClient)

const usingCdn = serverClient.config().useCdn
// Automatically handle draft mode
export const loadQuery = ((query, params = {}, options = {}) => {
  const {
    perspective = draftMode().isEnabled ? 'previewDrafts' : 'published'
  } = options
  // Don't cache by default
  let revalidate: NextFetchRequestConfig['revalidate'] = 0
  // If `next.tags` is set, and we're not using the CDN, then it's safe to cache
  if (!usingCdn && Array.isArray(options.next?.tags)) {
    revalidate = false
  } else if (usingCdn) {
    revalidate = 60
  }
  return queryStore.loadQuery(query, params, {
    ...options,
    next: {
      revalidate,
      ...(options.next || {})
    },
    perspective
    // @TODO add support in `@sanity/client/stega` for the below
    // stega: {enabled: draftMode().isEnabled}
  })
}) satisfies typeof queryStore.loadQuery

export function loadHomePage() {
  return loadQuery<HomePagePayload | null>(
    homePageQuery,
    {},
    {
      next: {
        tags: ['home', 'services']
      }
    }
  )
}

export function loadFooter() {
  return loadQuery<FooterPayload | null>(
    footerQuery,
    {},
    {
      next: {
        tags: ['policies', 'newsletter', 'contact']
      }
    }
  )
}

export function loadServicesPage() {
  return loadQuery<ServicesPagePayload | null>(
    servicesPageQuery,
    {},
    {
      next: {
        tags: ['services', 'fuel', 'trip']
      }
    }
  )
}

export function loadTripServicePage() {
  return loadQuery<TripServicePagePayload | null>(
    tripServicePageQuery,
    {},
    {
      next: {
        tags: ['services', 'trip']
      }
    }
  )
}

export function loadFuelServicePage() {
  return loadQuery<FuelServicePagePayload | null>(
    fuelServicePageQuery,
    {},
    {
      next: {
        tags: ['services', 'fuel']
      }
    }
  )
}

export function loadAboutPage() {
  return loadQuery<AboutPagePayload | null>(
    aboutPageQuery,
    {},
    {
      next: {
        tags: ['about']
      }
    }
  )
}

export function loadContactPage() {
  return loadQuery<ContactPagePayload | null>(
    contactPageQuery,
    {},
    {
      next: {
        tags: ['contact']
      }
    }
  )
}

export function loadLinktreePage() {
  return loadQuery<LinktreePagePayload | null>(
    linktreePageQuery,
    {},
    {
      next: {
        tags: ['links']
      }
    }
  )
}

export function loadInquiryPage() {
  return loadQuery<InquiryPagePayload | null>(
    inquiryPageQuery,
    {},
    {
      next: {
        tags: ['inquiry']
      }
    }
  )
}

export function loadNewsletterPage() {
  return loadQuery<NewsletterPagePayload | null>(
    newsletterPageQuery,
    {},
    {
      next: {
        tags: ['newsletter']
      }
    }
  )
}

export function loadPolicyBySlug(slug: string) {
  return loadQuery<PolicyPagePayload | null>(
    policyBySlugQuery,
    { slug },
    {
      next: {
        tags: [`policy:${slug}`]
      }
    }
  )
}

export function loadSettings() {
  return loadQuery<SettingsPayload>(
    settingsQuery,
    {},
    { next: { tags: ['settings', 'home', 'page', 'project'] } }
  )
}
