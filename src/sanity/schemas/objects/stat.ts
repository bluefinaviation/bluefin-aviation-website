import { ChartPie } from "@phosphor-icons/react/dist/ssr";

import { defineType } from "sanity";

export default defineType({
  name: "stat",
  title: "Stat",
  type: "object",
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string",
    },
    {
      name: "value",
      title: "Value",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "label",
      subtitle: "value",
    },
    prepare({ title, subtitle }) {
      return {
        title: title,
        subtitle: subtitle,
        media: ChartPie,
      };
    },
  },
});
