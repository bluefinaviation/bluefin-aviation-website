import { defineField, defineType } from "sanity";
import { Airplane } from "@phosphor-icons/react/dist/ssr";

export const tripServicePageType = defineType({
  name: "tripService",
  title: "Trip Service Page",
  icon: Airplane,
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
          of: [{ type: "tripFeature" }],
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
        title: "Trip Service Page",
      };
    },
  },
});
