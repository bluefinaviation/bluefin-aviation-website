import { defineField, defineType } from "sanity";
import { AirplaneTilt } from "@phosphor-icons/react/dist/ssr";

export const planeCategoryType = defineType({
  name: "planeCategory",
  title: "Plane Categories",
  type: "document",
  icon: AirplaneTilt,
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
      name: "order",
      title: "Order",
      type: "number",
      description: "Used to sort the categories in the filter dropdown.",
    }),
    defineField({
      name: "image",
      title: "Image",
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
      media: "image",
    },
  },
});
