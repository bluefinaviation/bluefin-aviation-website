'use client';

import { PortableText } from '@portabletext/react';

import { CircleBackground } from '@/components/backgrounds/CircleBackground';
import { Button } from '@/components/global/Button';
import { Container } from '@/components/global/Container';
import { SectionHeading } from '@/components/global/SectionHeading';
import { SectionSummary } from '@/components/global/SectionSummary';

export function ContactSection({ contactSection }) {
  return (
    <section
      id="contact-section"
      className="relative overflow-hidden border-b border-slate-700 bg-slate-900 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -z-0 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#93c5fd" className="animate-spin-slower" />
      </div>
      <Container className="relative z-50 flex flex-col items-center justify-center gap-8 text-center">
        <div>
          <SectionHeading className="text-gray-50">
            {contactSection.section.heading}
          </SectionHeading>
          <SectionSummary className="text-gray-200">
            <PortableText value={contactSection.section.summary} />
          </SectionSummary>
        </div>

        <div>
          <Button
            href="/contact"
            variant="outline"
            color="white"
            className="mt-5"
          >
            Get in Touch
          </Button>
        </div>
      </Container>
    </section>
  );
}
