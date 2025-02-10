import { Metadata } from "next";

import { TripFeatureSection } from "@/components/services/trip-feature-section";
import { HeroSection } from "@/components/shared/hero-section";
import { PageContainer } from "@/components/shared/pace-container";
import { Slider } from "@/components/shared/slider";

import { client } from "@/sanity/lib/client";
import { TRIP_SERVICE_PAGE_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Trip Support",
};

export default async function TripServicePage() {
  const tripServiceData = await client.fetch(
    TRIP_SERVICE_PAGE_QUERY,
    {},
    { next: { revalidate: 60 } }
  );

  if (!tripServiceData) return null;

  return (
    <PageContainer>
      <HeroSection hero={tripServiceData.heroSection?.section} />

      <TripFeatureSection featuresSection={tripServiceData.featuresSection} />

      <div className="bg-slate-100 py-8 sm:py-16 lg:py-24">
        <Slider gallery={tripServiceData.gallerySection?.gallery ?? []} />
      </div>
    </PageContainer>
  );
}
