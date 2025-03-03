import { defineField, defineType } from "sanity";
import { CallBell } from "@phosphor-icons/react/dist/ssr";

export const serviceType = defineType({
  name: "service",
  title: "Services",
  type: "document",
  icon: CallBell,
  fields: [
    defineField({
      title: "Name",
      name: "name",
      description: "The name of the service",
      type: "string",
    }),
    defineField({
      title: "Slug",
      name: "slug",
      description: "The slug of the service",
      type: "slug",
      options: {
        source: "name",
      },
    }),
    defineField({
      title: "Image",
      name: "image",
      description: "The image of the service",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          title: "Alt",
          name: "alt",
          description: "The alt text of the image",
          type: "string",
        }),
      ],
    }),
    defineField({
      title: "Content",
      name: "content",
      description: "Blocks that make up the content of the service page",
      type: "pageBuilder",
    }),
  ],
});
