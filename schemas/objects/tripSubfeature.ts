import { TbActivity } from 'react-icons/tb';
import { defineType } from 'sanity';

export default defineType({
  name: 'tripSubfeature',
  title: 'Trip Subfeature',
  type: 'object',
  fields: [
    {
      name: 'subfeature',
      title: 'Subfeature',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'subfeature',
    },
    prepare({ title }) {
      return {
        title: title,
        media: TbActivity,
      };
    },
  },
});
