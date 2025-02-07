import { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { PlaneFilters } from "@/components/brokerage/plane-filters";
import { FleetGrid } from "@/components/brokerage/fleet-grid";
import { sanityFetch } from "@/sanity/lib/live";
import { FILTERED_PLANES_QUERY } from "@/sanity/lib/queries";

interface PageProps {
  searchParams: {
    category?: string;
    manufacturer?: string;
  };
}

export const metadata: Metadata = {
  title: "Private Jet Fleet",
  description:
    "Discover our diverse range of private jets, from light to heavy aircraft, each offering unique capabilities to match your specific travel requirements.",
};

export default async function BrokerageFleetPage({ searchParams }: PageProps) {
  const { category, manufacturer } = searchParams;

  const params = {
    category: !category || category === "all" ? null : category,
    manufacturer: !manufacturer || manufacturer === "all" ? null : manufacturer,
  };

  const { data: planes } = await sanityFetch({
    query: FILTERED_PLANES_QUERY,
    params,
  });

  return (
    <div className="pb-20">
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/fleet-cover.webp"
            alt="Private Jet Fleet"
            fill
            className="object-cover"
            priority
          />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <SectionHeading className="text-4xl font-serif sm:text-5xl !text-left text-white">
              Our Private Jet Fleet
            </SectionHeading>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              Discover our diverse range of private jets, from light to heavy
              aircraft, each offering unique capabilities to match your specific
              travel requirements.
            </p>
          </div>
        </Container>

        <div className="absolute inset-0 bg-slate-900/55" />
      </section>

      <Container className="mt-16">
        <div className="flex items-center gap-12">
          <p className="text-slate-700 font-serif text-3xl font-medium">
            Filter by
          </p>
          <PlaneFilters />
        </div>

        <hr className="my-8 h-0.5 bg-blue-700" />

        <FleetGrid planes={planes} />
      </Container>
    </div>
  );
}
