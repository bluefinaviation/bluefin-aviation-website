import { defineField, defineType } from 'sanity'
import { Article } from '@phosphor-icons/react/dist/ssr'

export const articleType = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  icon: Article,
  fields: [
    defineField({
      name: 'title',
      type: 'string'
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title'
      }
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: { type: 'author' }
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: rule =>
            rule.custom((value, context) => {
              const parent = context?.parent as { asset?: { _ref?: string } }

              return !value && parent?.asset?._ref
                ? 'Alt text is required when an image is present'
                : true
            })
        })
      ]
    }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: ['Company', 'Events', 'News', 'Guides']
      }
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      options: {
        dateFormat: 'DD-MM-YYYY'
      },
      validation: rule => rule.required()
    }),
    defineField({
      name: 'summary',
      type: 'text'
    }),
    defineField({
      name: 'body',
      type: 'blockContent'
    }),
    defineField({
      name: 'relatedNews',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'article' } }]
    })
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    }
  }
})
