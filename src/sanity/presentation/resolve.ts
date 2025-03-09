import { defineLocations, PresentationPluginOptions } from 'sanity/presentation'

export const resolve: PresentationPluginOptions['resolve'] = {
  locations: {
    service: defineLocations({
      select: {
        title: 'title',
        slug: 'slug.current'
      },
      resolve: doc => ({
        locations: [
          {
            title: doc?.title || 'Untitled',
            href: `/services/${doc?.slug}`
          }
        ]
      })
    }),
    article: defineLocations({
      select: {
        title: 'title',
        slug: 'slug.current'
      },
      resolve: doc => ({
        locations: [
          {
            title: doc?.title || 'Untitled',
            href: `/news/${doc?.slug}`
          },
          { title: 'News index', href: `/news` }
        ]
      })
    })
  }
}
