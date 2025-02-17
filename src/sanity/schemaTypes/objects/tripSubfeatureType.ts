import { Pulse } from "@phosphor-icons/react/dist/ssr";
import { defineType, defineField } from "sanity";

export const tripSubfeatureType = defineType({
  name: "tripSubfeature",
  title: "Trip Subfeature",
  type: "object",
  fields: [
    defineField({
      name: "subfeature",
      title: "Subfeature",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "subfeature",
    },
    prepare({ title }) {
      return {
        title: title,
        media: Pulse,
      };
    },
  },
});
