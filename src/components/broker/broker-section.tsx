import Link from "next/link";

import { MidsizeJetIcon } from "@/components/icons/midsize-jet";
import { LightJetIcon } from "@/components/icons/light-jet";
import { HeavyJetIcon } from "@/components/icons/heavy-jet";
import { SuperMidsizeJetIcon } from "@/components/icons/super-midsize-jet";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionSummary } from "@/components/shared/section-summary";
import { Container } from "@/components/shared/section-container";

export const BrokerSection = () => {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="flex text-center flex-col justify-center items-center">
          <SectionHeading>{`Explore Our Fleet`}</SectionHeading>
          <SectionSummary className="mt-4">
            {`Our full-service broker will cover all your aviation needs. With a fleet of over 20 aircraft, we have an option for your short, medium and long range trips.`}
          </SectionSummary>
        </div>
        <div className="sm:items-end justify-center grid grid-cols-2 place-items-end py-10 sm:flex sm:flex-wrap gap-16 sm:gap-32">
          <Link
            href="/charter-brokerage?category=light"
            className="flex flex-col items-center group gap-y-4 w-full sm:w-auto"
          >
            <LightJetIcon className="size-16 group-hover:-tranzinc-y-2 group-hover:stroke-primary group-hover:fill-primary transition-all duration-300 stroke-slate-300 fill-slate-300" />
            <h3 className="text-xs uppercase font-medium font-mono tracking-wide">
              Light Jets
            </h3>
          </Link>
          <Link
            href="/charter-brokerage?category=midsize"
            className="flex flex-col items-center group gap-y-4 w-full sm:w-auto"
          >
            <MidsizeJetIcon className="size-20 group-hover:-tranzinc-y-2 group-hover:stroke-primary group-hover:fill-primary transition-all duration-300 stroke-slate-300 fill-slate-300" />
            <h3 className="text-xs uppercase font-medium font-mono tracking-wide">
              Midsize Jets
            </h3>
          </Link>
          <Link
            href="/charter-brokerage?category=super-midsize"
            className="flex flex-col items-center group gap-y-4 w-full sm:w-auto"
          >
            <SuperMidsizeJetIcon className="size-24 group-hover:-tranzinc-y-2 group-hover:stroke-primary group-hover:fill-primary transition-all duration-300 stroke-slate-300 fill-slate-300" />
            <h3 className="text-xs uppercase font-medium font-mono tracking-wide">
              Super Midsize Jets
            </h3>
          </Link>
          <Link
            href="/charter-brokerage?category=heavy"
            className="flex flex-col items-center group gap-y-4 w-full sm:w-auto"
          >
            <HeavyJetIcon className="size-32 group-hover:-tranzinc-y-2 group-hover:stroke-primary group-hover:fill-primary transition-all duration-300 stroke-slate-300 fill-slate-300" />
            <h3 className="text-xs uppercase font-medium font-mono tracking-wide">
              Heavy Jets
            </h3>
          </Link>
        </div>
      </Container>
    </section>
  );
};
