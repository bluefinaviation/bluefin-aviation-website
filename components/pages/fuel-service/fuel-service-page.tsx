import { FuelServicePagePayload } from "@/types"

import { HeroSection } from "@/components/global/hero-section"
import { PageContainer } from "@/components/global/pace-container"
import { Container } from "@/components/global/section-container"
import { Slider } from "@/components/global/slider"
import { FuelFeaturesSection } from "@/components/services/fuel-features-section"

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
