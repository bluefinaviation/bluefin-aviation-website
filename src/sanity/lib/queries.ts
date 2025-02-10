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

export const PLANE_QUERY = defineQuery(`
	*[_type == "plane" && slug.current == $slug][0] {
		model,
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
		_id,
		from,
		to,
		departureTime,
		arrivalTime,
		plane,
		seatsAvailable,
		originalPrice,
		discountedPrice
	}
`);

export const ALL_PLANE_CATEGORIES_QUERY = defineQuery(`
  *[_type == "planeCategory"]{
    _id,
    name,
    "slug": slug.current
  }
`);

export const ALL_PLANE_MANUFACTURERS_QUERY = defineQuery(`
  *[_type == "planeManufacturer"]{
    _id,
    name,
    "slug": slug.current
  }
`);

export const FILTERED_PLANES_QUERY = defineQuery(`
  *[_type == "plane" && defined(slug.current)
    && (($category == null) || category->slug.current == $category)
    && (($manufacturer == null) || manufacturer->slug.current == $manufacturer)
  ] | order(model asc) {
    _id,
    model,
    "slug": slug.current,
    "manufacturer": manufacturer->name,
    "category": category->name,
    code,
    capacity,
    speed,
    range,
    image
  }
`);
