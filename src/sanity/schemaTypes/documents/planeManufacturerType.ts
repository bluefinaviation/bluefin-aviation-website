import { defineField, defineType } from "sanity";
import { Factory } from "@phosphor-icons/react/dist/ssr";

export const planeManufacturerType = defineType({
  name: "planeManufacturer",
  title: "Plane Manufacturers",
  type: "document",
  icon: Factory,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    }),
    defineField({
      name: "logo",
      title: "Logo",
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
  ],
  preview: {
    select: {
      title: "name",
      media: "logo",
    },
  },
});
