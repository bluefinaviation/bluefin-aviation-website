import { groq } from 'next-sanity';

export const homePageQuery = groq`
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
}`;

export const aboutPageQuery = groq`
	*[_type == "about"][0]{
		storySection,
		teamSection,
		statsSection
}`;

export const servicesPageQuery = groq`
	*[_type == "services"][0]{
		title,
		heroSection,
		"tripService": *[_type == "tripService"][0]{
			card
		},
		"fuelService": *[_type == "fuelService"][0]{
			card
		},	
 }`;

export const tripServicePageQuery = groq`
	*[_type == "tripService"][0]{
		heroSection,
		featuresSection,
		gallerySection,
 }`;

export const fuelServicePageQuery = groq`
*[_type == "fuelService"][0]{
	heroSection,
	featuresSection,
	gallerySection,
}`;

export const contactPageQuery = groq`
	*[_type == "contact"][0]{
		contactSection,
		locationSection
}`;

export const homePageTitleQuery = groq`
  *[_type == "home"][0].title
`;

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    slug,
    title,
  }
`;

export const projectBySlugQuery = groq`
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
`;

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage,
  }
`;
