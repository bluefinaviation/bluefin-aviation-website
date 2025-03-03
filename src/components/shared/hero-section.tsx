import { PortableText } from "@portabletext/react";
import Image from "next/image";

import { HeroSummary } from "@/components/service/hero-summary";
import { HeroTitle } from "@/components/service/hero-title";
import { Container } from "@/components/shared/section-container";

import { urlFor } from "@/sanity/lib/image";
import { Section } from "@/sanity/types";

export const HeroSection = ({ hero }: { hero?: Section }) => {
  if (!hero) return null;

  return (
    <div className="relative h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] lg:h-[calc(100vh-6rem)]">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <Image
          src={
            hero?.image?.asset?._ref
              ? urlFor(hero.image).width(1920).height(1080).fit("crop").url()
              : "https://source.unsplash.com/1080x1080/?plane"
          }
          alt={hero?.image?.alt as string}
          width={1920}
          height={1080}
          priority
          className="hidden size-full object-cover object-center shadow-sm lg:block"
        />
        <Image
          src={
            hero?.image?.asset?._ref
              ? urlFor(hero.image).width(1440).height(1920).fit("crop").url()
              : "https://source.unsplash.com/1080x1080/?plane"
          }
          alt={hero?.image?.alt as string}
          width={1920}
          height={1080}
          priority
          className="block size-full bg-slate-200 object-cover object-center shadow-sm lg:hidden"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>
      <div aria-hidden="true" className="absolute inset-0 shadow-sm" />
      <Container className="relative flex h-full flex-col justify-end lg:justify-center">
        <HeroTitle>{hero.heading}</HeroTitle>
        <HeroSummary className="text-slate-200">
          <PortableText value={hero.summary ?? []} />
        </HeroSummary>
        {/* <a
          href={`#${hero._id}`}
          className="tw-transition mt-8 text-slate-50 hover:text-slate-300"
        ></a> */}
      </Container>
    </div>
  );
};
