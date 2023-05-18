import { RiContactsBook2Line } from 'react-icons/ri';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'contactItem',
  title: 'Contact Item',
  type: 'object',
  fields: [
    defineField({
      name: 'channel',
      title: 'Channel',
      type: 'string',
      options: {
        list: [
          { title: 'Phone', value: 'phone' },
          { title: 'WhatsApp', value: 'whatsapp' },
          { title: 'Email', value: 'email' },
          { title: 'Address', value: 'address' },
        ],
      },
    }),
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'string',
    }),
    defineField({
      name: 'info',
      title: 'Info',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'cta',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
        media: RiContactsBook2Line,
      };
    },
  },
});
