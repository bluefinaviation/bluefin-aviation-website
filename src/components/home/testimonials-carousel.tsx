"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Testimonial } from "@/sanity/types";

export const TestimonialsCarousel = ({
  testimonials,
}: {
  testimonials: Testimonial[];
}) => {
  return (
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
        {testimonials.map((testimonial, idx) => (
          <CarouselItem
            key={idx}
            className="mt-8 flex cursor-pointer flex-col justify-center lg:mt-0"
          >
            <p className="text-base italic sm:text-xl text-primary font-medium">{`${testimonial.quote}`}</p>
            {testimonial.author && (
              <p className="mt-4 flex items-center flex-wrap text-slate-600 gap-x-2 font-mono text-xs sm:text-sm uppercase">
                <span className="font-medium">{testimonial.author.name}</span>
                <span> | </span>
                <span>{testimonial.author.role}</span>
                <span> | </span>
                <span>{testimonial.author.location}</span>
              </p>
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
