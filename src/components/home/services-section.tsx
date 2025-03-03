import Link from "next/link";
import { Image as SanityImage } from "sanity";

import { SectionHeading } from "@/components/shared/section-heading";
import { SectionSummary } from "@/components/shared/section-summary";
import { Button } from "@/components/ui/button";

import { SERVICES_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

import { ServiceCard } from "@/components/services/service-card";
import { Service } from "@/sanity/types";

export const ServicesSection = async () => {
  const { data: services } = await sanityFetch<string>({
    query: SERVICES_QUERY,
  });

  if (!services) return null;

  return (
    <section
      id="services"
      aria-label="BlueFin aviation services"
      className="bg-primary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      <div className="col-span-1 flex flex-col justify-between px-5 py-10 sm:p-12 md:col-span-2 lg:col-span-1">
        <SectionHeading className="text-slate-50">Our Services</SectionHeading>
        <div>
          <SectionSummary className="text-slate-300">
            {`One stop shop for your corporate aviation and aircraft needs.`}
          </SectionSummary>
          <Button variant="outline" className="mt-5">
            <Link href="/services">All Services</Link>
          </Button>
        </div>
      </div>
      {services?.map((service: Service) => (
        <ServiceCard
          key={service._id}
          title={service.name || ""}
          slug={`/services/${service.slug?.current || ""}`}
          image={service.image as SanityImage}
        />
      ))}
    </section>
  );
};
