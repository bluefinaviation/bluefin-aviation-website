import { notFound } from "next/navigation";

import { ContactSection } from "@/components/pages/home/contact-section";
import { HeroSection } from "@/components/pages/home/hero-section";
import { PartnersSection } from "@/components/pages/home/partners-section";
import { ServicesSection } from "@/components/pages/home/services-section";
import { TestimonialsSection } from "@/components/pages/home/testimonials-section";
import { PageContainer } from "@/components/shared/pace-container";
import { BrokerSection } from "@/components/broker/broker-section";

import { sanityFetch } from "@/sanity/lib/live";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";

export default async function HomePage() {
  const { data: homePageData } = await sanityFetch({
    query: HOME_PAGE_QUERY,
  });

  if (!homePageData) {
    notFound();
  }

  return (
    <PageContainer>
      <HeroSection heroSection={homePageData.heroSection!} />
      <ServicesSection
        servicesSection={homePageData.servicesSection!.section!}
        tripService={homePageData.servicesSection!.tripService!.card!}
        fuelService={homePageData.servicesSection!.fuelService!.card!}
      />
      <BrokerSection brokerSection={homePageData.brokerSection} />
      <TestimonialsSection
        testimonialsSection={homePageData.testimonialsSection}
      />
      <ContactSection contactSection={homePageData.contactSection!} />
      <PartnersSection partnersSection={homePageData.partnersSection!} />
    </PageContainer>
  );
}
