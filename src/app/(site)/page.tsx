import { sanityFetch } from '@/sanity/lib/fetch'

import { ContactSection } from '@/components/pages/home/contact-section'
import { HeroSection } from '@/components/pages/home/hero-section'
import { PartnersSection } from '@/components/pages/home/partners-section'
import { ServicesSection } from '@/components/pages/home/services-section'
import { TestimonialsSection } from '@/components/pages/home/testimonials-section'
import { PageContainer } from '@/components/shared/pace-container'

import { homePageQuery } from '@/sanity/lib/queries'

export default async function HomePage() {
  const homePageData = await sanityFetch({
    query: homePageQuery
  })

  if (!homePageData) return null

  console.log(JSON.stringify(homePageData, null, 2), 'xxx')

  return (
    <PageContainer>
      <HeroSection heroSection={homePageData.heroSection!} />
      <ServicesSection
        servicesSection={homePageData.servicesSection?.section!}
        tripService={homePageData.servicesSection?.tripService.card!}
        fuelService={homePageData.servicesSection?.fuelService.card!}
      />
      <PartnersSection partnersSection={homePageData.partnersSection!} />
      <ContactSection contactSection={homePageData.contactSection!} />
      <TestimonialsSection
        testimonialsSection={homePageData.testimonialsSection!}
      />
    </PageContainer>
  )
}
