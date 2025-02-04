import { defineField, defineType } from "sanity";
import { AirplaneTilt } from "@phosphor-icons/react/dist/ssr";

export default defineType({
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
