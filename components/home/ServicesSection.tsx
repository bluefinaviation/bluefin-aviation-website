'use client';

import { PortableText } from '@portabletext/react';

import { ServiceCard } from '@/components/home/ServiceCard';
import { Button } from '@/components/shared/Button';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { SectionSummary } from '@/components/shared/SectionSummary';

export const ServicesSection = ({
  servicesSection,
  tripService,
  fuelService,
}) => {
  return (
    <section
      id="services"
      aria-label="BlueFin aviation services"
      className="grid grid-cols-1 bg-slate-900 md:grid-cols-2 lg:grid-cols-3"
    >
      <div className="col-span-1 flex flex-col justify-between py-10 px-5 sm:p-12 md:col-span-2 lg:col-span-1">
        <SectionHeading className="text-gray-50">
          {servicesSection.heading}
        </SectionHeading>
        <div>
          <SectionSummary className="text-gray-200">
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
        className="relative col-span-1 min-h-screen sm:min-h-0"
      />
      <ServiceCard
        title={fuelService.title}
        tagline={fuelService.tagline}
        slug="/services/fuel-support"
        image={fuelService.image}
        className="relative col-span-1 min-h-screen sm:min-h-0"
      />
    </section>
  );
};
