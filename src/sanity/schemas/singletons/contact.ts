import { RiContactsLine } from 'react-icons/ri';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'contact',
  title: 'Contact',
  icon: RiContactsLine,
  type: 'document',
  fields: [
    defineField({
      name: 'contactSection',
      title: 'Contact Section',
      type: 'object',
      fields: [
        defineField({
          name: 'section',
          title: 'Section',
          type: 'section',
        }),
        defineField({
          name: 'contacts',
          title: 'Contacts',
          type: 'array',
          of: [{ type: 'contactItem' }],
        }),
      ],
    }),
    defineField({
      name: 'locationSection',
      title: 'Location Section',
      type: 'object',
      fields: [
        defineField({
          name: 'section',
          title: 'Section',
          type: 'section',
        }),
        defineField({
          name: 'locations',
          title: 'Locations',
          type: 'array',
          of: [{ type: 'location' }],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Contact Page',
      };
    },
  },
});
