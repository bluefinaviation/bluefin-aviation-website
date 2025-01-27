import { TbLocation } from 'react-icons/tb'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'location',
  title: 'Location',
  type: 'object',
  fields: [
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      description: 'Location (city) of your business.'
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string'
        }
      ],
      description: 'Location (country) of your business.'
    }),
    defineField({
      name: 'isHq',
      title: 'Is HQ?',
      type: 'boolean',
      description: 'Is this location the headquearters of your business?'
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      hidden: ({ parent }) => parent?.isHq !== true,
      description: 'Address of your headquearters.'
    }),
    defineField({
      name: 'coordinates',
      title: 'Coordinates',
      type: 'geopoint'
    })
  ],
  preview: {
    select: {
      title: 'city'
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: title,
        media: TbLocation
      }
    }
  }
})
