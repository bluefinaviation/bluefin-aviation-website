import { defineField, defineType } from "sanity";
import { AirplaneInFlight } from "@phosphor-icons/react/dist/ssr";

export default defineType({
  name: "planeManufacturer",
  title: "Plane Manufacturers",
  type: "document",
  icon: AirplaneInFlight,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
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
