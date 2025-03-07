import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import { Image as SanityImage } from 'sanity'

import { urlFor } from '@/sanity/lib/image'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  image: SanityImage | string
  tagline?: string
  title: string
  slug: string
  imageClassName?: string
  isSquare?: boolean
}

export const ServiceCard = ({
  image,
  tagline,
  title,
  slug,
  imageClassName,
  isSquare = false
}: ServiceCardProps) => {
  return (
    <Link
      href={slug}
      className={cn(
        'group relative',
        isSquare ? 'aspect-square' : 'aspect-[3/4]',
        imageClassName
      )}
    >
      <Image
        src={
          typeof image === 'string'
            ? image
            : image?.asset?._ref
              ? urlFor(image).width(1200).height(1600).fit('crop').url()
              : 'https://source.unsplash.com/1080x1080/?plane'
        }
        alt={
          typeof image === 'string' ? title : (image?.alt as string) || title
        }
        width={1200}
        height={1600}
        className={cn(
          'h-full bg-zinc-800 object-cover object-center',
          imageClassName
        )}
      />
      <div
        className={cn(
          imageClassName,
          'tw-transition absolute inset-0 bg-black opacity-30 group-hover:opacity-0'
        )}
      />
      <div className='absolute bottom-5 left-5 z-10 sm:bottom-10 sm:left-10'>
        <p className='font-mono text-xs tracking-wide text-zinc-300 uppercase'>
          {tagline}
        </p>
        <div className='flex items-end'>
          <h3 className='mt-2 font-serif text-3xl text-white sm:text-4xl'>
            {title}
          </h3>
          <ArrowRight className='tw-transition ml-1.5 size-7 text-white group-hover:ml-3 sm:ml-2 sm:size-10 sm:group-hover:ml-4 lg:ml-3 lg:size-12 lg:group-hover:ml-5' />
        </div>
      </div>
    </Link>
  )
}
