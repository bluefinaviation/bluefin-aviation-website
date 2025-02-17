import { Quotes } from "@phosphor-icons/react";
import { defineField, defineType } from "sanity";

export const testimonialType = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "object",
  fields: [
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "object",
      fields: [
        {
          name: "name",
          title: "Name",
          type: "string",
        },
        {
          name: "role",
          title: "Role",
          type: "string",
        },
        {
          name: "location",
          title: "Location",
          type: "string",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "author.name",
      subtitle: "author.location",
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title,
        subtitle,
        media: Quotes,
      };
    },
  },
});
