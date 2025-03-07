import { defineField, defineType } from 'sanity'
import { Question } from '@phosphor-icons/react/dist/ssr'

export const faqType = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  icon: Question,
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string'
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'blockContent'
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'General', value: 'general' },
          { title: 'Fuel', value: 'fuel' },
          { title: 'Trip', value: 'trip' },
          { title: 'Charter', value: 'charter' }
        ]
      }
    })
  ]
})
