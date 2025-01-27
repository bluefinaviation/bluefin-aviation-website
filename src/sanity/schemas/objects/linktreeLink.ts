import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'linktreeLink',
  title: 'Linktree Link',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
      name: 'linkUrl',
      title: 'Link URL',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel']
        })
    })
  ]
})
