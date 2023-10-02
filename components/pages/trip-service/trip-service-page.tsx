import { TripServicePagePayload } from "@/types"

import { TripFeatureSection } from "@/components/services/trip-feature-section"
import { HeroSection } from "@/components/shared/hero-section"
import { PageContainer } from "@/components/shared/pace-container"
import { Slider } from "@/components/shared/slider"

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
