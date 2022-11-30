import { TbSend } from 'react-icons/tb'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  icon: TbSend,
  type: 'document',
  fields: [
    defineField({
      name: 'contactSection',
      title: 'Contact Section',
      type: 'object',
      fields: [
        {
          name: 'section',
          title: 'Section',
          type: 'section',
        },
        {
          name: 'contacts',
          title: 'Contacts',
          type: 'array',
          of: [{ type: 'contact' }],
        },
      ],
    }),
    defineField({
      name: 'locationSection',
      title: 'Location Section',
      type: 'object',
      fields: [
        {
          name: 'section',
          title: 'Section',
          type: 'section',
        },
        {
          name: 'locations',
          title: 'Locations',
          type: 'array',
          of: [{ type: 'location' }],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Contact Page',
      }
    },
  },
})
