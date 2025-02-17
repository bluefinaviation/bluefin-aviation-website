import { PlaneFilters } from "@/components/broker/planes-filters";
import { Container } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { PlanesGrid } from "@/components/broker/planes-grid";

import { sanityFetch } from "@/sanity/lib/live";
import { ALL_PLANE_FILTERS_QUERY, FLEET_QUERY } from "@/sanity/lib/queries";

export default async function BrokerageFleetPage({
  searchParams,
}: {
  searchParams: { category: string; manufacturer: string };
}) {
  const { category, manufacturer } = searchParams;

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
    <div className="pb-20">
      <Container>
        <SectionHeading>Our Fleet</SectionHeading>
        <PlaneFilters allPlaneFilters={allPlaneFilters} />
        <PlanesGrid planes={fleetData} hasFilters={hasFilters} />
      </Container>
    </div>
  );
}
