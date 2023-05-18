import { PortableText } from '@portabletext/react';

import { Container } from '@/components/global/Container';
import { SectionHeading } from '@/components/global/SectionHeading';
import { SectionSummary } from '@/components/global/SectionSummary';
import { TripFeature } from '@/components/services/TripFeature';

export const TripFeatureSection = ({ featuresSection }) => {
  return (
    <Container className="grid grid-cols-1 py-8 sm:grid-cols-2 sm:gap-x-8 sm:py-16 lg:gap-x-10 lg:py-24">
      <div className="col-span-1">
        <SectionHeading>{featuresSection.section.heading}</SectionHeading>
        <SectionSummary>
          <PortableText value={featuresSection.section.summary} />
        </SectionSummary>
      </div>

      <ul
        role="list"
        className="col-span-1 mt-8 grid grid-cols-1 gap-12 sm:mt-0 lg:grid-cols-2"
      >
        {featuresSection.features.map((feature) => (
          <li key={feature.id} className="col-span-1">
            <TripFeature feature={feature} />
          </li>
        ))}
      </ul>
    </Container>
  );
};
