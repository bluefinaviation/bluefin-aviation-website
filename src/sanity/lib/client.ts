import { createClient } from '@sanity/client/stega'

import {
  apiVersion,
  dataset,
  projectId,
  revalidateSecret,
  studioUrl
} from '@/sanity/lib/api'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: revalidateSecret ? false : true,
  perspective: 'published',
  stega: {
    studioUrl,
    // logger: console,
    filter: props => {
      if (props.sourcePath.at(-1) === 'title') {
        return true
      }

      return props.filterDefault(props)
    }
  }
})
