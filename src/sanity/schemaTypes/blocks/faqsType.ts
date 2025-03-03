import { defineField, defineType } from "sanity";
import { Question } from "@phosphor-icons/react/dist/ssr";

export const faqsType = defineType({
  name: "faqs",
  title: "FAQs",
  type: "object",
  icon: Question,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [{ type: "reference", to: [{ type: "faq" }] }],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "FAQs",
      };
    },
  },
});
