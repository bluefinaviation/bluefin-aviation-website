import { defineField, defineType } from "sanity";

export const companyDetailsType = defineType({
  name: "companyDetails",
  title: "Company Details",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [{ type: "stat" }],
    }),
    defineField({
      name: "timeline",
      title: "Timeline",
      type: "array",
      of: [{ type: "timelineEvent" }],
    }),
  ],
});
