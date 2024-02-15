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
      description: 'Location (city) of your business.',
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
      description: 'Location (country) of your business.',
    },
    {
      name: 'isHq',
      title: 'Is HQ?',
      type: 'boolean',
      description: 'Is this location the headquearters of your business?',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      hidden: ({ parent }) => parent?.isHq !== true,
      description: 'Address of your headquearters.',
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
