import { type SchemaTypeDefinition } from 'sanity'

import { pageBuilderType } from '@/sanity/schemaTypes/pageBuilderType'

// Blocks
import { faqsType } from '@/sanity/schemaTypes/blocks/faqsType'
import { featuresType } from '@/sanity/schemaTypes/blocks/featuresType'
import { heroType } from '@/sanity/schemaTypes/blocks/heroType'
import { splitImageType } from '@/sanity/schemaTypes/blocks/splitImageType'
import { statType } from '@/sanity/schemaTypes/blocks/statType'
import { infoCarouselType } from '@/sanity/schemaTypes/blocks/infoCarouselType'

// Objects
import { cardType } from '@/sanity/schemaTypes/objects/cardType'
import { fuelFeatureType } from '@/sanity/schemaTypes/objects/fuelFeatureType'
import { galleryType } from '@/sanity/schemaTypes/objects/galleryType'
import { linktreeLinkType } from '@/sanity/schemaTypes/objects/linktreeLinkType'
import { locationType } from '@/sanity/schemaTypes/objects/locationType'
import { flightType } from '@/sanity/schemaTypes/objects/flightType'
import { partnerType } from '@/sanity/schemaTypes/objects/partnerType'
import { portableTextType } from '@/sanity/schemaTypes/objects/portableTextType'
import { sectionType } from '@/sanity/schemaTypes/objects/sectionType'
import { tripFeatureType } from '@/sanity/schemaTypes/objects/tripFeatureType'
import { tripSubfeatureType } from '@/sanity/schemaTypes/objects/tripSubfeatureType'
import { contactItemType } from '@/sanity/schemaTypes/objects/contactItemType'
import { blockContentType } from '@/sanity/schemaTypes/objects/blockContentType'
import { timelineEventType } from '@/sanity/schemaTypes/objects/timelineEventType'

// Documents
import { planeType } from '@/sanity/schemaTypes/documents/planeType'
import { planeCategoryType } from '@/sanity/schemaTypes/documents/planeCategoryType'
import { policyType } from '@/sanity/schemaTypes/documents/policyType'
import { planeManufacturerType } from '@/sanity/schemaTypes/documents/planeManufacturerType'
import { emptyLegType } from '@/sanity/schemaTypes/documents/emptyLegType'
import { serviceType } from '@/sanity/schemaTypes/documents/serviceType'
import { faqType } from '@/sanity/schemaTypes/documents/faqType'
import { testimonialType } from '@/sanity/schemaTypes/documents/testimonialType'
import { postType } from '@/sanity/schemaTypes/documents/postType'
import { authorType } from '@/sanity/schemaTypes/documents/authorType'
import { categoryType } from '@/sanity/schemaTypes/documents/categoryType'

// Singletons
import { companyDetailsType } from '@/sanity/schemaTypes/singletons/companyDetailsType'
import { aboutPageType } from '@/sanity/schemaTypes/singletons/aboutPageType'
import { contactPageType } from '@/sanity/schemaTypes/singletons/contactPageType'
import { fuelServicePageType } from '@/sanity/schemaTypes/singletons/fuelServicePageType'
import { homePageType } from '@/sanity/schemaTypes/singletons/homePageType'
import { inquiryPageType } from '@/sanity/schemaTypes/singletons/inquiryPageType'
import { linktreePageType } from '@/sanity/schemaTypes/singletons/linktreePageType'
import { newsletterPageType } from '@/sanity/schemaTypes/singletons/newsletterPageType'
import { tripServicePageType } from '@/sanity/schemaTypes/singletons/tripServicePageType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Blocks
    featuresType,
    heroType,
    splitImageType,
    statType,
    faqsType,
    infoCarouselType,
    // Objects
    galleryType,
    portableTextType,
    sectionType,
    contactItemType,
    locationType,
    partnerType,
    cardType,
    fuelFeatureType,
    tripFeatureType,
    tripSubfeatureType,
    linktreeLinkType,
    blockContentType,
    timelineEventType,
    flightType,
    // Documents
    planeType,
    planeCategoryType,
    planeManufacturerType,
    emptyLegType,
    faqType,
    pageBuilderType,
    serviceType,
    testimonialType,
    postType,
    authorType,
    categoryType,
    // Singletons
    homePageType,
    aboutPageType,
    contactPageType,
    newsletterPageType,
    fuelServicePageType,
    tripServicePageType,
    inquiryPageType,
    linktreePageType,
    policyType,
    companyDetailsType
  ]
}
