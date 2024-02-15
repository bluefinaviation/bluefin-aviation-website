import type { EncodeDataAttributeCallback } from '@sanity/react-loader/rsc'

import { FuelFeaturesSection } from '@/components/services/fuel-features-section'
import { HeroSection } from '@/components/shared/hero-section'
import { PageContainer } from '@/components/shared/pace-container'
import { Container } from '@/components/shared/section-container'
import { Slider } from '@/components/shared/slider'
import { FuelServicePagePayload } from '@/types'

export interface FuelServicePageProps {
  data: FuelServicePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export const FuelServicePage = ({
  data,
  encodeDataAttribute
}: FuelServicePageProps) => {
  const {
    heroSection = {
      section: {},
      summary: '',
      label: ''
    },
    featuresSection = {},
    gallerySection = {}
  } = data ?? {}
  return (
    <PageContainer>
      {/* @ts-expect-error */}
      <HeroSection hero={heroSection.section} />
      <Container>
        <div id='features-fuel'>
          {/* @ts-expect-error */}
          <FuelFeaturesSection featuresSection={featuresSection} />
        </div>
      </Container>
      {/* @ts-expect-error */}
      {gallerySection.gallery.length !== 0 && (
        <div className='bg-slate-100 py-8 sm:py-16 lg:py-24'>
          <Container>
            {/* @ts-expect-error */}
            <Slider gallery={gallerySection.gallery} />
          </Container>
        </div>
      )}
    </PageContainer>
  )
}
