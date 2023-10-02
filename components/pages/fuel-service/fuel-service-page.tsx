import { FuelServicePagePayload } from "@/types"

import { FuelFeaturesSection } from "@/components/services/fuel-features-section"
import { HeroSection } from "@/components/shared/hero-section"
import { PageContainer } from "@/components/shared/pace-container"
import { Container } from "@/components/shared/section-container"
import { Slider } from "@/components/shared/slider"

export interface FuelServicePageProps {
  data: FuelServicePagePayload | null
}

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
        <div className="bg-slate-100 py-8 sm:py-16 lg:py-24">
          <Container>
            <Slider gallery={data.gallerySection.gallery} />
          </Container>
        </div>
      )}
    </PageContainer>
  )
}
