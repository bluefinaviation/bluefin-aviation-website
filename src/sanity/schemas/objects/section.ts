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
      description: 'Title heading of the section.',
    },
    {
      name: 'hasTagline',
      title: 'Has Tagline?',
      type: 'boolean',
      description: 'Activate if your section has a tagline.',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      hidden: ({ parent }) => parent?.hasTagline !== true,
      description: 'Tagline of the section (goes above heading title).',
    },
    {
      name: 'hasSummary',
      title: 'Has Summary?',
      type: 'boolean',
      description: 'Activate if your section has a summary.',
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'portableText',
      hidden: ({ parent }) => parent?.hasSummary !== true,
      description: 'Summary text of the section.',
    },
    {
      name: 'hasImage',
      title: 'Has Image?',
      type: 'boolean',
      description: 'Activate if your section has an image.',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Image of the section.',
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
  },
});
