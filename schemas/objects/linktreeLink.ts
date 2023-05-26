import { Link } from 'lucide-react';
import { defineType } from 'sanity';

export default defineType({
  name: 'linktreeLink',
  title: 'Linktree Link',
  type: 'object',
  icon: Link,
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'linkUrl',
      title: 'Link URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
  ],
});
