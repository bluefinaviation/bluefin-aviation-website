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
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "blockContent",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
    }),
  ],
});
