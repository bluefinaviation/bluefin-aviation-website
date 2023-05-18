'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { urlForImage } from 'lib/sanity.image';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

import { DotButton } from '@/components/global/SliderButtons';

export const Slider = ({ gallery }) => {
  const media = gallery.map((slide) => slide);
  const mediaByIndex = (index) => media[index % media.length];
  const SLIDE_COUNT = media.length;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    // @ts-expect-error xxx
    setScrollSnaps(embla.scrollSnapList());
    embla.on('select', onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <div className="mx-auto max-w-5xl px-3">
      <div className="relative">
        <div className="w-full overflow-hidden rounded-lg" ref={viewportRef}>
          <div className="flex gap-x-2 rounded-lg shadow">
            {slides.map((index) => (
              <div key={index} className="min-w-full">
                <Image
                  src={
                    mediaByIndex(index).asset?._ref
                      ? // @ts-expect-error xxx
                        urlForImage(mediaByIndex(index))
                          .width(1600)
                          .height(1200)
                          .fit('crop')
                          .url()
                      : 'https://source.unsplash.com/1080x1080/?plane'
                  }
                  alt={mediaByIndex(index).alt}
                  width={1600}
                  height={1200}
                  className="rounded-lg bg-gray-200 object-cover object-center shadow"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-x-6">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};
