import { FuelFeaturesSection } from '@/components/services/FuelFeaturesSection';
import { Container } from '@/components/shared/Container';
import { HeroSection } from '@/components/shared/HeroSection';
import { PageContainer } from '@/components/shared/PageContainer';
import { Slider } from '@/components/shared/Slider';
import { getFuelServicePage } from '@/lib/sanity.client';

export default async function FuelSupportRoute() {
  const [fuelServicePageData] = await Promise.all([getFuelServicePage()]);
  return (
    <PageContainer
      metaTitle="Fuel Support Services"
      metaDescription="Bluefin Aviation provides comprehensive and customized aviation solutions for 600+ FBOs and thousands of other aviation customers worldwide. We offer domestic and international fuel 24/7."
    >
      <HeroSection hero={fuelServicePageData.heroSection.section} />
      <Container>
        <div id="features-fuel">
          <FuelFeaturesSection
            featuresSection={fuelServicePageData.featuresSection}
          />
        </div>
      </Container>
      {fuelServicePageData.gallerySection.gallery.length !== 0 && (
        <div className="bg-gray-100 py-8 sm:py-16 lg:py-24">
          <Container>
            <Slider gallery={fuelServicePageData.gallerySection.gallery} />
          </Container>
        </div>
      )}
    </PageContainer>
  );
}

export const revalidate = 1;
