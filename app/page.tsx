import { HeroSection } from '@/components/home/HeroSection';
import { NewsletterSection } from '@/components/home/NewsletterSection';
import { PartnersSection } from '@/components/home/PartnersSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { PageContainer } from '@/components/shared/PageContainer';
import { getHomePage } from '@/lib/sanity.client';

export default async function IndexRoute() {
  const [homePageData] = await Promise.all([getHomePage()]);
  return (
    <PageContainer>
      <HeroSection heroSection={homePageData.heroSection} />
      <ServicesSection
        servicesSection={homePageData.servicesSection.section}
        tripService={homePageData.servicesSection.tripService.card}
        fuelService={homePageData.servicesSection.fuelService.card}
      />
      <PartnersSection partnersSection={homePageData.partnersSection} />
      <NewsletterSection newsletterSection={homePageData.newsletterSection} />
      <TestimonialsSection
        testimonialsSection={homePageData.testimonialsSection}
      />
    </PageContainer>
  );
}

export const revalidate = 1;
