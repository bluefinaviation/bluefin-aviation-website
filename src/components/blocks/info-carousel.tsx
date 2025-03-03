"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { PortableText } from "@portabletext/react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { SectionHeading } from "@/components/shared/section-heading";

import { SERVICE_QUERYResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";

type InfoCarouselProps = Extract<
  NonNullable<NonNullable<SERVICE_QUERYResult>["content"]>[number],
  { _type: "infoCarousel" }
>;

export const InfoCarousel = ({
  title,
  text,
  image,
  items,
}: InfoCarouselProps) => {
  return (
    <section className="grid grid-cols-2 gap-8 py-16 sm:py-24 mx-auto max-w-7xl px-3 sm:px-0">
      <div className="flex flex-col gap-4">
        <SectionHeading>{title}</SectionHeading>
        <div className="prose max-w-prose">
          <PortableText value={text} />
        </div>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {items.map((item, idx) => (
            <CarouselItem
              key={idx}
              className="mt-8 flex cursor-pointer flex-col justify-center lg:mt-0"
            >
              <div key={item._id} className="grid grid-cols-2">
                <div className="relative aspect-[3/5]">
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.title!}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <h3 className="text-4xl font-bold uppercase font-serif absolute top-1/2 left-1/2 transform -tranzinc-x-1/2 -tranzinc-y-1/2 text-white">
                    {item.title}
                  </h3>
                </div>
                <div className="prose list-disc marker:text-blue-700 bg-zinc-100 rounded-br-[12rem]">
                  <PortableText value={item.text} />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
