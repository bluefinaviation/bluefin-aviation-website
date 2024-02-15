import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { presentationTool } from 'sanity/presentation'
import { structureTool } from 'sanity/structure'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { media } from 'sanity-plugin-media'

import { apiVersion, dataset, projectId, studioUrl } from '@/sanity/lib/api'
import { locate } from '@/sanity/plugins/locate'
import { pageStructure, singletonPlugin } from '@/sanity/plugins/settings'
// // import page from "@/sanity/schemas/documents/page"
import policy from '@/sanity/schemas/documents/policy'
// // import project from "@/sanity/schemas/documents/project"
import card from '@/sanity/schemas/objects/card'
import contactItem from '@/sanity/schemas/objects/contactItem'
import duration from '@/sanity/schemas/objects/duration'
import fuelFeature from '@/sanity/schemas/objects/fuelFeature'
import gallery from '@/sanity/schemas/objects/gallery'
import linktreeLink from '@/sanity/schemas/objects/linktreeLink'
import location from '@/sanity/schemas/objects/location'
import milestone from '@/sanity/schemas/objects/milestone'
import partner from '@/sanity/schemas/objects/partner'
import portableText from '@/sanity/schemas/objects/portableText'
import section from '@/sanity/schemas/objects/section'
import stat from '@/sanity/schemas/objects/stat'
import testimonial from '@/sanity/schemas/objects/testimonial'
import tripFeature from '@/sanity/schemas/objects/tripFeature'
import tripSubfeature from '@/sanity/schemas/objects/tripSubfeature'
import about from '@/sanity/schemas/singletons/about'
import contact from '@/sanity/schemas/singletons/contact'
import fuelService from '@/sanity/schemas/singletons/fuelService'
import home from '@/sanity/schemas/singletons/home'
import inquiry from '@/sanity/schemas/singletons/inquiry'
import linktree from '@/sanity/schemas/singletons/linktree'
import newsletter from '@/sanity/schemas/singletons/newsletter'
import services from '@/sanity/schemas/singletons/services'
// // import settings from "@/sanity/schemas/singletons/settings"
import tripService from '@/sanity/schemas/singletons/tripService'

const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Bluefin Aviation'

export default defineConfig({
  basePath: studioUrl,
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  schema: {
    types: [
      // Singletons
      home,
      about,
      contact,
      newsletter,
      services,
      fuelService,
      tripService,
      // // settings,
      inquiry,
      linktree,
      // Documents
      // // page,
      // // project,
      policy,
      // Objects
      milestone,
      gallery,
      duration,
      portableText,
      section,
      stat,
      contactItem,
      location,
      partner,
      testimonial,
      card,
      fuelFeature,
      tripFeature,
      tripSubfeature,
      linktreeLink
    ]
  },
  plugins: [
    structureTool({
      structure: pageStructure([
        home,
        about,
        contact,
        newsletter,
        services,
        inquiry,
        fuelService,
        tripService,
        linktree
      ])
    }),
    presentationTool({
      locate,
      previewUrl: {
        draftMode: {
          enable: '/api/draft'
        }
      }
    }),
    singletonPlugin([
      home.name,
      about.name,
      contact.name,
      newsletter.name,
      services.name,
      inquiry.name,
      fuelService.name,
      tripService.name,
      linktree.name
    ]),
    unsplashImageAsset(),
    media(),
    visionTool({ defaultApiVersion: apiVersion })
  ]
})
