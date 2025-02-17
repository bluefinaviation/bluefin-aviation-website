import { defineField, defineType } from "sanity";

export const destinationType = defineType({
  name: "destination",
  title: "Destination",
  type: "object",
  fields: [
    defineField({
      name: "city",
      title: "City",
      type: "string",
      description: "Full city name",
    }),
    defineField({
      name: "countryCode",
      title: "Country Code",
      type: "string",
      description: "Two-letter country code (alpha-2)",
    }),
    defineField({
      name: "airportCode",
      title: "Airport Code",
      type: "string",
      description: "Three-letter airport code",
    }),
  ],
  preview: {
    select: {
      title: "city",
      subtitle: "countryCode",
    },
  },
});
