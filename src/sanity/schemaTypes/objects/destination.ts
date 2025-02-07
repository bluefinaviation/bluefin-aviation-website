import { defineField, defineType } from "sanity";

export default defineType({
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
      name: "country",
      title: "Country",
      type: "string",
      description: "Full country name",
    }),
    defineField({
      name: "countryCode",
      title: "Country Code",
      type: "string",
      description: "Two-letter country code (alpha-2)",
    }),
    defineField({
      name: "airportName",
      title: "Airport Name",
      type: "string",
      description: "Full airport name",
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
