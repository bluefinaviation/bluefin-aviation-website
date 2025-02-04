import { PortableText } from "@portabletext/react";
import { TypedObject } from "@portabletext/types";

import { Container } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionSummary } from "@/components/shared/section-summary";
import { TestimonialsCarousel } from "@/components/pages/home/testimonials-carousel";

import { Section, Testimonial } from "@/sanity/types";

interface TestimonialsSectionProps {
  testimonialsSection: {
    section: Section;
    testimonials: Testimonial[];
  };
}

export const TestimonialsSection = ({
  testimonialsSection,
}: TestimonialsSectionProps) => {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-100 py-20 sm:py-32"
    >
      <Container className="grid max-w-7xl grid-cols-1 lg:grid-cols-2 lg:gap-x-24">
        <div className="col-span-1">
          <SectionHeading>{testimonialsSection.section.heading}</SectionHeading>
          <SectionSummary>
            <PortableText
              value={testimonialsSection.section.summary as TypedObject[]}
            />
          </SectionSummary>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <TestimonialsCarousel
            testimonials={testimonialsSection.testimonials}
          />
        </div>
      </Container>
    </section>
  );
};
