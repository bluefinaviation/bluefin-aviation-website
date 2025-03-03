import { defineField, defineType } from "sanity";
import { Star } from "@phosphor-icons/react/dist/ssr";

export const infoCarouselType = defineType({
  title: "Info Carousel",
  name: "infoCarousel",
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
      title: "Items",
      name: "items",
      type: "array",
      of: [
        defineField({
          title: "Item",
          name: "item",
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
              type: "blockContent",
            }),
            defineField({
              title: "Image",
              name: "image",
              type: "image",
              options: {
                hotspot: true,
              },
              fields: [
                defineField({
                  title: "Alt",
                  name: "alt",
                  type: "string",
                }),
              ],
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
        subtitle: "Info Carousel",
      };
    },
  },
});
