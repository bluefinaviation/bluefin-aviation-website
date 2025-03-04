import { defineField, defineType } from "sanity";
import { GasPump } from "@phosphor-icons/react/dist/ssr";

export const fuelServicePageType = defineType({
  name: "fuelService",
  title: "Fuel Service Page",
  icon: GasPump,
  type: "document",
  fields: [
    defineField({
      name: "card",
      title: "Card",
      type: "card",
    }),
    defineField({
      name: "heroSection",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({
          name: "section",
          title: "Section",
          type: "section",
        }),
      ],
    }),
    defineField({
      name: "featuresSection",
      title: "Features Section",
      type: "object",
      fields: [
        defineField({
          name: "section",
          title: "Section",
          type: "section",
        }),
        defineField({
          name: "features",
          title: "Features",
          type: "array",
          of: [{ type: "fuelFeature" }],
        }),
      ],
    }),
    defineField({
      name: "gallerySection",
      title: "Gallery Section",
      type: "object",
      fields: [
        defineField({
          name: "section",
          title: "Section",
          type: "section",
        }),
        defineField({
          name: "gallery",
          title: "Gallery",
          type: "gallery",
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Fuel Service Page",
      };
    },
  },
});
