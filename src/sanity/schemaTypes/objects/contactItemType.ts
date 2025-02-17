import { AddressBook } from "@phosphor-icons/react/dist/ssr";
import { defineField, defineType } from "sanity";

export const contactItemType = defineType({
  name: "contactItem",
  title: "Contact Item",
  type: "object",
  fields: [
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
    }),
    defineField({
      name: "cta",
      title: "CTA",
      type: "string",
    }),
    defineField({
      name: "label",
      title: "Label",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "cta",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
        media: AddressBook,
      };
    },
  },
});
