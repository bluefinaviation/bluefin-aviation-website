import Image from "next/image"
import { Section } from "@/types"
import { PortableText } from "@portabletext/react"
import { urlForImage } from "lib/sanity.image"

import { Container } from "@/components/global/section-container"
import { HeroSummary } from "@/components/service/hero-summary"
import { HeroTitle } from "@/components/service/hero-title"

export const HeroSection = ({ hero }: { hero: Section }) => {
  return (
    <div className="relative h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] lg:h-[calc(100vh-6rem)]">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <Image
          src={
            hero?.image?.asset?._ref
              ? // @ts-expect-error xxx
                urlForImage(hero.image)
                  .width(1920)
                  .height(1080)
                  .fit("crop")
                  .url()
              : "https://source.unsplash.com/1080x1080/?plane"
          }
          alt={hero?.image?.alt as string}
          fill
          className="hidden h-full w-full object-cover object-center shadow lg:block"
        />
        <Image
          src={
            hero?.image?.asset?._ref
              ? // @ts-expect-error xxx
                urlForImage(hero.image)
                  .width(1440)
                  .height(1920)
                  .fit("crop")
                  .url()
              : "https://source.unsplash.com/1080x1080/?plane"
          }
          alt={hero?.image?.alt as string}
          fill
          className="block h-full w-full bg-slate-200 object-cover object-center shadow lg:hidden"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>
      <div aria-hidden="true" className="absolute inset-0 shadow" />
      <Container className="relative flex h-full flex-col justify-end lg:justify-center">
        <HeroTitle>{hero.heading}</HeroTitle>
        <HeroSummary className="text-slate-200">
          <PortableText value={hero.summary} />
        </HeroSummary>
        {/* <a
          href={`#${hero._id}`}
          className="tw-transition mt-8 text-slate-50 hover:text-slate-300"
        ></a> */}
      </Container>
    </div>
  )
}
