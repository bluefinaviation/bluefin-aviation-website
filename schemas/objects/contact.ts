import { TbNotebook } from 'react-icons/tb';
import { defineType } from 'sanity';

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'object',
  fields: [
    {
      name: 'channel',
      title: 'Channel',
      type: 'string',
      options: {
        list: [
          { title: 'Phone', value: 'phone' },
          { title: 'WhatsApp', value: 'whatsapp' },
          { title: 'Email', value: 'email' },
          { title: 'Office', value: 'office' },
        ],
      },
    },
    {
      name: 'cta',
      title: 'CTA',
      type: 'string',
    },
    {
      name: 'info',
      title: 'Info',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'cta',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
        media: TbNotebook,
      };
    },
  },
});
