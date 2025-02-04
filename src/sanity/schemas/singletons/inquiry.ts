import { defineField, defineType } from "sanity";

export default defineType({
  name: "inquiry",
  title: "Inquiry Page",
  type: "document",
  fields: [
    defineField({
      name: "formSection",
      title: "Form Section",
      type: "object",
      fields: [
        {
          name: "section",
          title: "Section",
          type: "section",
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Inquiry Page",
      };
    },
  },
});
