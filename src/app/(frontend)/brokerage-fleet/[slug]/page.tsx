import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { PlaneDetail } from "@/components/brokerage/plane-detail";

import { sanityFetch } from "@/sanity/lib/live";
import { PLANE_QUERY } from "@/sanity/lib/queries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: plane } = await sanityFetch({
    query: PLANE_QUERY,
    params: {
      slug: slug,
    },
  });

  return {
    title: `${plane?.model} — ${plane?.code}`,
  };
}

export default async function PlanePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const { data: plane } = await sanityFetch({
    query: PLANE_QUERY,
    params: {
      slug: slug,
    },
  });

  return (
    <div className="pb-20">
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/plane-cover.webp"
            alt="Private Jet Fleet"
            fill
            className="object-cover"
            priority
          />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <SectionHeading className="text-4xl font-serif sm:text-5xl !text-left text-white">
              {`${plane?.model} — ${plane?.code}`}
            </SectionHeading>
            <Link
              href="/contact"
              className={buttonVariants({ size: "lg", variant: "secondary" })}
            >
              Enquire Now
            </Link>
          </div>
        </Container>

        <div className="absolute inset-0 bg-slate-900/55" />
      </section>

      <Container className="mt-8">
        <div className="gap-24 grid grid-cols-4 max-w-5xl mx-auto">
          <div className="relative col-span-1">
            <Image
              src="/images/plane-drawing.webp"
              alt="Plane Drawing"
              fill
              className="object-contain object-center"
            />
          </div>
          <div className="grid col-span-3 grid-cols-1 sm:grid-cols-3 gap-4">
            <PlaneDetail label="Passenger Capacity" value={plane?.capacity} />
            <PlaneDetail
              label="Cruise Speed"
              value={plane?.speed}
              unit="km/h"
            />
            <PlaneDetail label="Maximum Range" value={plane?.range} unit="km" />
          </div>
        </div>
      </Container>
    </div>
  );
}
