import { PortableText } from "@portabletext/react";

import { FuelFeature } from "@/components/services/fuel-feature";
import { Container } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionSummary } from "@/components/shared/section-summary";

import { FuelFeature as FuelFeatureType, Section } from "@/sanity/types";

interface FeaturesSectionProps {
  featuresSection: {
    section: Section;
    features: (FuelFeatureType & { _key: string })[];
  };
}

export const FuelFeaturesSection = ({
  featuresSection,
}: FeaturesSectionProps) => {
  return (
    <Container className="grid grid-cols-1 py-8 sm:grid-cols-2 sm:gap-x-8 sm:py-16 lg:gap-x-10 lg:py-24">
      <div className="col-span-1">
        <SectionHeading>{featuresSection.section.heading}</SectionHeading>
        <SectionSummary>
          <PortableText value={featuresSection.section.summary ?? []} />
        </SectionSummary>
      </div>

      <ul
        role="list"
        className="col-span-1 mt-8 grid grid-cols-1 gap-12 sm:mt-0 lg:grid-cols-2"
      >
        {featuresSection.features.map((feature) => (
          <FuelFeature key={feature._key} feature={feature} />
        ))}
      </ul>
    </Container>
  );
};
