import { defineField, defineType } from "sanity";
import { Airplane } from "@phosphor-icons/react/dist/ssr";

export const planeType = defineType({
  name: "plane",
  title: "Planes",
  type: "document",
  icon: Airplane,
  fields: [
    defineField({
      name: "model",
      title: "Model",
      type: "string",
    }),
    defineField({
      name: "manufacturer",
      title: "Manufacturer",
      type: "reference",
      to: [{ type: "planeManufacturer" }],
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "planeCategory" }],
    }),
    defineField({
      name: "code",
      title: "Code",
      type: "string",
    }),
    defineField({
      name: "capacity",
      title: "Capacity",
      type: "number",
    }),
    defineField({
      name: "speed",
      title: "Speed",
      type: "number",
    }),
    defineField({
      name: "range",
      title: "Range",
      type: "number",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "model",
      subtitle: "manufacturer.name",
      media: "image",
      category: "category.name",
    },
    prepare: (selection) => {
      const { title, subtitle, media, category } = selection;
      return {
        title: `${title} - ${subtitle}`,
        subtitle: category,
        media: media,
      };
    },
  },
});
