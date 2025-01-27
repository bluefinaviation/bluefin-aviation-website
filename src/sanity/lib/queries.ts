import { defineQuery } from 'next-sanity'

export const homePageQuery = defineQuery(`
  *[_type == "home"][0]{
    heroSection{
		section,
		"video": video.asset->url
	},
	servicesSection{
		section,
		"tripService": *[_type == "tripService"][0]{
			card
		},
		"fuelService": *[_type == "fuelService"][0]{
			card
		},
	},
	testimonialsSection,
	partnersSection,
	contactSection,
	newsletterSection,
}`)

export const aboutPageQuery = defineQuery(`
	*[_type == "about"][0]{
		storySection,
		teamSection,
		statsSection
}`)

export const footerQuery = defineQuery(`
{
  "policies": *[_type == "policy"]{
    "id": _id,
    title,
    "slug": slug.current,
    content,
  },
  "newsletter": *[_type == "home"][0]{
    "section": newsletterSection.section,
  }
}
`)

export const homePageTitleQuery = defineQuery(`
  *[_type == "home"][0].title
`)

export const pagesBySlugQuery = defineQuery(`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    title,
    "slug": slug.current,
  }
`)

export const projectBySlugQuery = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    client,
    coverImage,
    description,
    duration,
    overview,
    site,
    "slug": slug.current,
    tags,
    title,
  }
`)

export const projectPaths = defineQuery(`
  *[_type == "project" && slug.current != null].slug.current
`)

export const pagePaths = defineQuery(`
  *[_type == "page" && slug.current != null].slug.current
`)

export const settingsQuery = defineQuery(`
  *[_type == "settings"][0]{
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage,
  }
`)

export const servicesPageQuery = defineQuery(`
	*[_type == "services"][0]{
		title,
		heroSection,
		"tripService": *[_type == "tripService"][0]{
			card
		},
		"fuelService": *[_type == "fuelService"][0]{
			card
		},
 }`)

export const tripServicePageQuery = defineQuery(`
	*[_type == "tripService"][0]{
		heroSection,
		featuresSection,
		gallerySection,
 }`)

export const fuelServicePageQuery = defineQuery(`
*[_type == "fuelService"][0]{
	heroSection,
	featuresSection,
	gallerySection,
}`)

export const contactPageQuery = defineQuery(`
	*[_type == "contact"][0]{
		contactSection,
		locationSection
}`)

export const newsletterPageQuery = defineQuery(`
	*[_type == "newsletter"][0]{
		formSection
}`)

export const inquiryPageQuery = defineQuery(`
	*[_type == "inquiry"][0]{
		formSection
}`)

export const linktreePageQuery = defineQuery(`
	*[_type == "linktree"][0]{
		heroSection,
    links
}`)

export const policyBySlugQuery = defineQuery(`
  *[_type == "policy" && slug.current == $slug][0] {
    "id": _id,
    "updatedAt": _updatedAt,
    title,
    "slug": slug.current,
    content,
  }
`)

// // import { defineQuery } from 'next-sanity'

// // export const settingsQuery = defineQuery(`*[_type == "settings"][0]`)

// // const postFields = /* groq */ `
// //   _id,
// //   "status": select(_originalId in path("drafts.**") => "draft", "published"),
// //   "title": coalesce(title, "Untitled"),
// //   "slug": slug.current,
// //   excerpt,
// //   coverImage,
// //   "date": coalesce(date, _updatedAt),
// //   "author": author->{"name": coalesce(name, "Anonymous"), picture},
// // `

// // export const heroQuery = defineQuery(`
// //   *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) [0] {
// //     content,
// //     ${postFields}
// //   }
// // `)

// // export const moreStoriesQuery = defineQuery(`
// //   *[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
// //     ${postFields}
// //   }
// // `)

// // export const postQuery = defineQuery(`
// //   *[_type == "post" && slug.current == $slug] [0] {
// //     content,
// //     ${postFields}
// //   }
// // `)
