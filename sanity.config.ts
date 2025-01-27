'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from '@/sanity/env'
import {schema} from '@/sanity/schemaTypes'
import {structure} from '@/sanity/structure'



import policy from '@/sanity/schemas/documents/policy'
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

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
