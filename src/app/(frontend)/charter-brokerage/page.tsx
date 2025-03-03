import { Metadata } from "next";

import { PlaneFilters } from "@/components/broker/planes-filters";
import { Container } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { PlanesGrid } from "@/components/broker/planes-grid";
import { PageHero } from "@/components/shared/page-hero";
import { StickyNav } from "@/components/shared/sticky-nav";
import { EmptyLegs } from "@/components/broker/empty-legs";

import { sanityFetch } from "@/sanity/lib/live";
import { ALL_PLANE_FILTERS_QUERY, FLEET_QUERY } from "@/sanity/lib/queries";
import {
  FLEET_QUERYResult,
  ALL_PLANE_FILTERS_QUERYResult,
} from "@/sanity/types";

export const metadata: Metadata = {
  title: "Charter Brokerage",
};

interface CharterBrokeragePageProps {
  searchParams: Promise<{
    category?: string;
    manufacturer?: string;
    tab?: string;
  }>;
}

// Type adapter function to transform Sanity data to match PlaneFilters component expectations
function adaptPlaneFilters(data: ALL_PLANE_FILTERS_QUERYResult) {
  return {
    categories: data.categories.map((category) => ({
      _id: category._id,
      name: category.name || "", // Convert null to empty string
      slug: category.slug || "", // Convert null to empty string
    })),
    manufacturers: data.manufacturers.map((manufacturer) => ({
      _id: manufacturer._id,
      name: manufacturer.name || "", // Convert null to empty string
      slug: manufacturer.slug || "", // Convert null to empty string
    })),
  };
}

export default async function CharterBrokeragePage({
  searchParams,
}: CharterBrokeragePageProps) {
  const { category, manufacturer, tab = "fleet" } = await searchParams;

  const { data: fleetData } = await sanityFetch({
    query: FLEET_QUERY,
    params: {
      category: category || null,
      manufacturer: manufacturer || null,
    },
  });

  const { data: allPlaneFilters } = await sanityFetch({
    query: ALL_PLANE_FILTERS_QUERY,
  });

  // Transform the fleetData to match the expected format for PlanesGrid
  const formattedFleetData = fleetData.map((plane: FLEET_QUERYResult[0]) => {
    // Create a plane object with the required fields that matches PlaneCardData type
    return {
      _id: plane._id,
      _type: "plane" as const, // Use const assertion to ensure it's exactly "plane"
      _createdAt: "",
      _updatedAt: "",
      _rev: "",
      model: plane.model || "",
      code: plane.code || "",
      capacity: plane.capacity || 0,
      speed: plane.speed || 0,
      range: plane.range || 0,
      image: plane.image || undefined,
      // Convert category to match the expected reference format with literal "reference" type
      category: plane.category
        ? {
            _ref: plane.category._id,
            _type: "reference" as const, // Use const assertion to ensure it's exactly "reference"
          }
        : undefined,
      // Convert manufacturer object to string (manufacturer name)
      manufacturer: plane.manufacturer?.name || "",
    };
  });

  const hasFilters = Boolean(category || manufacturer);

  // Adapt the plane filters data to match the expected type
  const adaptedPlaneFilters = adaptPlaneFilters(allPlaneFilters);

  return (
    <div>
      <PageHero
        heading="Charter Brokerage"
        summary="Seamless private jet charters, tailored to your needs—with
            cost-efficiency, safety, and luxury at every step."
        image="/images/charter-brokerage.webp"
        imageAlt="Charter Brokerage"
      />
      <StickyNav className="top-16 sm:top-20 lg:top-22" />
      <Container className="py-16 sm:py-24">
        {tab === "fleet" ? (
          <>
            <SectionHeading>Our Fleet</SectionHeading>
            <PlaneFilters allPlaneFilters={adaptedPlaneFilters} />
            <PlanesGrid planes={formattedFleetData} hasFilters={hasFilters} />
          </>
        ) : (
          <EmptyLegs />
        )}
      </Container>
    </div>
  );
}
