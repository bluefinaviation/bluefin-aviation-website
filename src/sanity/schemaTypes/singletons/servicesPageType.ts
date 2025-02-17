import { defineField, defineType } from "sanity";
import { HandHeart } from "@phosphor-icons/react/dist/ssr";

export const servicesPageType = defineType({
  name: "services",
  title: "Services Page",
  icon: HandHeart,
  type: "document",
  fields: [
    defineField({
      name: "heroSection",
      title: "Hero Section",
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
        title: "Services Page",
      };
    },
  },
});
