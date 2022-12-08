import { defineType } from 'sanity';

export default defineType({
  name: 'fuelFeature',
  title: 'Fuel Feature',
  type: 'object',
  fields: [
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        },
      ],
    },
    {
      name: 'continent',
      title: 'Continent',
      type: 'string',
    },
    {
      name: 'airports',
      title: 'Airports',
      type: 'number',
    },
  ],
});
