import { Clipboard } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'inquiry',
  title: 'Inquiry',
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
        title: 'Inquiry Page',
      };
    },
  },
});
