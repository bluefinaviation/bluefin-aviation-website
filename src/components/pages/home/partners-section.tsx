import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";
import { Section, Partner } from "@/sanity/types";

interface PartnersSectionProps {
  partnersSection: {
    section: Section;
    partners: Array<Partner>;
  };
}

export const PartnersSection = ({ partnersSection }: PartnersSectionProps) => {
  return (
    <div className="flex flex-col max-w-7xl  mx-auto items-center justify-center py-20 sm:py-28">
      <h2 className="text-xs sm:text-sm text-center uppercase tracking-wider font-medium text-slate-500">
        {partnersSection.section.heading}
      </h2>
      <ul className="flex items-center gap-x-10 sm:gap-x-20">
        {partnersSection.partners.map((partner, index) => (
          <li key={index} className="aspect-square w-20 sm:w-36 relative">
            {partner.logo?.asset && (
              <Image
                src={urlFor(partner.logo.asset).url()}
                alt={partner.logo?.alt ?? "Client's logo"}
                fill
                className="object-center object-contain"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
