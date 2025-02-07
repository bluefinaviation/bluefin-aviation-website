import { Metadata } from "next";
import { notFound } from "next/navigation";

import { TripFeatureSection } from "@/components/services/trip-feature-section";
import { HeroSection } from "@/components/shared/hero-section";
import { PageContainer } from "@/components/shared/pace-container";
import { Slider } from "@/components/shared/slider";

import { TRIP_SERVICE_PAGE_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

export const metadata: Metadata = {
  title: "Trip Support",
};

export default async function TripServicePage() {
  const { data: tripServiceData } = await sanityFetch({
    query: TRIP_SERVICE_PAGE_QUERY,
  });

  if (!tripServiceData) {
    notFound();
  }

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
