import 'server-only';

import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api';
import {
  type Post,
  type Settings,
  aboutPageQuery,
  contactPageQuery,
  fuelServicePageQuery,
  homePageQuery,
  indexQuery,
  postAndMoreStoriesQuery,
  postBySlugQuery,
  postSlugsQuery,
  servicesPageQuery,
  settingsQuery,
  tripServicePageQuery,
} from 'lib/sanity.queries';
import { createClient } from 'next-sanity';

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null;

export async function getHomePage(): Promise<any> {
  if (client) {
    return (await client.fetch(homePageQuery)) || {};
  }
  return {};
}
export async function getServicesPage(): Promise<any> {
  if (client) {
    return (await client.fetch(servicesPageQuery)) || {};
  }
  return {};
}
export async function getFuelServicePage(): Promise<any> {
  if (client) {
    return (await client.fetch(fuelServicePageQuery)) || {};
  }
  return {};
}
export async function getTripServicePage(): Promise<any> {
  if (client) {
    return (await client.fetch(tripServicePageQuery)) || {};
  }
  return {};
}
export async function getAboutPage(): Promise<any> {
  if (client) {
    return (await client.fetch(aboutPageQuery)) || {};
  }
  return {};
}
export async function getContactPage(): Promise<any> {
  if (client) {
    return (await client.fetch(contactPageQuery)) || {};
  }
  return {};
}

export async function getSettings(): Promise<Settings> {
  if (client) {
    return (await client.fetch(settingsQuery)) || {};
  }
  return {};
}

export async function getAllPosts(): Promise<Post[]> {
  if (client) {
    return (await client.fetch(indexQuery)) || [];
  }
  return [];
}

export async function getAllPostsSlugs(): Promise<Pick<Post, 'slug'>[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(postSlugsQuery)) || [];
    return slugs.map((slug) => ({ slug }));
  }
  return [];
}

export async function getPostBySlug(slug: string): Promise<Post> {
  if (client) {
    return (await client.fetch(postBySlugQuery, { slug })) || ({} as any);
  }
  return {} as any;
}

export async function getPostAndMoreStories(
  slug: string,
  token?: string | null
): Promise<{ post: Post; morePosts: Post[] }> {
  if (projectId) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: token || undefined,
    });
    return await client.fetch(postAndMoreStoriesQuery, { slug });
  }
  return { post: null, morePosts: [] };
}
