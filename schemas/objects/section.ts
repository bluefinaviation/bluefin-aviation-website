import { defineType } from 'sanity';

export default defineType({
  name: 'section',
  title: 'Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'portableText',
    },
    {
      name: 'hasImage',
      title: 'Has Image?',
      type: 'boolean',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        },
      ],
      hidden: ({ parent }) => parent?.hasImage !== true,
    },
  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
});
