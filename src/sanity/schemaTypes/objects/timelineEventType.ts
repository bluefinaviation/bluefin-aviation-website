import { defineField, defineType } from "sanity";

export const timelineEventType = defineType({
  name: "timelineEvent",
  title: "Timeline Event",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});
