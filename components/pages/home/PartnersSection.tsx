'use client';

import 'keen-slider/keen-slider.min.css';

import { PortableText } from '@portabletext/react';
import { useKeenSlider } from 'keen-slider/react';
import { urlForImage } from 'lib/sanity.image';
import Image from 'next/image';

import { Container } from '@/components/global/Container';
import { SectionHeading } from '@/components/global/SectionHeading';
import { SectionSummary } from '@/components/global/SectionSummary';

const animation = { duration: 10000, easing: (t: number) => t };

export const PartnersSection = ({ partnersSection }) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 2,
      spacing: 50,
    },
    loop: true,
    renderMode: 'performance',
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <section className="py-10 sm:py-16">
      <Container className="flex flex-col">
        <SectionHeading>{partnersSection.section.heading}</SectionHeading>
        <SectionSummary>
          <PortableText value={partnersSection.section.summary} />
        </SectionSummary>
      </Container>

      <div ref={sliderRef} className="keen-slider mt-20 sm:mt-32">
        {partnersSection.partners.map((partner) => (
          <div key={partner._key} className="keen-slider__slide">
            {partner.logo && (
              <Image
                src={
                  partner?.logo?.asset?._ref
                    ? // @ts-expect-error xxx
                      urlForImage(partner.logo)
                        .height(720)
                        .width(1200)
                        .fit('crop')
                        .url()
                    : 'https://source.unsplash.com/1080x1080/?plane'
                }
                alt={`Logo for ${partner.name}`}
                height={720}
                width={1200}
                className="w-36 object-contain grayscale sm:w-44 lg:w-52"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
