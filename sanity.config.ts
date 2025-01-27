import { visionTool } from '@sanity/vision'
import { defineConfig, PluginOptions } from 'sanity'
import {
  defineDocuments,
  defineLocations,
  type DocumentLocation,
  presentationTool
} from 'sanity/presentation'
import { structureTool } from 'sanity/structure'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

import { apiVersion, dataset, projectId, studioUrl } from '@/sanity/lib/api'
import { assistWithPresets } from '@/sanity/plugins/assist'
import { pageStructure, singletonPlugin } from '@/sanity/plugins/settings'

import policy from '@/sanity/schemas/documents/policy'
import settings from '@/sanity/schemas/singletons/settings'
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
import tripService from '@/sanity/schemas/singletons/tripService'

import { resolveHref } from '@/sanity/lib/utils'

const homeLocation = {
  title: 'Home',
  href: '/'
} satisfies DocumentLocation

export default defineConfig({
  basePath: studioUrl,
  projectId,
  dataset,
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
      inquiry,
      linktree,
      // Documents
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
    presentationTool({
      resolve: {
        // // mainDocuments: defineDocuments([
        // //   {
        // //     route: '/posts/:slug',
        // //     filter: `_type == "post" && slug.current == $slug`
        // //   }
        // // ]),
        // // locations: {
        // //   settings: defineLocations({
        // //     locations: [homeLocation],
        // //     message: 'This document is used on all pages',
        // //     tone: 'caution'
        // //   }),
        // //   post: defineLocations({
        // //     select: {
        // //       title: 'title',
        // //       slug: 'slug.current'
        // //     },
        // //     resolve: doc => ({
        // //       locations: [
        // //         {
        // //           title: doc?.title || 'Untitled',
        // //           href: resolveHref('post', doc?.slug)!
        // //         },
        // //         homeLocation
        // //       ]
        // //     })
        // //   })
        // // }
      },
      previewUrl: { previewMode: { enable: '/api/draft-mode/enable' } }
    }),
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
        linktree,
        settings
      ])
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    // // singletonPlugin([
    // //   home.name,
    // //   about.name,
    // //   contact.name,
    // //   newsletter.name,
    // //   services.name,
    // //   inquiry.name,
    // //   fuelService.name,
    // //   tripService.name,
    // //   linktree.name,
    // //   settings.name
    // // ]),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Sets up AI Assist with preset prompts
    // https://www.sanity.io/docs/ai-assist
    // // assistWithPresets(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    process.env.NODE_ENV === 'development' &&
      visionTool({ defaultApiVersion: apiVersion })
  ].filter(Boolean) as PluginOptions[]
})
