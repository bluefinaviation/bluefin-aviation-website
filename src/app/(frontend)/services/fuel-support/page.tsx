import { Metadata } from "next";

import { FuelFeaturesSection } from "@/components/services/fuel-features-section";
import { HeroSection } from "@/components/shared/hero-section";
import { PageContainer } from "@/components/shared/pace-container";
import { Container } from "@/components/shared/section-container";
import { Slider } from "@/components/shared/slider";

import { client } from "@/sanity/lib/client";
import { FUEL_SERVICE_PAGE_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Fuel Support",
};

export default async function FuelServicePage() {
  const fuelServiceData = await client.fetch(
    FUEL_SERVICE_PAGE_QUERY,
    {},
    { next: { revalidate: 60 } }
  );

  if (
    !fuelServiceData ||
    !fuelServiceData.heroSection?.section ||
    !fuelServiceData.featuresSection?.section ||
    !fuelServiceData.featuresSection?.features ||
    !fuelServiceData.gallerySection?.gallery
  )
    return null;

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
