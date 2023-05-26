import { TreeDeciduous } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'linktree',
  title: 'Linktree',
  icon: TreeDeciduous,
  type: 'document',
  fields: [
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: 'linktreeLink' }],
    }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{ type: 'contactItem' }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Linktree Page',
      };
    },
  },
});
