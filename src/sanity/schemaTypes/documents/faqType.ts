import { defineField, defineType } from "sanity";
import { Question } from "@phosphor-icons/react/dist/ssr";

export const faqType = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  icon: Question,
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
      icon: Question,
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "text",
    }),
  ],
});
