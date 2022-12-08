import { TbQuote } from 'react-icons/tb';
import { defineType } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'object',
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
          name: 'role',
          title: 'Role',
          type: 'string',
        },
        {
          name: 'location',
          title: 'Location',
          type: 'string',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'author.name',
      subtitle: 'author.location',
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title,
        subtitle,
        media: TbQuote,
      };
    },
  },
});
