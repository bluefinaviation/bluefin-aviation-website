import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageBuilder } from "@/components/page-builder";

import { sanityFetch } from "@/sanity/lib/live";
import { SERVICE_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

type RouteProps = {
  params: Promise<{ slug: string }>;
};

const getService = async (params: RouteProps["params"]) =>
  sanityFetch({
    query: SERVICE_QUERY,
    params: await params,
  });

export async function generateMetadata({
  params,
}: RouteProps): Promise<Metadata> {
  const { data: service } = await getService(params);

  if (!service) {
    notFound();
  }

  const metadata: Metadata = {
    title: service.seo.title || service.name,
    description: service.seo.description,
  };

  metadata.openGraph = {
    images: {
      url: service.seo.image
        ? urlFor(service.seo.image).width(1200).height(630).url()
        : `/api/og?id=${service._id}`,
      width: 1200,
      height: 630,
    },
  };

  if (service.seo.noIndex) {
    metadata.robots = "noindex";
  }

  return metadata;
}

export default async function ServicePage({ params }: RouteProps) {
  const { data: service } = await getService(params);

  return service?.content ? (
    <PageBuilder
      documentId={service._id}
      documentType={service._type}
      content={service.content}
    />
  ) : null;
}
