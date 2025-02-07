import { Metadata } from "next";

import { FuelFeaturesSection } from "@/components/services/fuel-features-section";
import { HeroSection } from "@/components/shared/hero-section";
import { PageContainer } from "@/components/shared/pace-container";
import { Container } from "@/components/shared/section-container";
import { Slider } from "@/components/shared/slider";

import { FUEL_SERVICE_PAGE_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

export const metadata: Metadata = {
  title: "Fuel Support",
};

export default async function FuelServicePage() {
  const { data: fuelServiceData } = await sanityFetch({
    query: FUEL_SERVICE_PAGE_QUERY,
  });

  if (!fuelServiceData) return null;

  return (
    <PageContainer>
      <HeroSection hero={fuelServiceData.heroSection.section} />
      <Container>
        <div id="features-fuel">
          <FuelFeaturesSection
            featuresSection={{
              section: fuelServiceData.featuresSection.section,
              features: fuelServiceData.featuresSection.features,
            }}
          />
        </div>
      </Container>
      {fuelServiceData.gallerySection.gallery.length > 0 && (
        <div className="bg-slate-100 py-8 sm:py-16 lg:py-24">
          <Container>
            <Slider gallery={fuelServiceData.gallerySection.gallery} />
          </Container>
        </div>
      )}
    </PageContainer>
  );
}
