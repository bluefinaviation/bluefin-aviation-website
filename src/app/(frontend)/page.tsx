import { ContactSection } from "@/components/pages/home/contact-section";
import { HeroSection } from "@/components/pages/home/hero-section";
import { PartnersSection } from "@/components/pages/home/partners-section";
import { ServicesSection } from "@/components/pages/home/services-section";
import { TestimonialsSection } from "@/components/pages/home/testimonials-section";
import { PageContainer } from "@/components/shared/pace-container";
// // import { BrokerSection } from "@/components/broker/broker-section";

import { client } from "@/sanity/lib/client";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";
import {
  Section,
  Card,
  Partner,
  Testimonial,
  ContactItem,
} from "@/sanity/types";

interface HomePageData {
  heroSection: {
    section: Section;
    video: string;
  };
  servicesSection: {
    section: Section;
    tripService: {
      card: Card;
    };
    fuelService: {
      card: Card;
    };
  };
  testimonialsSection: {
    section: Section;
    testimonials: Testimonial[];
  };
  partnersSection: {
    section: Section;
    partners: Partner[];
  };
  contactSection: {
    section: Section;
    contacts: ContactItem[];
  };
  brokerSection: {
    section: Section;
  };
}

export default async function HomePage() {
  const homePageData = await client.fetch<HomePageData>(
    HOME_PAGE_QUERY,
    {},
    { next: { revalidate: 60 } }
  );

  if (!homePageData) return null;

  return (
    <PageContainer>
      <HeroSection heroSection={homePageData.heroSection} />
      <PartnersSection partnersSection={homePageData.partnersSection} />
      <ServicesSection
        servicesSection={homePageData.servicesSection.section}
        tripService={homePageData.servicesSection.tripService.card}
        fuelService={homePageData.servicesSection.fuelService.card}
      />
      {/* <BrokerSection brokerSection={homePageData.brokerSection} /> */}
      <TestimonialsSection
        testimonialsSection={homePageData.testimonialsSection}
      />
      <ContactSection contactSection={homePageData.contactSection} />
    </PageContainer>
  );
}
