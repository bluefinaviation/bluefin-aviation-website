import { TbPin } from 'react-icons/tb';
import { defineType } from 'sanity';

export default defineType({
  name: 'tripFeature',
  title: 'Trip Feature',
  type: 'object',
  fields: [
    {
      name: 'feature',
      title: 'Feature',
      type: 'string',
    },
    {
      name: 'subfeatures',
      title: 'Subfeatures',
      type: 'array',
      of: [{ type: 'tripSubfeature' }],
    },
  ],
  preview: {
    select: {
      title: 'feature',
    },
    prepare({ title }) {
      return {
        title: title,
        media: TbPin,
      };
    },
  },
});
