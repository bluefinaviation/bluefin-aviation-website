import type { PortableTextBlock } from "@portabletext/types"
import type { Image } from "sanity"

import { FuelFeature } from "@/components/services/fuel-feature"

// // export interface MenuItem {
// //   _type: string
// //   slug?: string
// //   title?: string
// // }

// // export interface MilestoneItem {
// //   description?: string
// //   duration?: {
// //     start?: string
// //     end?: string
// //   }
// //   image?: Image
// //   tags?: string[]
// //   title?: string
// // }

export interface ShowcaseProject {
  _type: string
  coverImage?: Image
  overview?: PortableTextBlock[]
  slug?: string
  tags?: string[]
  title?: string
}

// types

export interface Section {
  _type: string
  hasSummary: boolean
  heading: string
  summary: PortableTextBlock[]
  hasImage?: boolean
  image?: Image
  hasTagline?: boolean
  tagline?: string
}

export interface Partner {
  _type: string
  name: string
  logo: Image
  _key: string
}

export interface Card {
  tagline: string
  title: string
  image: Image
  _type: string
}

export interface Testimonial {
  quote: string
  author: {
    role: string
    name: string
    location: string
  }
  _type: string
  _key: string
}

export interface Policy {
  id: string
  title: string
  slug: string
  content: PortableTextBlock[]
}

export interface Stat {
  _type: string
  label: string
  _key: string
  value: string
}

export interface Contact {
  url: string
  cta: string
  _type: string
  label: string
  _key: string
}

export interface Location {
  isHq: boolean
  address: string
  city: string
  _type: string
  coordinates: {
    _type: string
    lat: number
    lng: number
  }
  _key: string
  country: Image
}

export interface SubFeature {
  _type: string
  _key: string
  subfeature: string
}

export interface Feature {
  id: string
  subfeatures: SubFeature[]
  feature: string
  _type: string
  _key: string
}

export interface FuelFeature {
  id: string
  icon: Image
  _key: string
  airports: number
  continent: string
  _type: string
}

export interface TripFeature {
  id: string
  icon: Image
  _key: string
  airports: number
  continent: string
  _type: string
}

export interface LinktreeLink {
  label: string
  _key: string
  _type: string
  linkUrl: string
  description: string
}

// Page payloads

// // export interface HomePagePayload {
// //   footer?: PortableTextBlock[]
// //   overview?: PortableTextBlock[]
// //   showcaseProjects?: ShowcaseProject[]
// //   title?: string
// // }
export interface HomePagePayload {
  newsletterSection: {
    section: Section
  }
  heroSection: {
    section: Section
    video: string
  }
  servicesSection: {
    section: Section
    tripService: {
      card: Card
    }
    fuelService: {
      card: Card
    }
  }
  testimonialsSection: {
    testimonials: Testimonial[]
    section: Section
  }
  partnersSection: {
    section: Section
    partners: Partner[]
  }
  contactSection: Section
}

export interface AboutPagePayload {
  storySection: {
    bio: PortableTextBlock
    section: Section
  }
  teamSection: {
    section: Section
  }
  statsSection: {
    stats: Stat[]
  }
}

export interface ContactPagePayload {
  contactSection: {
    section: Section
    contacts: Contact[]
  }
  locationSection: {
    locations: Location[]
    section: Section
  }
}

export interface FooterPayload {
  newsletter: {
    section: Section
  }
  policies: Policy[]
}

export interface ServicesPagePayload {
  title: string
  heroSection: {
    section: Section
  }
  tripService: {
    section: Section
    features: Feature[]
  }
  fuelService: {
    card: Card
  }
}

export interface TripServicePagePayload {
  heroSection: {
    section: Section
  }
  featuresSection: {
    section: Section
    features: Feature[]
  }
  gallerySection: {
    section: Section
    gallery: Image[]
  }
}

export interface FuelServicePagePayload {
  heroSection: {
    section: Section
  }
  featuresSection: {
    section: Section
    features: Feature[]
  }
  gallerySection: {
    section: Section
    gallery: Image[]
  }
}

export interface LinktreePagePayload {
  heroSection: {
    section: Section
  }
  links: LinktreeLink[]
}

export interface InquiryPagePayload {
  formSection: {
    section: Section
  }
}

export interface NewsletterPagePayload {
  formSection: {
    section: Section
  }
}

export interface PolicyPagePayload {
  title: string
  content: PortableTextBlock[]
  updatedAt: string
}

// // export interface PagePayload {
// //   body?: PortableTextBlock[]
// //   name?: string
// //   overview?: PortableTextBlock[]
// //   title?: string
// // }

// // export interface ProjectPayload {
// //   client?: string
// //   coverImage?: Image
// //   description?: PortableTextBlock[]
// //   duration?: {
// //     start?: string
// //     end?: string
// //   }
// //   overview?: PortableTextBlock[]
// //   site?: string
// //   slug: string
// //   tags?: string[]
// //   title?: string
// // }

// // export interface SettingsPayload {
// //   footer?: PortableTextBlock[]
// //   menuItems?: MenuItem[]
// //   ogImage?: Image
// // }
