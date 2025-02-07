import { type SchemaTypeDefinition } from "sanity";

// Objects
import card from "@/sanity/schemaTypes/objects/card";
import fuelFeature from "@/sanity/schemaTypes/objects/fuelFeature";
import gallery from "@/sanity/schemaTypes/objects/gallery";
import linktreeLink from "@/sanity/schemaTypes/objects/linktreeLink";
import location from "@/sanity/schemaTypes/objects/location";
import partner from "@/sanity/schemaTypes/objects/partner";
import portableText from "@/sanity/schemaTypes/objects/portableText";
import section from "@/sanity/schemaTypes/objects/section";
import stat from "@/sanity/schemaTypes/objects/stat";
import testimonial from "@/sanity/schemaTypes/objects/testimonial";
import tripFeature from "@/sanity/schemaTypes/objects/tripFeature";
import tripSubfeature from "@/sanity/schemaTypes/objects/tripSubfeature";
import contactItem from "@/sanity/schemaTypes/objects/contactItem";
import destination from "@/sanity/schemaTypes/objects/destination";
// Documents
import plane from "@/sanity/schemaTypes/documents/plane";
import planeCategory from "@/sanity/schemaTypes/documents/planeCategory";
import policy from "@/sanity/schemaTypes/documents/policy";
import planeManufacturer from "@/sanity/schemaTypes/documents/planeManufacturer";
import emptyLeg from "@/sanity/schemaTypes/documents/emptyLeg";
// Singletons
import about from "@/sanity/schemaTypes/singletons/about";
import contact from "@/sanity/schemaTypes/singletons/contact";
import fuelService from "@/sanity/schemaTypes/singletons/fuelService";
import home from "@/sanity/schemaTypes/singletons/home";
import inquiry from "@/sanity/schemaTypes/singletons/inquiry";
import linktree from "@/sanity/schemaTypes/singletons/linktree";
import newsletter from "@/sanity/schemaTypes/singletons/newsletter";
import services from "@/sanity/schemaTypes/singletons/services";
import siteSettings from "@/sanity/schemaTypes/singletons/siteSettings";
import tripService from "@/sanity/schemaTypes/singletons/tripService";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    home,
    about,
    contact,
    newsletter,
    services,
    fuelService,
    tripService,
    inquiry,
    linktree,
    policy,
    gallery,
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
    linktreeLink,
    plane,
    planeCategory,
    planeManufacturer,
    emptyLeg,
    destination,
    siteSettings,
  ],
};
