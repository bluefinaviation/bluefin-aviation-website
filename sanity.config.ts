import { visionTool } from '@sanity/vision';
import { apiVersion, dataset, projectId } from 'lib/sanity.api';
import { listItem, singletonPlugin } from 'plugins/studioStructure';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import { media } from 'sanity-plugin-media';
import cardType from 'schemas/objects/card';
import contactType from 'schemas/objects/contact';
import fuelFeatureType from 'schemas/objects/fuelFeature';
import galleryType from 'schemas/objects/gallery';
import imageCustomType from 'schemas/objects/imageCustom';
import locationType from 'schemas/objects/location';
import partnerType from 'schemas/objects/partner';
import portableTextType from 'schemas/objects/portableText';
import sectionType from 'schemas/objects/section';
import statType from 'schemas/objects/stat';
import testimonialType from 'schemas/objects/testimonial';
import tripFeatureType from 'schemas/objects/tripFeature';
import tripSubfeatureType from 'schemas/objects/tripSubfeature';
import aboutPageType from 'schemas/pages/aboutPage';
import contactPageType from 'schemas/pages/contactPage';
import fuelServicePageType from 'schemas/pages/fuelServicePage';
import homePageType from 'schemas/pages/homePage';
import servicesPageType from 'schemas/pages/servicesPage';
import tripServicePageType from 'schemas/pages/tripServicePage';
import settingsType from 'schemas/settings';

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Next.js Blog with Sanity.io';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      portableTextType,
      settingsType,
      homePageType,
      galleryType,
      imageCustomType,
      servicesPageType,
      aboutPageType,
      contactPageType,
      fuelServicePageType,
      tripServicePageType,
      sectionType,
      partnerType,
      contactType,
      testimonialType,
      locationType,
      cardType,
      statType,
      fuelFeatureType,
      tripFeatureType,
      tripSubfeatureType,
    ],
  },
  plugins: [
    deskTool({
      structure: (S) => {
        const settingsListItem = listItem(S, settingsType);
        const homePageListItem = listItem(S, homePageType);
        const aboutPageListItem = listItem(S, aboutPageType);
        const servicesPageListItem = listItem(S, servicesPageType);
        const tripServicePageListItem = listItem(S, tripServicePageType);
        const fuelServicePageListItem = listItem(S, fuelServicePageType);
        const contactPageListItem = listItem(S, contactPageType);

        const defaultListItems = S.documentTypeListItems().filter(
          (listItem) =>
            listItem.getId() !== settingsType.name &&
            listItem.getId() !== homePageType.name &&
            listItem.getId() !== aboutPageType.name &&
            listItem.getId() !== servicesPageType.name &&
            listItem.getId() !== tripServicePageType.name &&
            listItem.getId() !== fuelServicePageType.name &&
            listItem.getId() !== contactPageType.name
        );

        return S.list()
          .title('Content')
          .items([
            settingsListItem,
            S.divider(),
            homePageListItem,
            aboutPageListItem,
            servicesPageListItem,
            tripServicePageListItem,
            fuelServicePageListItem,
            contactPageListItem,
            S.divider(),
            ...defaultListItems,
          ]);
      },
    }),
    singletonPlugin({ type: settingsType.name }),
    singletonPlugin({ type: homePageType.name }),
    singletonPlugin({ type: aboutPageType.name }),
    singletonPlugin({ type: servicesPageType.name }),
    singletonPlugin({ type: tripServicePageType.name }),
    singletonPlugin({ type: fuelServicePageType.name }),
    singletonPlugin({ type: contactPageType.name }),
    unsplashImageAsset(),
    media(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
