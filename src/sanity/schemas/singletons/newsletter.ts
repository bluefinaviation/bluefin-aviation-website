import { defineField, defineType } from "sanity";

export default defineType({
  name: "newsletter",
  title: "Newsletter Page",
  type: "document",
  fields: [
    defineField({
      name: "formSection",
      title: "Form Section",
      type: "object",
      fields: [
        defineField({
          name: "section",
          title: "Section",
          type: "section",
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Newsletter Page",
      };
    },
  },
});
