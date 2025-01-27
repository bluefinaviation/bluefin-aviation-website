import { TbHeartHandshake } from 'react-icons/tb'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'services',
  title: 'Services',
  icon: TbHeartHandshake,
  type: 'document',
  fields: [
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'section',
          title: 'Section',
          type: 'section'
        })
      ]
    })
  ],
  preview: {
    prepare() {
      return {
        title: 'Services Page'
      }
    }
  }
})
