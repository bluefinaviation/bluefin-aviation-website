import { defineField, defineType } from "sanity";
import { ArticleNyTimes } from "@phosphor-icons/react/dist/ssr";

export const splitImageType = defineType({
  name: "splitImage",
  type: "object",
  icon: ArticleNyTimes,
  fields: [
    defineField({
      name: "orientation",
      type: "string",
      options: {
        list: [
          { value: "imageLeft", title: "Image Left" },
          { value: "imageRight", title: "Image Right" },
        ],
      },
    }),
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title: title,
        subtitle: "Split Image",
        media: media ?? ArticleNyTimes,
      };
    },
  },
});
