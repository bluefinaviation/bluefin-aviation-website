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
            <p className="text-lg font-semibold lg:text-xl">{`"${testimonial.quote}"`}</p>
            {testimonial.author && (
              <div className="mt-4 flex items-center gap-x-2 sm:mt-6 lg:mt-8">
                <p>
                  <span className="font-medium text-slate-700">
                    {testimonial.author.name}
                  </span>
                  <span> | </span>
                  <span>{testimonial.author.role}</span>
                  <span> | </span>
                  <span>{testimonial.author.location}</span>
                </p>
              </div>
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
