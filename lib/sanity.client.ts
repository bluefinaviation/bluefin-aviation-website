import 'server-only';

import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, useCdn } from '@/lib/sanity.api';
import {
  aboutPageQuery,
  contactPageQuery,
  fuelServicePageQuery,
  homePageQuery,
  homePageTitleQuery,
  pagesBySlugQuery,
  projectBySlugQuery,
  servicesPageQuery,
  settingsQuery,
  tripServicePageQuery,
} from '@/lib/sanity.queries';
import type {
  HomePagePayload,
  PagePayload,
  ProjectPayload,
  SettingsPayload,
} from '@/types/sanity';

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const sanityClient = (token?: string | null) => {
  return projectId
    ? createClient({ projectId, dataset, apiVersion, useCdn, token: token! })
    : null;
};

export async function getHomePage({
  token,
}: {
  token?: string | null;
}): Promise<HomePagePayload | undefined> {
  return await sanityClient(token)?.fetch(homePageQuery);
}

export async function getServicesPage({
  token,
}: {
  token?: string | null;
}): Promise<any> {
  return await sanityClient(token)?.fetch(servicesPageQuery);
}

export async function getTripServicePage({
  token,
}: {
  token?: string | null;
}): Promise<any> {
  return await sanityClient(token)?.fetch(tripServicePageQuery);
}

export async function getFuelServicePage({
  token,
}: {
  token?: string | null;
}): Promise<any> {
  return await sanityClient(token)?.fetch(fuelServicePageQuery);
}

export async function getAboutPage({
  token,
}: {
  token?: string | null;
}): Promise<any | undefined> {
  return await sanityClient(token)?.fetch(aboutPageQuery);
}

export async function getContactPage({
  token,
}: {
  token?: string | null;
}): Promise<any | undefined> {
  return await sanityClient(token)?.fetch(contactPageQuery);
}

// -------------------------
// -------------------------
// -------------------------
// -------------------------

export async function getHomePageTitle({
  token,
}: {
  token?: string | null;
}): Promise<string | undefined> {
  return await sanityClient(token)?.fetch(homePageTitleQuery);
}

export async function getPageBySlug({
  slug,
  token,
}: {
  slug: string;
  token?: string | null;
}): Promise<PagePayload | undefined> {
  return await sanityClient(token)?.fetch(pagesBySlugQuery, { slug });
}

export async function getProjectBySlug({
  slug,
  token,
}: {
  slug: string;
  token?: string | null;
}): Promise<ProjectPayload | undefined> {
  return await sanityClient(token)?.fetch(projectBySlugQuery, { slug });
}

export async function getSettings({
  token,
}: {
  token?: string | null;
}): Promise<SettingsPayload | undefined> {
  return await sanityClient(token)?.fetch(settingsQuery);
}
