import { type SchemaTypeDefinition } from "sanity";

// Objects
import card from "@/sanity/schemas/objects/card";
import fuelFeature from "@/sanity/schemas/objects/fuelFeature";
import gallery from "@/sanity/schemas/objects/gallery";
import linktreeLink from "@/sanity/schemas/objects/linktreeLink";
import location from "@/sanity/schemas/objects/location";
import partner from "@/sanity/schemas/objects/partner";
import portableText from "@/sanity/schemas/objects/portableText";
import section from "@/sanity/schemas/objects/section";
import stat from "@/sanity/schemas/objects/stat";
import testimonial from "@/sanity/schemas/objects/testimonial";
import tripFeature from "@/sanity/schemas/objects/tripFeature";
import tripSubfeature from "@/sanity/schemas/objects/tripSubfeature";
import contactItem from "@/sanity/schemas/objects/contactItem";
// Documents
import plane from "@/sanity/schemas/documents/plane";
import planeCategory from "@/sanity/schemas/documents/planeCategory";
import policy from "@/sanity/schemas/documents/policy";
import planeManufacturer from "@/sanity/schemas/documents/planeManufacturer";
// Singletons
import about from "@/sanity/schemas/singletons/about";
import contact from "@/sanity/schemas/singletons/contact";
import fuelService from "@/sanity/schemas/singletons/fuelService";
import home from "@/sanity/schemas/singletons/home";
import inquiry from "@/sanity/schemas/singletons/inquiry";
import linktree from "@/sanity/schemas/singletons/linktree";
import newsletter from "@/sanity/schemas/singletons/newsletter";
import services from "@/sanity/schemas/singletons/services";
import tripService from "@/sanity/schemas/singletons/tripService";

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
  ],
};
