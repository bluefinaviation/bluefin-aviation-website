import { type SchemaTypeDefinition } from "sanity";

// Objects
import { cardType } from "@/sanity/schemaTypes/objects/cardType";
import { fuelFeatureType } from "@/sanity/schemaTypes/objects/fuelFeatureType";
import { galleryType } from "@/sanity/schemaTypes/objects/galleryType";
import { linktreeLinkType } from "@/sanity/schemaTypes/objects/linktreeLinkType";
import { locationType } from "@/sanity/schemaTypes/objects/locationType";
import { partnerType } from "@/sanity/schemaTypes/objects/partnerType";
import { portableTextType } from "@/sanity/schemaTypes/objects/portableTextType";
import { sectionType } from "@/sanity/schemaTypes/objects/sectionType";
import { statType } from "@/sanity/schemaTypes/objects/statType";
import { testimonialType } from "@/sanity/schemaTypes/objects/testimonialType";
import { tripFeatureType } from "@/sanity/schemaTypes/objects/tripFeatureType";
import { tripSubfeatureType } from "@/sanity/schemaTypes/objects/tripSubfeatureType";
import { contactItemType } from "@/sanity/schemaTypes/objects/contactItemType";
import { destinationType } from "@/sanity/schemaTypes/objects/destinationType";
// Documents
import { planeType } from "@/sanity/schemaTypes/documents/planeType";
import { planeCategoryType } from "@/sanity/schemaTypes/documents/planeCategoryType";
import { policyType } from "@/sanity/schemaTypes/documents/policyType";
import { planeManufacturerType } from "@/sanity/schemaTypes/documents/planeManufacturerType";
import { emptyLegType } from "@/sanity/schemaTypes/documents/emptyLegType";
// Singletons
import { aboutPageType } from "@/sanity/schemaTypes/singletons/aboutPageType";
import { contactPageType } from "@/sanity/schemaTypes/singletons/contactPageType";
import { fuelServicePageType } from "@/sanity/schemaTypes/singletons/fuelServicePageType";
import { homePageType } from "@/sanity/schemaTypes/singletons/homePageType";
import { inquiryPageType } from "@/sanity/schemaTypes/singletons/inquiryPageType";
import { linktreePageType } from "@/sanity/schemaTypes/singletons/linktreePageType";
import { newsletterPageType } from "@/sanity/schemaTypes/singletons/newsletterPageType";
import { servicesPageType } from "@/sanity/schemaTypes/singletons/servicesPageType";
import { tripServicePageType } from "@/sanity/schemaTypes/singletons/tripServicePageType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePageType,
    aboutPageType,
    contactPageType,
    newsletterPageType,
    servicesPageType,
    fuelServicePageType,
    tripServicePageType,
    inquiryPageType,
    linktreePageType,
    policyType,
    galleryType,
    portableTextType,
    sectionType,
    statType,
    contactItemType,
    locationType,
    partnerType,
    testimonialType,
    cardType,
    fuelFeatureType,
    tripFeatureType,
    tripSubfeatureType,
    linktreeLinkType,
    planeType,
    planeCategoryType,
    planeManufacturerType,
    emptyLegType,
    destinationType,
  ],
};
