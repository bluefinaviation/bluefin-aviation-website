import { Metadata } from "next";
import Image from "next/image";

import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/section-container";
import { Timeline } from "@/components/shared/timeline";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionSummary } from "@/components/shared/section-summary";

import { ABOUT_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "We are a team of experienced professionals who are dedicated to providing the best possible service to our clients.",
};

export default async function AboutPage() {
  const { data: companyDetails } = await sanityFetch<typeof ABOUT_QUERY>({
    query: ABOUT_QUERY,
  });

  return (
    <div>
      <PageHero
        heading="About Us"
        summary="We are a team of experienced professionals who are dedicated to providing the best possible service to our clients."
        image="/images/empty-legs.webp"
        imageAlt="About Us"
      />

      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <SectionHeading>Our Story</SectionHeading>
            <div className="prose">
              <p>
                {`Bluefin Aviation addresses the needs of today's corporate aircraft owners and offers smart, convenient, and economical solutions to aircraft management. We offer top-quality services for aircraft needs at all levels: low fuel prices, flight planning, and handling services are at the core of our safe and professional approach. The cost-effective handling of our client's daily aircraft operations is our top priority.`}
              </p>
              <p>{`Our operations span worldwide, providing services all year round at offices in the United States serving the Americas, and in Spain and Italy serving the rest of the world. All offices manage fuel supply, trip support, handling, and flight planning services. We are constantly communicating among team members to better assist our clients through different time zones.`}</p>
              <p>{`Our dedicated professionals strive to provide superior services while sharing the same goals and dedication as aircraft operators' own employees. Our top priority is to carefully guard our clients' interests, provide high-class service, and enhance the bottom line. Our commitment is 24/7/365 to make sure operations are always on time and in the most efficient manner. Our team is composed of a group of airline and corporate aviation professionals with vast experience in the industry.`}</p>
            </div>
          </div>
          <div className="relative h-full w-full">
            {/* <div className="relative aspect-[3/4]"> */}

            <Image
              src="/images/about-hero.webp"
              alt="About Us"
              fill
              className="object-cover object-center rounded-br-[12rem] bg-slate-100"
            />
          </div>
        </div>
      </Container>

      <div className="bg-primary py-16 text-white">
        <Container>
          <div className="grid grid-cols-1 divide-y divide-white sm:divide-y-0 sm:divide-x sm:grid-cols-4 gap-8">
            {companyDetails?.stats?.map((stat) => (
              <div key={stat._key} className="text-center">
                <h3 className="text-white text-5xl sm:text-7xl font-bold">
                  <span>{stat.value}</span>
                  {stat.hasUnit && (
                    <span className="text-3xl sm:text-5xl">{stat.unit}</span>
                  )}
                </h3>
                <p className="text-white/80 text-lg sm:text-xl mt-2">
                  {stat.title}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <Container className="py-16">
        <div className="flex flex-col items-center text-center">
          <SectionHeading>Our History</SectionHeading>
          <SectionSummary className="mt-4">{`With over 10 years of experience in the aviation industry, we have a proven track record of providing exceptional service to our clients.`}</SectionSummary>
        </div>
        <Timeline events={companyDetails?.timeline || []} />
      </Container>

      {/* <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <SectionHeading>The BlueFin Team</SectionHeading>
            <div className="prose">
              <p>
                {`Our team consists of aviation professionals with lots of expertise in the services that we offer. With more than 10 years of professional experience in the aviation industry, our team members put our customer's needs first.`}
              </p>
            </div>
          </div>
        </div>
      </Container> */}
    </div>
  );
}
