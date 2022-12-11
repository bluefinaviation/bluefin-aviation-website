import { PortableText } from '@portabletext/react';
import { urlForImage } from 'lib/sanity.image';
import Image from 'next/image';

import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';

export const TeamSection = ({ teamSection }) => {
  return (
    <section className="py-8 md:py-16 lg:py-24">
      <Container className="grid grid-cols-1 gap-12 sm:grid-cols-5">
        <div className="sm:col-span-2">
          <SectionHeading>{teamSection.section.heading}</SectionHeading>
          <div className="prose prose-xl prose-gray mt-4 max-w-prose sm:mt-6 lg:mt-8">
            <PortableText value={teamSection.section.summary} />
          </div>
        </div>
        <div className="sm:col-span-3">
          <Image
            src={
              teamSection?.section?.image?.asset?._ref
                ? urlForImage(teamSection?.section?.image)
                    .width(1600)
                    .height(1200)
                    .fit('crop')
                    .url()
                : 'https://source.unsplash.com/1080x1080/?plane'
            }
            alt={teamSection.section.image.alt}
            width={1600}
            height={1200}
            className="rounded-lg bg-gray-200 object-cover shadow"
          />
        </div>
      </Container>
    </section>
  );
};
