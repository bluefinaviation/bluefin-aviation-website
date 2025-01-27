import { RiHome2Line } from 'react-icons/ri'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  icon: RiHome2Line,
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
        }),
        defineField({
          name: 'video',
          title: 'Video',
          type: 'file'
        })
      ]
    }),
    defineField({
      name: 'servicesSection',
      title: 'Services Section',
      type: 'object',
      fields: [
        defineField({
          name: 'section',
          title: 'Section',
          type: 'section'
        })
      ]
    }),
    defineField({
      name: 'testimonialsSection',
      title: 'Testimonials Section',
      type: 'object',
      fields: [
        defineField({
          name: 'section',
          title: 'Section',
          type: 'section'
        }),
        defineField({
          name: 'testimonials',
          title: 'Testimonials',
          type: 'array',
          of: [{ type: 'testimonial' }]
        })
      ]
    }),
    defineField({
      name: 'partnersSection',
      title: 'Partners Section',
      type: 'object',
      fields: [
        defineField({
          name: 'section',
          title: 'Section',
          type: 'section'
        }),
        defineField({
          name: 'partners',
          title: 'Partners',
          type: 'array',
          of: [{ type: 'partner' }]
        })
      ]
    }),
    defineField({
      name: 'contactSection',
      title: 'Contact Section',
      type: 'object',
      fields: [
        defineField({
          name: 'section',
          title: 'Section',
          type: 'section'
        })
      ]
    }),
    defineField({
      name: 'newsletterSection',
      title: 'Newsletter Section',
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
        title: 'Home Page'
      }
    }
  }
})
// // import { HomeIcon } from '@sanity/icons'
// // import { defineArrayMember, defineField, defineType } from 'sanity'

// // export default defineType({
// //   name: 'home',
// //   title: 'Home',
// //   type: 'document',
// //   icon: HomeIcon,
// //   // Uncomment below to have edits publish automatically as you type
// //   // liveEdit: true,
// //   fields: [
// //     defineField({
// //       name: 'title',
// //       description: 'This field is the title of your personal website.',
// //       title: 'Title',
// //       type: 'string',
// //       validation: (rule) => rule.required(),
// //     }),
// //     defineField({
// //       name: 'overview',
// //       description:
// //         'Used both for the <meta> description tag for SEO, and the personal website subheader.',
// //       title: 'Description',
// //       type: 'array',
// //       of: [
// //         // Paragraphs
// //         defineArrayMember({
// //           lists: [],
// //           marks: {
// //             annotations: [
// //               {
// //                 name: 'link',
// //                 type: 'object',
// //                 title: 'Link',
// //                 fields: [
// //                   {
// //                     name: 'href',
// //                     type: 'url',
// //                     title: 'Url',
// //                   },
// //                 ],
// //               },
// //             ],
// //             decorators: [
// //               {
// //                 title: 'Italic',
// //                 value: 'em',
// //               },
// //               {
// //                 title: 'Strong',
// //                 value: 'strong',
// //               },
// //             ],
// //           },
// //           styles: [],
// //           type: 'block',
// //         }),
// //       ],
// //       validation: (rule) => rule.max(155).required(),
// //     }),
// //     defineField({
// //       name: 'showcaseProjects',
// //       title: 'Showcase projects',
// //       description:
// //         'These are the projects that will appear first on your landing page.',
// //       type: 'array',
// //       of: [
// //         defineArrayMember({
// //           type: 'reference',
// //           to: [{ type: 'project' }],
// //         }),
// //       ],
// //     }),
// //   ],
// //   preview: {
// //     select: {
// //       title: 'title',
// //     },
// //     prepare({ title }) {
// //       return {
// //         subtitle: 'Home',
// //         title,
// //       }
// //     },
// //   },
// // })
