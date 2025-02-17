import { defineField, defineType } from "sanity";
import { SealPercent } from "@phosphor-icons/react/dist/ssr";

export const emptyLegType = defineType({
  name: "emptyLeg",
  title: "Empty Legs",
  type: "document",
  icon: SealPercent,
  fields: [
    defineField({
      name: "from",
      title: "From",
      type: "destination",
      description: "From",
    }),
    defineField({
      name: "to",
      title: "To",
      type: "destination",
      description: "To",
    }),
    defineField({
      name: "departureTime",
      title: "Departure Time",
      type: "datetime",
      description: "Departure time",
    }),
    defineField({
      name: "arrivalTime",
      title: "Arrival Time",
      type: "datetime",
      description: "Arrival time",
    }),
    defineField({
      name: "originalPrice",
      title: "Original Price",
      type: "number",
      description: "Original price",
    }),
    defineField({
      name: "discountedPrice",
      title: "Discounted Price",
      type: "number",
      description: "Discounted price",
    }),
  ],
  preview: {
    select: {
      title: "from.city",
      subtitle: "to.city",
    },
    prepare: (selection) => {
      const { title, subtitle } = selection;
      return {
        title: title,
        subtitle: subtitle,
      };
    },
  },
});
