import { defineArrayMember, defineType } from 'sanity';
export default defineType({
  name: 'portableText',
  title: 'Portable Text',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      options: {},
      styles: [],
      lists: [],
      marks: {
        decorators: [{ title: 'Strong', value: 'strong' }],
        annotations: [
          defineType({
            type: 'object',
            name: 'link',
            fields: [
              {
                type: 'string',
                name: 'href',
                title: 'URL',
                validation: (rule) => rule.required(),
              },
            ],
          }),
        ],
      },
    }),
  ],
});
