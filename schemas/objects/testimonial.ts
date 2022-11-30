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
          name: 'location',
          title: 'Location',
          type: 'string',
        },
        {
          name: 'avatar',
          title: 'Avatar',
          type: 'image',
          options: { hotspot: true },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'author.name',
      subtitle: 'author.location',
      media: 'author.avatar',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title,
        subtitle,
        media,
      };
    },
  },
});
