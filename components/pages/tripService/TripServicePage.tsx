import { HeroSection } from '@/components/global/HeroSection';
import { PageContainer } from '@/components/global/PageContainer';
import { Slider } from '@/components/global/Slider';
import { TripFeatureSection } from '@/components/services/TripFeatureSection';

export const TripServicePage = ({ data }: { data: any }) => {
  return (
    <PageContainer>
      <HeroSection hero={data.heroSection.section} />

      <TripFeatureSection featuresSection={data.featuresSection} />

      <div className="bg-slate-100 py-8 sm:py-16 lg:py-24">
        <Slider gallery={data.gallerySection.gallery} />
      </div>
    </PageContainer>
  );
};
