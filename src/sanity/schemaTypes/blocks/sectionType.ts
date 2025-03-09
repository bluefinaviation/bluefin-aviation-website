import { defineField, defineType } from "sanity";

export const sectionType = defineType({
  name: "section",
  title: "Section",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: "Title heading of the section.",
    }),
    defineField({
      name: "hasTagline",
      title: "Has Tagline?",
      type: "boolean",
      description: "Activate if your section has a tagline.",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      hidden: ({ parent }) => parent?.hasTagline !== true,
      description: "Tagline of the section (goes above heading title).",
    }),
    defineField({
      name: "hasSummary",
      title: "Has Summary?",
      type: "boolean",
      description: "Activate if your section has a summary.",
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "portableText",
      hidden: ({ parent }) => parent?.hasSummary !== true,
      description: "Summary text of the section.",
    }),
    defineField({
      name: "hasImage",
      title: "Has Image?",
      type: "boolean",
      description: "Activate if your section has an image.",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      description: "Image of the section.",
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
        },
      ],
      hidden: ({ parent }) => parent?.hasImage !== true,
    }),
  ],
  options: {
    collapsible: true,
  },
});
