'use client';

import { PortableText } from '@portabletext/react';

import { Button } from '@/components/global/Button';
import { SectionHeading } from '@/components/global/SectionHeading';
import { SectionSummary } from '@/components/global/SectionSummary';
import { ServiceCard } from '@/components/pages/home/ServiceCard';

export const ServicesSection = ({
  servicesSection,
  tripService,
  fuelService,
}) => {
  return (
    <section
      id="services"
      aria-label="BlueFin aviation services"
      className="grid grid-cols-1 bg-branding md:grid-cols-2 lg:grid-cols-3"
    >
      <div className="col-span-1 flex flex-col justify-between px-5 py-10 sm:p-12 md:col-span-2 lg:col-span-1">
        <SectionHeading className="text-slate-50">
          {servicesSection.heading}
        </SectionHeading>
        <div>
          <SectionSummary className="text-slate-200">
            <PortableText value={servicesSection.summary} />
          </SectionSummary>
          <Button
            href="/services"
            variant="outline"
            color="white"
            className="mt-5"
          >
            All Services
          </Button>
        </div>
      </div>
      <ServiceCard
        title={tripService.title}
        tagline={tripService.tagline}
        slug="/services/trip-support"
        image={tripService.image}
        className="relative col-span-1"
      />
      <ServiceCard
        title={fuelService.title}
        tagline={fuelService.tagline}
        slug="/services/fuel-support"
        image={fuelService.image}
        className="relative col-span-1"
      />
    </section>
  );
};
