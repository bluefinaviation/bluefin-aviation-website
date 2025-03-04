import { defineField, defineType } from "sanity";
import { User } from "@phosphor-icons/react/dist/ssr";

export const contactPageType = defineType({
  name: "contact",
  title: "Contact Page",
  icon: User,
  type: "document",
  fields: [
    defineField({
      name: "contactSection",
      title: "Contact Section",
      type: "object",
      fields: [
        defineField({
          name: "section",
          title: "Section",
          type: "section",
        }),
        defineField({
          name: "contacts",
          title: "Contacts",
          type: "array",
          of: [{ type: "contactItem" }],
        }),
      ],
    }),
    defineField({
      name: "locationSection",
      title: "Location Section",
      type: "object",
      fields: [
        defineField({
          name: "section",
          title: "Section",
          type: "section",
        }),
        defineField({
          name: "locations",
          title: "Locations",
          type: "array",
          of: [{ type: "location" }],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Contact Page",
      };
    },
  },
});
