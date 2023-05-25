import { Clipboard } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'newsletter',
  title: 'Newsletter',
  icon: Clipboard,
  type: 'document',
  fields: [
    defineField({
      name: 'formSection',
      title: 'Form Section',
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
        title: 'Newsletter Page',
      };
    },
  },
});
