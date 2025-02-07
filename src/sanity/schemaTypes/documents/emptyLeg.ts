import { defineField, defineType } from "sanity";
import { SealPercent } from "@phosphor-icons/react/dist/ssr";

export default defineType({
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
      name: "plane",
      title: "Plane",
      type: "reference",
      to: [{ type: "plane" }],
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
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
