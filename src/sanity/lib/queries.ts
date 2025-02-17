import { defineQuery } from "next-sanity";

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
}`);

export const FLEET_QUERY = defineQuery(`
	*[_type == "plane" && 
		(($category == null) || category->slug.current == $category) &&
		(($manufacturer == null) || manufacturer->slug.current == $manufacturer)
	]{
		_id,
		model,
		"manufacturer": manufacturer->slug.current,
		"category": category->slug.current,
		code,
		capacity,
		speed,
		range,
		image
	}
`);

export const ABOUT_PAGE_QUERY = defineQuery(`
	*[_type == "about"][0]{
		storySection,
		teamSection,
		statsSection
}`);

export const CONTACT_PAGE_QUERY = defineQuery(`
	*[_type == "contact"][0]{
		contactSection,
		locationSection
}`);

export const POLICY_BY_SLUG_QUERY = defineQuery(`
  *[_type == "policy" && slug.current == $slug][0] {
    "id": _id,
    "updatedAt": _updatedAt,
    title,
    "slug": slug.current,
    content,
  }
`);

export const FUEL_SERVICE_PAGE_QUERY = defineQuery(`
	*[_type == "fuelService"][0]{
		heroSection,
		featuresSection,
		gallerySection,
	}`);

export const LINKTREE_PAGE_QUERY = defineQuery(`
	*[_type == "linktree"][0]{
		heroSection,
    links
}`);

export const SERVICES_PAGE_QUERY = defineQuery(`
	*[_type == "services"][0]{
		title,
		heroSection,
		"tripService": *[_type == "tripService"][0]{
			card
		},
		"fuelService": *[_type == "fuelService"][0]{
			card
		},
	}`);

export const TRIP_SERVICE_PAGE_QUERY = defineQuery(`
	*[_type == "tripService"][0]{
		heroSection,
		featuresSection,
		gallerySection,
	}`);

export const FOOTER_QUERY = defineQuery(`
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
	`);

export const ALL_PLANE_FILTERS_QUERY = defineQuery(`{
  "categories": *[_type == "planeCategory"]{
    _id,
    name,
    "slug": slug.current
  },
  "manufacturers": *[_type == "planeManufacturer"]{
    _id,
    name,
    "slug": slug.current
  }
}`);

export const INQUIRY_PAGE_QUERY = defineQuery(`
	*[_type == "inquiry"][0]{
		heroSection,
		formSection
	}
`);

export const NEWSLETTER_PAGE_QUERY = defineQuery(`
	*[_type == "newsletter"][0]{
		heroSection,
		formSection
	}
`);

export const EMPTY_LEGS_QUERY = defineQuery(`
	*[_type == "emptyLeg"] {
		from,
		to,
		departureTime,
		arrivalTime,
	}
`);
