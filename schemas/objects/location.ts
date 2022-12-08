import { TbLocation } from 'react-icons/tb';
import { defineType } from 'sanity';

export default defineType({
  name: 'location',
  title: 'Location',
  type: 'object',
  fields: [
    {
      name: 'city',
      title: 'City',
      type: 'string',
    },
    {
      name: 'country',
      title: 'Country',
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
      name: 'isHq',
      title: 'Is HQ?',
      type: 'boolean',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'coordinates',
      title: 'Coordinates',
      type: 'geopoint',
    },
  ],
  preview: {
    select: {
      title: 'city',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
        media: TbLocation,
      };
    },
  },
});
