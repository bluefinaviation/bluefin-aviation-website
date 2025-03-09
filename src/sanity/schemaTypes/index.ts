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
import { cardType } from '@/sanity/schemaTypes/blocks/cardType'
import { fuelFeatureType } from '@/sanity/schemaTypes/objects/fuelFeatureType'
import { locationType } from '@/sanity/schemaTypes/objects/locationType'
import { flightType } from '@/sanity/schemaTypes/objects/flightType'
import { partnerType } from '@/sanity/schemaTypes/objects/partnerType'
import { portableTextType } from '@/sanity/schemaTypes/objects/portableTextType'
import { sectionType } from '@/sanity/schemaTypes/blocks/sectionType'
import { tripFeatureType } from '@/sanity/schemaTypes/objects/tripFeatureType'
import { tripSubfeatureType } from '@/sanity/schemaTypes/objects/tripSubfeatureType'
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
import { articleType } from '@/sanity/schemaTypes/documents/articleType'
import { authorType } from '@/sanity/schemaTypes/documents/authorType'
import { categoryType } from '@/sanity/schemaTypes/documents/categoryType'

// Singletons
import { companyDetailsType } from '@/sanity/schemaTypes/singletons/companyDetailsType'

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
    portableTextType,
    sectionType,
    locationType,
    partnerType,
    cardType,
    fuelFeatureType,
    tripFeatureType,
    tripSubfeatureType,
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
    articleType,
    authorType,
    categoryType,
    policyType,
    // Singletons
    companyDetailsType
  ]
}
