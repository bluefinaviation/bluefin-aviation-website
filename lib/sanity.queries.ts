import { groq } from 'next-sanity';

export const homePageQuery = groq`
*[_type == "homePage"][0]{
	heroSection{
		section,
		"video": video.asset->url
	},
	servicesSection{
		section,
		"tripService": *[_type == "tripServicePage"][0]{
			card
		},
		"fuelService": *[_type == "fuelServicePage"][0]{
			card
		},
	},
	testimonialsSection,
	partnersSection,
	contactSection,
	newsletterSection,
}`;

export const servicesPageQuery = groq`
	*[_type == "servicesPage"][0]{
		title,
		heroSection,
		"tripService": *[_type == "tripServicePage"][0]{
			card
		},
		"fuelService": *[_type == "fuelServicePage"][0]{
			card
		},	
 }`;
export const tripServicePageQuery = groq`
	*[_type == "tripServicePage"][0]{
		heroSection,
		featuresSection,
		gallerySection,
 }`;
export const fuelServicePageQuery = groq`
	*[_type == "fuelServicePage"][0]{
		heroSection,
		featuresSection,
		gallerySection,
 }`;

export const aboutPageQuery = groq`
	*[_type == "aboutPage"][0]{
		storySection,
		teamSection,
		statsSection
}`;
export const contactPageQuery = groq`
	*[_type == "contactPage"][0]{
		contactSection,
		locationSection,
}`;

const postFields = groq`
  _id,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`;

export const settingsQuery = groq`*[_type == "settings"][0]`;

export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`;

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`;

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;

export interface Author {
  name?: string;
  picture?: any;
}

export interface Post {
  _id: string;
  title?: string;
  coverImage?: any;
  date?: string;
  excerpt?: string;
  author?: Author;
  slug?: string;
  content?: any;
}

export interface Settings {
  title?: string;
  description?: string;
}
