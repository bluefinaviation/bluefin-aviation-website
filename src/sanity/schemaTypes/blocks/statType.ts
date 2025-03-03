import { defineField, defineType } from "sanity";
import { ChartLine } from "@phosphor-icons/react/dist/ssr";

export const statType = defineType({
  name: "stat",
  title: "Stat",
  type: "object",
  icon: ChartLine,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "value",
      title: "Value",
      type: "number",
    }),
    defineField({
      name: "hasUnit",
      title: "Has Unit?",
      type: "boolean",
    }),
    defineField({
      name: "unit",
      title: "Unit",
      type: "string",
      hidden: ({ parent }) => !parent?.hasUnit,
    }),
  ],
});
