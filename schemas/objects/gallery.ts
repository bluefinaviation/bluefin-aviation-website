import { defineType } from 'sanity';

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'array',
  of: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        },
      ],
    },
  ],
  options: {
    layout: 'grid',
  },
});
