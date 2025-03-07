import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'

import { urlFor } from '@/sanity/lib/image'
import { cn } from '@/lib/utils'
import { Service } from '@/sanity/types'

interface ServiceCardProps {
  service: Service
  className?: string
}

export const ServiceCard = ({ service, className }: ServiceCardProps) => {
  return (
    <Link
      href={service.slug?.current ?? ''}
      className={cn('group relative h-screen', className)}
    >
      <Image
        src={
          service.image?.asset?._ref
            ? urlFor(service.image).width(1200).height(1600).fit('crop').url()
            : 'https://source.unsplash.com/1080x1080/?plane'
        }
        alt={service.image?.alt ? service.image.alt : ''}
        width={1200}
        height={1600}
        className='h-full bg-zinc-800 object-cover object-center'
      />
      <div className='tw-transition absolute inset-0 bg-black opacity-30 group-hover:opacity-0' />
      <div className='absolute bottom-5 left-5 z-10 sm:bottom-10 sm:left-10'>
        <div className='flex items-end'>
          <h3 className='mt-2 font-serif text-3xl text-white sm:text-4xl'>
            {service.name}
          </h3>
          <ArrowRight className='tw-transition ml-1.5 size-7 text-white group-hover:ml-3 sm:ml-2 sm:size-10 sm:group-hover:ml-4 lg:ml-3 lg:size-12 lg:group-hover:ml-5' />
        </div>
      </div>
    </Link>
  )
}
