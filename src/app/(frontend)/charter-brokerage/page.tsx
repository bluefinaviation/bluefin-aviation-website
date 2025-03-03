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

export const metadata: Metadata = {
  title: "Charter Brokerage",
};

export default async function CharterBrokeragePage({
  searchParams,
}: {
  searchParams: { category?: string; manufacturer?: string; tab?: string };
}) {
  const { category, manufacturer, tab = "fleet" } = searchParams;

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

  const hasFilters = Boolean(category || manufacturer);

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
            <PlaneFilters allPlaneFilters={allPlaneFilters} />
            <PlanesGrid planes={fleetData} hasFilters={hasFilters} />
          </>
        ) : (
          <EmptyLegs />
        )}
      </Container>
    </div>
  );
}
