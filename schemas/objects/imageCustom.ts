import { defineType } from 'sanity';

export default defineType({
  name: 'imageCustom',
  title: 'Image Custom',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'alt',
      title: 'Alternative Text',
      type: 'string',
      options: {
        isHighlighted: true,
      },
    },
  ],
});
