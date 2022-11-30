import { PortableText } from '@portabletext/react';
import { urlForImage } from 'lib/sanity.image';
import Image from 'next/image';

import { SectionHeading } from '@/components/shared/SectionHeading';
import { SectionSummary } from '@/components/shared/SectionSummary';
import { TextBody } from '@/components/shared/TextBody';

export const StorySection = ({ storySection }) => {
  return (
    <section className="relative">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:w-1/2">
          <Image
            src={
              storySection?.section?.image?.asset?._ref
                ? urlForImage(storySection?.section?.image)
                    .width(1200)
                    .height(1600)
                    .fit('crop')
                    .url()
                : 'https://source.unsplash.com/1080x1080/?plane'
            }
            alt={storySection.section.image.alt}
            width={1200}
            height={1600}
            className="h-96 w-full bg-gray-200 object-cover shadow lg:absolute lg:h-full lg:rounded-br-full "
          />
        </div>
      </div>
      <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
            <h1 className="sr-only">About BlueFin Aviation</h1>
            <SectionHeading>{storySection.section.heading}</SectionHeading>
            <SectionSummary>
              <PortableText value={storySection.section.summary} />
            </SectionSummary>

            <div className="prose-lg prose-gray">
              <TextBody content={storySection.bio} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
