import { TbPlane } from 'react-icons/tb';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'tripService',
  title: 'Trip Service',
  icon: TbPlane,
  type: 'document',
  fields: [
    defineField({
      name: 'card',
      title: 'Card',
      type: 'card',
    }),
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'section',
          title: 'Section',
          type: 'section',
        },
      ],
    }),
    defineField({
      name: 'featuresSection',
      title: 'Features Section',
      type: 'object',
      fields: [
        {
          name: 'section',
          title: 'Section',
          type: 'section',
        },
        {
          name: 'features',
          title: 'Features',
          type: 'array',
          of: [{ type: 'tripFeature' }],
        },
      ],
    }),
    defineField({
      name: 'gallerySection',
      title: 'Gallery Section',
      type: 'object',
      fields: [
        {
          name: 'section',
          title: 'Section',
          type: 'section',
        },
        {
          name: 'gallery',
          title: 'Gallery',
          type: 'gallery',
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Trip Service Page',
      };
    },
  },
});
