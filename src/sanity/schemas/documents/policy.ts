import { defineField, defineType } from "sanity";

export default defineType({
  name: "policy",
  title: "Policies",
  type: "document",
  fields: [
    defineField({
      name: "title",
      description: "This field is the title of your project.",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    {
      name: "content",
      title: "Content",
      type: "portableText",
      description: "Policy content.",
    },
  ],
});
