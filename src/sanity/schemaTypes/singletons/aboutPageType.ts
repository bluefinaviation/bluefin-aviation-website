import { defineField, defineType } from "sanity";
import { User } from "@phosphor-icons/react/dist/ssr";

export const aboutPageType = defineType({
  name: "about",
  title: "About Page",
  type: "document",
  icon: User,
  fields: [
    defineField({
      name: "storySection",
      title: "Story Section",
      type: "object",
      fields: [
        defineField({
          name: "section",
          title: "Section",
          type: "section",
        }),
        defineField({
          name: "bio",
          title: "Bio",
          type: "array",
          of: [{ type: "block" }],
        }),
      ],
    }),
    defineField({
      name: "statsSection",
      title: "Stats Section",
      type: "object",
      fields: [
        defineField({
          name: "stats",
          title: "Stats",
          type: "array",
          of: [{ type: "stat" }],
        }),
      ],
    }),
    defineField({
      name: "teamSection",
      title: "Team Section",
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
        title: "About Page",
      };
    },
  },
});
