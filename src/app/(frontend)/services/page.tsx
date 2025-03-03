import { Metadata } from "next";

import { Container } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { PageHero } from "@/components/shared/page-hero";
import { ServiceCard } from "@/components/services/service-card";

import { SERVICES_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { Service } from "@/sanity/types";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "We offer a range of services to support your charter operations. From trip support to fuel services, we have you covered.",
};

export default async function ServicesPage() {
  const { data: services } = await sanityFetch<Service[]>({
    query: SERVICES_QUERY,
  });

  return (
    <div>
      <PageHero
        heading="Our Services"
        summary="We offer a range of services to support your charter operations. From trip support to fuel services, we have you covered."
        image="/images/services-hero.webp"
        imageAlt=""
      />

      <Container className="py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <SectionHeading>
              A total concierge-style battery of aviation services
            </SectionHeading>
            <p className="prose">
              The world is constantly changing and never fails to present new
              challenges and opportunities in the way clients consume products
              and services. The private aviation sector is no exception to this
              rule. Therefore, SPARFELL continuously strives to adapt to
              changing market dynamics and client expectations by innovatively
              offering all solutions under the same roof.{" "}
            </p>
          </div>
          <ServiceCard
            image="/images/charter-brokerage.webp"
            title="Charter Brokerage"
            slug="/charter-brokerage"
            imageClassName="object-cover object-[5%_90%]"
            isSquare={true}
          />

          {services?.map((service, index) => (
            <ServiceCard
              key={service._id}
              image={service.image}
              tagline={service.tagline}
              title={service.name}
              slug={`/services/${service.slug}`}
              isSquare={true}
              imageClassName={
                index === services.length - 1 ? "rounded-br-[12rem]" : ""
              }
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
