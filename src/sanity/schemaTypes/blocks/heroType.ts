import { defineField, defineType } from "sanity";
import { TextAlignJustify } from "@phosphor-icons/react/dist/ssr";

export const heroType = defineType({
  title: "Hero",
  name: "hero",
  type: "object",
  icon: TextAlignJustify,
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
      title: "Image",
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
        title,
        subtitle: "Hero",
        media: media ?? TextAlignJustify,
      };
    },
  },
});
