import { TbPin } from 'react-icons/tb'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'tripFeature',
  title: 'Trip Feature',
  type: 'object',
  fields: [
    defineField({
      name: 'feature',
      title: 'Feature',
      type: 'string'
    }),
    defineField({
      name: 'subfeatures',
      title: 'Subfeatures',
      type: 'array',
      of: [{ type: 'tripSubfeature' }]
    })
  ],
  preview: {
    select: {
      title: 'feature'
    },
    prepare({ title }) {
      return {
        title: title,
        media: TbPin
      }
    }
  }
})
