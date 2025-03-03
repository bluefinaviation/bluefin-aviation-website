import { Quotes } from "@phosphor-icons/react/dist/ssr";

import { Container } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionSummary } from "@/components/shared/section-summary";
import { TestimonialsCarousel } from "@/components/home/testimonials-carousel";

import { TESTIMONIALS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

import { Testimonial } from "@/sanity/types";

export const TestimonialsSection = async () => {
  const { data: testimonials } = await sanityFetch<Testimonial[]>({
    query: TESTIMONIALS_QUERY,
  });

  if (!testimonials) return null;

  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-zinc-100 py-16 sm:py-24"
    >
      <Container className="grid max-w-7xl grid-cols-1 lg:grid-cols-2 lg:gap-x-24">
        <div className="col-span-1">
          <SectionHeading>{`What Our Clients Say`}</SectionHeading>
          <SectionSummary className="mt-4">
            {`Our clients are our best ambassadors. Here's what they have to say about us.`}
          </SectionSummary>
        </div>
        <div className="col-span-1 flex items-center justify-center relative">
          <Quotes
            weight="fill"
            className="size-36 opacity-5 text-primary absolute -top-16 -left-16 scale-[-1]"
          />
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </Container>
    </section>
  );
};
