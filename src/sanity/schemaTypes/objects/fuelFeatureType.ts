import { defineField, defineType } from "sanity";

export const fuelFeatureType = defineType({
  name: "fuelFeature",
  title: "Fuel Feature",
  type: "object",
  fields: [
    defineField({
      name: "icon",
      title: "Icon",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "continent",
      title: "Continent",
      type: "string",
    }),
    defineField({
      name: "airports",
      title: "Airports",
      type: "number",
    }),
  ],
});
