import { PortableText } from '@portabletext/react';
import Image from 'next/image';

import { NewsletterForm } from '@/components/forms/NewsletterForm';
import { SectionHeading } from '@/components/global/SectionHeading';
import { urlForImage } from '@/lib/sanity.image';

export const NewsletterPage = ({ data }: { data: any }) => {
  const { formSection } = data;
  return (
    <div className="relative">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <Image
          src={
            formSection?.section?.image?.asset?._ref
              ? // @ts-expect-error xxx
                urlForImage(formSection.section.image)
                  .width(1280)
                  .height(1920)
                  .fit('crop')
                  .url()
              : 'https://source.unsplash.com/1080x1080/?plane'
          }
          alt={`Plane.`}
          width={1280}
          height={1920}
          className="h-64 w-full bg-gray-100 object-cover object-center sm:h-80 lg:absolute lg:h-full"
        />
      </div>

      <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <SectionHeading>{formSection.section.heading}</SectionHeading>
            <div className="prose mt-5">
              <PortableText value={formSection.section.summary} />
            </div>
          </div>

          <NewsletterForm />
        </div>
      </div>
    </div>
  );
};
