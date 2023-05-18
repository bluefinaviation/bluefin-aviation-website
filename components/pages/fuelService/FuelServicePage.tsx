import { Container } from '@/components/global/Container';
import { HeroSection } from '@/components/global/HeroSection';
import { PageContainer } from '@/components/global/PageContainer';
import { Slider } from '@/components/global/Slider';
import { FuelFeaturesSection } from '@/components/services/FuelFeaturesSection';

export const FuelServicePage = ({ data }: { data: any }) => {
  return (
    <PageContainer>
      <HeroSection hero={data.heroSection.section} />
      <Container>
        <div id="features-fuel">
          <FuelFeaturesSection featuresSection={data.featuresSection} />
        </div>
      </Container>
      {data.gallerySection.gallery.length !== 0 && (
        <div className="py-8 sm:py-16 lg:py-24">
          <Container>
            <Slider gallery={data.gallerySection.gallery} />
          </Container>
        </div>
      )}
    </PageContainer>
  );
};
