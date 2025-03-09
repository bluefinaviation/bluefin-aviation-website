import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  title: "Category",
  name: "category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      title: "Description",
      name: "description",
      type: "text",
    }),
  ],
});
