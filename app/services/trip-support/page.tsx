import { TripFeatureSection } from '@/components/services/TripFeatureSection';
import { Container } from '@/components/shared/Container';
import { HeroSection } from '@/components/shared/HeroSection';
import { PageContainer } from '@/components/shared/PageContainer';
import { Slider } from '@/components/shared/Slider';
import { getTripServicePage } from '@/lib/sanity.client';

export default async function TripSupportRoute() {
  const [tripServicePageData] = await Promise.all([getTripServicePage()]);
  return (
    <PageContainer>
      <HeroSection hero={tripServicePageData.heroSection.section} />

      <Container>
        <div id="features-trip">
          <TripFeatureSection
            featuresSection={tripServicePageData.featuresSection}
          />
        </div>
      </Container>

      <div className="bg-gray-100 py-8 sm:py-16 lg:py-24">
        <Slider gallery={tripServicePageData.gallerySection.gallery} />
      </div>
    </PageContainer>
  );
}

export const revalidate = 1;
