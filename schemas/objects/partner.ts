import { TbPlane } from 'react-icons/tb';
import { defineType } from 'sanity';

export default defineType({
  name: 'partner',
  title: 'Partner',
  icon: TbPlane,
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
  },
});
