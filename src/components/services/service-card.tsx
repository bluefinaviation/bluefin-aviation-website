import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Image as SanityImage } from 'sanity'

import { urlForImage } from '@/sanity/lib/utils'

interface ServiceCardProps {
  title: string
  tagline: string
  slug: string
  image: SanityImage
}

export const ServiceCard = ({
  title,
  tagline,
  slug,
  image
}: ServiceCardProps) => {
  return (
    <Link href={slug} className='group'>
      <div className='relative flex h-screen rounded-lg shadow'>
        <Image
          src={
            image?.asset?._ref
              ? // @ts-expect-error
                urlForImage(image).width(1200).height(1600).fit('crop').url()
              : 'https://source.unsplash.com/1080x1080/?plane'
          }
          alt={image.alt as string}
          width={1200}
          height={1600}
          priority
          sizes='(min-width: 1380px) 604px, (min-width: 1040px) calc(37.5vw + 94px), calc(100vw - 24px)'
          className='absolute inset-0 size-full rounded-lg object-cover object-center shadow'
        />
        <div className='tw-transition relative flex w-full flex-col items-start justify-end rounded-lg bg-black/30 p-8 shadow group-hover:bg-transparent sm:p-12'>
          <p className='text-base font-medium text-slate-200 lg:text-lg'>
            {tagline}
          </p>
          <div className='flex items-center text-3xl font-semibold text-slate-50 lg:text-4xl'>
            <h2>{title}</h2>
            <AiOutlineArrowRight className='tw-transition ml-2 group-hover:ml-3' />
          </div>
        </div>
      </div>
    </Link>
  )
}
