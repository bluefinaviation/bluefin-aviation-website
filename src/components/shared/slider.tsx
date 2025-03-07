'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

import { DotButton } from '@/components/shared/slider-buttons'
import { urlFor } from '@/sanity/lib/image'

type GalleryImage = {
  _type: 'image'
  asset?: {
    _ref: string
  }
  alt?: string
}

export const Slider = ({ gallery }: { gallery: GalleryImage[] }) => {
  const media = gallery.map(slide => slide)
  const mediaByIndex = (index: number) => media[index % media.length]
  const SLIDE_COUNT = media.length
  const slides = Array.from(Array(SLIDE_COUNT).keys())

  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  )

  const onSelect = useCallback(() => {
    if (!embla) return
    setSelectedIndex(embla.selectedScrollSnap())
  }, [embla, setSelectedIndex])

  useEffect(() => {
    if (!embla) return
    onSelect()
    setScrollSnaps(embla.scrollSnapList())
    embla.on('select', onSelect)
  }, [embla, setScrollSnaps, onSelect])

  return (
    <div className='mx-auto max-w-5xl px-3'>
      <div className='relative'>
        <div className='w-full overflow-hidden rounded-lg' ref={viewportRef}>
          <div className='flex gap-x-2 rounded-lg shadow-sm'>
            {slides.map(index => (
              <div key={index} className='min-w-full'>
                <Image
                  src={
                    mediaByIndex(index).asset?._ref
                      ? urlFor(mediaByIndex(index))
                          .width(1600)
                          .height(1200)
                          .fit('crop')
                          .url()
                      : 'https://source.unsplash.com/1080x1080/?plane'
                  }
                  alt={mediaByIndex(index).alt || 'Gallery image'}
                  width={1600}
                  height={1200}
                  className='rounded-lg bg-zinc-200 object-cover object-center shadow-sm'
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='mt-6 flex items-center justify-center gap-x-6'>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}
