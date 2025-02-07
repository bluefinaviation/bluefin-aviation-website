import { defineField, defineType } from "sanity";
import { Gear } from "@phosphor-icons/react/dist/ssr";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: Gear,
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
    }),
    // // defineField({
    // //   name: "homePage",
    // //   type: "reference",
    // //   to: [{ type: "page" }],
    // // }),
  ],
  preview: {
    prepare() {
      return {
        title: "Site Settings",
      };
    },
  },
});
