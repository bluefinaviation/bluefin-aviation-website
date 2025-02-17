import { defineField, defineType } from "sanity";

export const linktreePageType = defineType({
  name: "linktree",
  title: "Linktree Page",
  type: "document",
  fields: [
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [{ type: "linktreeLink" }],
    }),
    defineField({
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{ type: "contactItem" }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Linktree Page",
      };
    },
  },
});
