import { PortableText } from '@portabletext/react';

import { ServiceCard } from '@/components/services/ServiceCard';
import { Container } from '@/components/shared/Container';
import { PageContainer } from '@/components/shared/PageContainer';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { SectionSummary } from '@/components/shared/SectionSummary';
import { getServicesPage } from '@/lib/sanity.client';

export default async function ServicesRoute() {
  const [servicesPageData] = await Promise.all([getServicesPage()]);
  return (
    <PageContainer
      metaTitle="Services"
      metaDescription="Bluefin Aviation management concept offers top quality services for your aircraft needs and within your budget."
    >
      <Container className="py-16 sm:py-24">
        <div className="text-center">
          <SectionHeading>
            {servicesPageData.heroSection.section.heading}
          </SectionHeading>
          <SectionSummary className="mx-auto">
            <PortableText
              value={servicesPageData.heroSection.section.summary}
            />
          </SectionSummary>
        </div>
      </Container>

      <Container className="grid max-w-5xl grid-cols-1 grid-rows-2 gap-12 pb-16 sm:pb-24 lg:grid-cols-2 lg:grid-rows-1">
        <ServiceCard
          title={servicesPageData.tripService.card.title}
          tagline={servicesPageData.tripService.card.tagline}
          slug="/services/trip-support"
          image={servicesPageData.tripService.card.image}
        />
        <ServiceCard
          title={servicesPageData.fuelService.card.title}
          tagline={servicesPageData.fuelService.card.tagline}
          slug="/services/fuel-support"
          image={servicesPageData.fuelService.card.image}
        />
      </Container>
    </PageContainer>
  );
}

export const revalidate = 1;
