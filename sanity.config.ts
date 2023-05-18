/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import { media } from 'sanity-plugin-media';

import {
  apiVersion,
  dataset,
  previewSecretId,
  projectId,
} from '@/lib/sanity.api';
import { previewDocumentNode } from '@/plugins/previewPane';
import { productionUrl } from '@/plugins/productionUrl';
import { pageStructure, singletonPlugin } from '@/plugins/settings';
import page from '@/schemas/documents/page';
import project from '@/schemas/documents/project';
import card from '@/schemas/objects/card';
import contactItem from '@/schemas/objects/contactItem';
import duration from '@/schemas/objects/duration';
import fuelFeature from '@/schemas/objects/fuelFeature';
import gallery from '@/schemas/objects/gallery';
import location from '@/schemas/objects/location';
import milestone from '@/schemas/objects/milestone';
import partner from '@/schemas/objects/partner';
import portableText from '@/schemas/objects/portableText';
import section from '@/schemas/objects/section';
import stat from '@/schemas/objects/stat';
import testimonial from '@/schemas/objects/testimonial';
import timeline from '@/schemas/objects/timeline';
import tripFeature from '@/schemas/objects/tripFeature';
import tripSubfeature from '@/schemas/objects/tripSubfeature';
import about from '@/schemas/singletons/about';
import contact from '@/schemas/singletons/contact';
import fuelService from '@/schemas/singletons/fuelService';
import home from '@/schemas/singletons/home';
import services from '@/schemas/singletons/services';
import settings from '@/schemas/singletons/settings';
import tripService from '@/schemas/singletons/tripService';

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Bluefin Aviation';

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [
  home.name,
  about.name,
  contact.name,
  page.name,
  project.name,
  services.name,
  fuelService.name,
  tripService.name,
];

export default defineConfig({
  basePath: '/studio',
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      // Singletons
      home,
      about,
      contact,
      services,
      fuelService,
      tripService,
      settings,
      // Documents
      page,
      project,
      // Objects
      milestone,
      gallery,
      duration,
      portableText,
      section,
      stat,
      timeline,
      contactItem,
      location,
      partner,
      testimonial,
      card,
      fuelFeature,
      tripFeature,
      tripSubfeature,
    ],
  },
  plugins: [
    deskTool({
      structure: pageStructure([
        home,
        about,
        contact,
        settings,
        services,
        fuelService,
        tripService,
      ]),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([
      home.name,
      about.name,
      contact.name,
      settings.name,
      services.name,
      fuelService.name,
      tripService.name,
    ]),
    // Add the "Open preview" action
    productionUrl({
      apiVersion,
      previewSecretId,
      types: PREVIEWABLE_DOCUMENT_TYPES,
    }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    media(),

    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
