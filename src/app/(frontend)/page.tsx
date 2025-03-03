import { BrokerSection } from "@/components/broker/broker-section";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { PageContainer } from "@/components/shared/pace-container";

export default async function HomePage() {
  return (
    <PageContainer>
      <HeroSection />
      <ServicesSection />
      <BrokerSection />
      <TestimonialsSection />

      {/* <ContactSection contactSection={homePageData.contactSection} />
      <PartnersSection partnersSection={homePageData.partnersSection} /> */}
    </PageContainer>
  );
}
