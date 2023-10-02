import { TripServicePagePayload } from "@/types"

import { HeroSection } from "@/components/global/hero-section"
import { PageContainer } from "@/components/global/pace-container"
import { Slider } from "@/components/global/slider"
import { TripFeatureSection } from "@/components/services/trip-feature-section"

export interface TripServicePageProps {
  data: TripServicePagePayload | null
}

export const TripServicePage = ({ data }: TripServicePageProps) => {
  const {
    heroSection = null,
    featuresSection = null,
    gallerySection = null,
  } = data ?? {}

  return (
    <PageContainer>
      <HeroSection hero={heroSection?.section!} />

      <TripFeatureSection featuresSection={featuresSection!} />

      <div className="bg-slate-100 py-8 sm:py-16 lg:py-24">
        <Slider gallery={gallerySection?.gallery!} />
      </div>
    </PageContainer>
  )
}
