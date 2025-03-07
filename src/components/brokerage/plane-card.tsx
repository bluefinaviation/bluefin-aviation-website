import Image from 'next/image'
import { Gauge, Path, Users } from '@phosphor-icons/react/dist/ssr'

import { buttonVariants } from '@/components/ui/button'

import { urlFor } from '@/sanity/lib/image'
import { Plane } from '@/sanity/types'

type PlaneWithExpandedRefs = Omit<Plane, 'manufacturer' | 'category'> & {
  manufacturer: {
    _id: string
    name: string
    slug: string
  }
  category?: {
    _id: string
    name: string
    slug: string
  }
}

interface PlaneCardProps {
  plane: PlaneWithExpandedRefs
}

export const PlaneCard = ({ plane }: PlaneCardProps) => {
  return (
    <div className='tw-transition group relative flex cursor-pointer flex-col items-center overflow-hidden border border-zinc-200 bg-zinc-50 hover:scale-105 hover:bg-white'>
      <div className='relative aspect-[3/2] w-full bg-zinc-100'>
        <Image
          src={
            plane.image
              ? urlFor(plane.image).url()
              : 'https://source.unsplash.com/1080x1080/?plane'
          }
          alt={plane.model || ''}
          fill
          className='flex flex-col items-center justify-center bg-zinc-100 object-cover object-center text-center'
        />

        <div
          className={buttonVariants({
            className:
              'tw-transition absolute top-4 right-4 opacity-0 transition-opacity group-hover:opacity-100',
            variant: 'default'
          })}
        >
          Get a Quote
        </div>
      </div>

      {/* Content container */}
      <div className='relative h-[140px] w-full'>
        {/* Text container with transition */}
        <div className='absolute inset-0 flex h-full w-full flex-col items-center justify-center transition-all duration-300 group-hover:-translate-y-5'>
          <h4 className='font-mono text-xs font-medium tracking-wide text-zinc-500 uppercase'>
            {plane.manufacturer.name} • {plane.category?.name || ''}
          </h4>
          <h3 className='mt-1 font-serif text-2xl font-medium'>
            {plane.model}
          </h3>
        </div>

        {/* Details section */}
        <div className='absolute right-0 bottom-3 left-0 flex w-full items-center justify-between px-6 opacity-0 transition-all duration-300 group-hover:opacity-100'>
          <div className='flex items-center gap-x-2'>
            <Users className='size-4 text-zinc-600' />
            <p className='font-mono text-xs text-zinc-600 uppercase'>
              {plane.capacity || '-'}
            </p>
          </div>
          <div className='flex items-center gap-x-2'>
            <Gauge className='size-4 text-zinc-600' />
            <p className='font-mono text-xs text-zinc-600 uppercase'>
              {plane.speed ? `${plane.speed} km/h` : '-'}
            </p>
          </div>
          <div className='flex items-center gap-x-2'>
            <Path className='size-4 text-zinc-600' />
            <p className='font-mono text-xs text-zinc-600 uppercase'>
              {plane.range ? `${plane.range} km` : '-'}
            </p>
          </div>
        </div>
      </div>

      {/* Blue hover bar */}
      <div className='absolute right-0 bottom-0 left-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100'></div>
    </div>
  )
}
