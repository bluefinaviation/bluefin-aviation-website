import { defineQuery } from 'next-sanity'

export const TESTIMONIALS_QUERY = defineQuery(`
  *[_type == "testimonial"] {
    ...,
    "image": image.asset->url
  }
`)

export const NEWS_QUERY = defineQuery(`
  *[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
		"slug": slug.current,
    mainImage,
		category,
		publishedAt,
    "excerpt": pt::text(body[0..1]),
		summary,
		"imageUrl": mainImage.asset->url,
		"author": author->{
			name,
			image
		}
  }
`)

export const NEWS_ARTICLE_QUERY = defineQuery(`
  *[_type == "article" && slug.current == $slug][0] {
    ...,
		"slug": slug.current,
    mainImage,
		category,
		"author": author->{
			name,
			image
		},
		"imageUrl": mainImage.asset->url

  }
`)

export const HOME_PAGE_QUERY = defineQuery(`
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
	brokerSection,
	testimonialsSection,
	partnersSection,
	contactSection,
	newsletterSection,
}`)

export const FLEET_QUERY = defineQuery(`
	*[_type == "plane" && 
		(($category == null) || category->slug.current == $category) &&
		(($manufacturer == null) || manufacturer->slug.current == $manufacturer)
	]{
		_id,
		_type,
		_createdAt,
		_updatedAt,
		_rev,
		model,
		"manufacturer": manufacturer->{
				_id,
				name,
				"slug": slug.current
		},
		category->,
		code,
		capacity,
		speed,
		range,
		image
	}
`)

export const CONTACT_PAGE_QUERY = defineQuery(`
	*[_type == "contact"][0]{
		contactSection,
		locationSection
}`)

export const POLICY_BY_SLUG_QUERY = defineQuery(`
  *[_type == "policy" && slug.current == $slug][0] {
    "id": _id,
    "updatedAt": _updatedAt,
    title,
    "slug": slug.current,
    content,
  }
`)

export const FUEL_SERVICE_PAGE_QUERY = defineQuery(`
	*[_type == "fuelService"][0]{
		heroSection,
		featuresSection,
		gallerySection,
	}`)

export const LINKTREE_PAGE_QUERY = defineQuery(`
	*[_type == "linktree"][0]{
		heroSection,
    links
}`)

export const SERVICES_QUERY = defineQuery(`
	*[_type == "service"]{
		_id,
		name,
		image,
		"slug": slug.current,
		content,
	}`)

export const TRIP_SERVICE_PAGE_QUERY = defineQuery(`
	*[_type == "tripService"][0]{
		heroSection,
		featuresSection,
		gallerySection,
	}`)

export const FOOTER_QUERY = defineQuery(`
	{
		"policies": *[_type == "policy"]{
			"id": _id, 
			title,
			"slug": slug.current,
			content,
		},
	}
	`)

export const ALL_PLANE_FILTERS_QUERY = defineQuery(`{
  "categories": *[_type == "planeCategory"] | order(order asc) {
    _id,
    name,
    "slug": slug.current
  },
  "manufacturers": *[_type == "planeManufacturer"] | order(name asc) {
    _id,
    name,
    "slug": slug.current
  }
}`)

export const INQUIRY_PAGE_QUERY = defineQuery(`
	*[_type == "inquiry"][0]{
		heroSection,
		formSection
	}
`)

export const EMPTY_LEGS_QUERY = defineQuery(`
	*[_type == "emptyLeg" && departureTime > now()] | order(departureTime asc) {
		_id,
		origin,
		departureTime,
		destination,
		arrivalTime,
		price,
		plane->{
			...,
			"manufacturer": manufacturer->{
				_id,
				name,
				"slug": slug.current
			}
		}
	}
`)

export const FAQ_CHARTER_QUERY = defineQuery(`
	*[_type == "faq" && category == "charter"] {
		_id,
		question,
		answer,
	}
`)

export const SERVICE_QUERY =
  defineQuery(`*[_type == "service" && slug.current == $slug][0]{
  ...,
  "seo": {
    "title": coalesce(seo.title, title, ""),
    "description": coalesce(seo.description,  ""),
    "image": seo.image,
    "noIndex": seo.noIndex == true
  },
  content[]{
    ...,
    _type == "faqs" => {
      ...,
      faqs[]-> {
        _id,
        question,
				answer,
        "text": pt::text(answer)
      }
    }
  }
}`)

export const ABOUT_QUERY = defineQuery(`
	*[_type == "companyDetails"][0]{
		name, 
		stats,
		timeline
	}
`)
