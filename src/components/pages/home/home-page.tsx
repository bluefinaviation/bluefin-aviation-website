import type { EncodeDataAttributeCallback } from '@sanity/react-loader'

import { ContactSection } from '@/components/pages/home/contact-section'
import { HeroSection } from '@/components/pages/home/hero-section'
import { PartnersSection } from '@/components/pages/home/partners-section'
import { ServicesSection } from '@/components/pages/home/services-section'
import { TestimonialsSection } from '@/components/pages/home/testimonials-section'
import { PageContainer } from '@/components/shared/pace-container'
import type { HomePagePayload } from '@/types'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export const HomePage = ({ data, encodeDataAttribute }: HomePageProps) => {
  const {
    heroSection = null,
    servicesSection = null,
    partnersSection = null,
    contactSection = null,
    testimonialsSection = null
  } = data ?? {}

  return (
    <PageContainer>
      <HeroSection heroSection={heroSection!} />
      <ServicesSection
        servicesSection={servicesSection?.section!}
        tripService={servicesSection?.tripService.card!}
        fuelService={servicesSection?.fuelService.card!}
      />
      <PartnersSection partnersSection={partnersSection!} />
      <ContactSection contactSection={contactSection!} />
      <TestimonialsSection testimonialsSection={testimonialsSection!} />
    </PageContainer>
  )
}
