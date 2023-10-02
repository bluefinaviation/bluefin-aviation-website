import { PortableText } from "@portabletext/react"

import { PageContainer } from "@/components/global/pace-container"
import { Container } from "@/components/global/section-container"
import { SectionHeading } from "@/components/global/section-heading"
import { SectionSummary } from "@/components/global/section-summary"
import { ServiceCard } from "@/components/services/service-card"

export const ServicesPage = ({ data }: { data: any }) => {
  return (
    <PageContainer>
      <Container className="py-16 sm:py-24">
        <div className="text-center">
          <SectionHeading>{data.heroSection.section.heading}</SectionHeading>
          <SectionSummary className="mx-auto text-slate-700">
            <PortableText value={data.heroSection.section.summary} />
          </SectionSummary>
        </div>
      </Container>

      <Container className="grid max-w-5xl grid-cols-1 grid-rows-2 gap-12 pb-16 sm:pb-24 lg:grid-cols-2 lg:grid-rows-1">
        <ServiceCard
          title={data.tripService.card.title}
          tagline={data.tripService.card.tagline}
          slug="/services/trip-support"
          image={data.tripService.card.image}
        />
        <ServiceCard
          title={data.fuelService.card.title}
          tagline={data.fuelService.card.tagline}
          slug="/services/fuel-support"
          image={data.fuelService.card.image}
        />
      </Container>
    </PageContainer>
  )
}
