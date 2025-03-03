import { defineField, defineType } from "sanity";
import { Star } from "@phosphor-icons/react/dist/ssr";

export const featuresType = defineType({
  title: "Features",
  name: "features",
  type: "object",
  icon: Star,
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Text",
      name: "text",
      type: "blockContent",
    }),
    defineField({
      title: "Features",
      name: "features",
      type: "array",
      of: [
        defineField({
          title: "Feature",
          name: "feature",
          type: "object",
          fields: [
            defineField({
              title: "Title",
              name: "title",
              type: "string",
            }),
            defineField({
              title: "Text",
              name: "text",
              type: "string",
            }),
            defineField({
              title: "Icon",
              name: "icon",
              type: "image",
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Features",
      };
    },
  },
});
