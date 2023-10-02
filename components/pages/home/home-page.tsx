import Link from "next/link"

import type { HomePagePayload } from "types"
import { resolveHref } from "@/lib/sanity.links"
import { PageContainer } from "@/components/global/pace-container"
import { ContactSection } from "@/components/pages/home/contact-section"
import { HeroSection } from "@/components/pages/home/hero-section"
import { PartnersSection } from "@/components/pages/home/partners-section"
import { ServicesSection } from "@/components/pages/home/services-section"
import { TestimonialsSection } from "@/components/pages/home/testimonials-section"

export interface HomePageProps {
  data: HomePagePayload | null
}

export const HomePage = ({ data }: HomePageProps) => {
  // // const { overview = [], showcaseProjects = [], title = "" } = data ?? {}

  const {
    heroSection = null,
    servicesSection = null,
    partnersSection = null,
    contactSection = null,
    testimonialsSection = null,
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
