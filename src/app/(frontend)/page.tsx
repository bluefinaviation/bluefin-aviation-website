// // import { ContactSection } from "@/components/home/contact-section";
import { HeroSection } from '@/components/home/hero-section'
import { ServicesSection } from '@/components/home/services-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { PageContainer } from '@/components/shared/pace-container'
// // import { PartnersSection } from "@/components/home/partners-section";
import { ContactForm } from '@/components/shared/contact-form'

export default async function HomePage() {
  return (
    <PageContainer>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactForm />
    </PageContainer>
  )
}
