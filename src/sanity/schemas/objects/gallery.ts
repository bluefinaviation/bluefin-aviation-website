import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'array',
  of: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string'
        }
      ]
    })
  ],
  options: {
    layout: 'grid'
  }
})
