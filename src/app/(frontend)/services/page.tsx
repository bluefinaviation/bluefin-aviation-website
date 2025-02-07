import { PortableText } from "@portabletext/react";
import { Image as SanityImage } from "sanity";

import { ServiceCard } from "@/components/services/service-card";
import { PageContainer } from "@/components/shared/pace-container";
import { Container } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionSummary } from "@/components/shared/section-summary";

import { SERVICES_PAGE_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

export default async function ServicesPage() {
  const { data: servicesPageData } = await sanityFetch({
    query: SERVICES_PAGE_QUERY,
  });

  if (!servicesPageData) return null;

  return (
    <PageContainer>
      <Container className="py-16 sm:py-24">
        <div className="text-center">
          <SectionHeading>
            {servicesPageData.heroSection.section.heading}
          </SectionHeading>
          <SectionSummary className="mx-auto text-slate-700">
            <PortableText
              value={servicesPageData.heroSection.section.summary ?? []}
            />
          </SectionSummary>
        </div>
      </Container>

      {servicesPageData.tripService?.card &&
        servicesPageData.fuelService?.card && (
          <Container className="grid max-w-5xl grid-cols-1 grid-rows-2 gap-12 pb-16 sm:pb-24 lg:grid-cols-2 lg:grid-rows-1">
            <ServiceCard
              title={servicesPageData.tripService.card.title ?? ""}
              tagline={servicesPageData.tripService.card.tagline ?? ""}
              slug="/services/trip-support"
              image={servicesPageData.tripService.card.image as SanityImage}
            />
            <ServiceCard
              title={servicesPageData.fuelService.card.title ?? ""}
              tagline={servicesPageData.fuelService.card.tagline ?? ""}
              slug="/services/fuel-support"
              image={servicesPageData.fuelService.card.image as SanityImage}
            />
          </Container>
        )}
    </PageContainer>
  );
}
