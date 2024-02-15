import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'

import { urlForImage } from '@/sanity/lib/utils'

interface IProps {
  title: string
  tagline: string
  slug: string
  image: any
  className?: string
}

export const ServiceCard = ({
  title,
  slug,
  image,
  tagline,
  className
}: IProps) => {
  return (
    <Link href={slug} className={clsx('group relative h-screen', className)}>
      <Image
        src={
          image?.asset?._ref
            ? // @ts-expect-error image can be undefined
              urlForImage(image).width(1200).height(1600).fit('crop').url()
            : 'https://source.unsplash.com/1080x1080/?plane'
        }
        alt={image?.alt ? image.alt : ''}
        width={1200}
        height={1600}
        className='h-full bg-slate-800 object-cover object-center'
      />
      <div className='tw-transition absolute inset-0 bg-black opacity-30 group-hover:opacity-0' />
      <div className='absolute bottom-5 left-5 z-10 sm:bottom-10 sm:left-10'>
        <p className='text-base font-medium text-slate-200 sm:text-lg lg:text-xl'>
          {tagline}
        </p>
        <div className='flex items-center'>
          <h3 className='text-3xl font-semibold text-slate-50 sm:text-4xl lg:text-5xl'>
            {title}
          </h3>
          <AiOutlineArrowRight className='tw-transition ml-1.5 size-7 text-slate-200 group-hover:ml-3 sm:ml-2 sm:size-10 sm:group-hover:ml-4 lg:ml-3 lg:size-12 lg:group-hover:ml-5' />
        </div>
      </div>
    </Link>
  )
}
