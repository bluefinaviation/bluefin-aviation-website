import { FuelFeaturesSection } from '@/components/services/fuel-features-section'
import { HeroSection } from '@/components/shared/hero-section'
import { PageContainer } from '@/components/shared/pace-container'
import { Container } from '@/components/shared/section-container'
import { Slider } from '@/components/shared/slider'

import { sanityFetch } from '@/sanity/lib/fetch'
import { fuelServicePageQuery } from '@/sanity/lib/queries'

export default async function FuelServicePage() {
  const fuelServiceData = await sanityFetch({
    query: fuelServicePageQuery
  })

  if (!fuelServiceData) return null

  return (
    <PageContainer>
      <HeroSection hero={fuelServiceData.heroSection.section} />
      <Container>
        <div id='features-fuel'>
          <FuelFeaturesSection
            featuresSection={fuelServiceData.featuresSection}
          />
        </div>
      </Container>
      {fuelServiceData.gallerySection.gallery.length !== 0 && (
        <div className='bg-slate-100 py-8 sm:py-16 lg:py-24'>
          <Container>
            <Slider gallery={fuelServiceData.gallerySection.gallery} />
          </Container>
        </div>
      )}
    </PageContainer>
  )
}
