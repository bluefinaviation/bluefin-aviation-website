import { PortableText } from "next-sanity";
import { TypedObject } from "@portabletext/types";

import { MidsizeJetIcon } from "@/components/icons/midsize-jet";
import { LightJetIcon } from "@/components/icons/light-jet";
import { HeavyJetIcon } from "@/components/icons/heavy-jet";
import { SuperMidsizeJetIcon } from "@/components/icons/super-midsize-jet";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionSummary } from "@/components/shared/section-summary";
import { Container } from "@/components/shared/section-container";

import { Section } from "@/sanity/types";
import Link from "next/link";

interface BrokerSectionProps {
  brokerSection: {
    section: Section;
  };
}

export const BrokerSection = ({ brokerSection }: BrokerSectionProps) => {
  return (
    <section className="py-8 sm:py-16">
      <Container>
        <div className="flex text-center flex-col justify-center items-center">
          <SectionHeading>{brokerSection.section.heading}</SectionHeading>
          <SectionSummary>
            <PortableText
              value={brokerSection.section.summary as TypedObject[]}
            />
          </SectionSummary>
        </div>
        <div className="sm:items-end justify-center grid grid-cols-2 place-items-end py-10 sm:flex sm:flex-wrap gap-16 sm:gap-32">
          <Link
            href="/brokerage-fleet?category=light-jets"
            className="flex flex-col items-center group gap-y-4 w-full sm:w-auto"
          >
            <LightJetIcon className="size-16 group-hover:stroke-branding group-hover:fill-branding transition-all duration-300 stroke-slate-300 fill-slate-300" />
            <h3 className="text-xs font-mono uppercase">Light Jets</h3>
          </Link>
          <Link
            href="/brokerage-fleet?category=midsize-jets"
            className="flex flex-col items-center group gap-y-4 w-full sm:w-auto"
          >
            <MidsizeJetIcon className="size-20 group-hover:stroke-branding group-hover:fill-branding transition-all duration-300 stroke-slate-300 fill-slate-300" />
            <h3 className="text-xs font-mono uppercase">Midsize Jets</h3>
          </Link>
          <Link
            href="/brokerage-fleet?category=super-midsize-jets"
            className="flex flex-col items-center group gap-y-4 w-full sm:w-auto"
          >
            <SuperMidsizeJetIcon className="size-24 group-hover:stroke-branding group-hover:fill-branding transition-all duration-300 stroke-slate-300 fill-slate-300" />
            <h3 className="text-xs font-mono uppercase">Super Midsize Jets</h3>
          </Link>
          <Link
            href="/brokerage-fleet?category=heavy-jets"
            className="flex flex-col items-center group gap-y-4 w-full sm:w-auto"
          >
            <HeavyJetIcon className="size-32 group-hover:stroke-branding group-hover:fill-branding transition-all duration-300 stroke-slate-300 fill-slate-300" />
            <h3 className="text-xs font-mono uppercase">Heavy Jets</h3>
          </Link>
        </div>
      </Container>
    </section>
  );
};
