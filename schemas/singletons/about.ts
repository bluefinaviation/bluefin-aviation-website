import { RiProfileLine } from 'react-icons/ri';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  icon: RiProfileLine,
  fields: [
    defineField({
      name: 'storySection',
      title: 'Story Section',
      type: 'object',
      fields: [
        {
          name: 'section',
          title: 'Section',
          type: 'section',
        },
        {
          name: 'bio',
          title: 'Bio',
          type: 'array',
          of: [{ type: 'block' }],
        },
      ],
    }),
    defineField({
      name: 'statsSection',
      title: 'Stats Section',
      type: 'object',
      fields: [
        {
          name: 'stats',
          title: 'Stats',
          type: 'array',
          of: [{ type: 'stat' }],
        },
      ],
    }),
    defineField({
      name: 'teamSection',
      title: 'Team Section',
      type: 'object',
      fields: [
        {
          name: 'section',
          title: 'Section',
          type: 'section',
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'About Page',
      };
    },
  },
});
