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
      type: 'string',
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
      subtitle: 'country',
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title,
        subtitle: subtitle,
        media: TbLocation,
      };
    },
  },
});
