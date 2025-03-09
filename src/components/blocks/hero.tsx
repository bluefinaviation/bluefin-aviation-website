import { PortableText } from 'next-sanity'
import Image from 'next/image'

import { PageBreadcrumb } from '@/components/shared/page-breadcrumb'

import { urlFor } from '@/sanity/lib/image'
import { SERVICE_QUERYResult } from '@/sanity/types'

type BaseHeroProps = Extract<
  NonNullable<NonNullable<SERVICE_QUERYResult>['content']>[number],
  { _type: 'hero' }
>

type HeroProps = Partial<Pick<BaseHeroProps, '_key' | '_type'>> &
  Omit<BaseHeroProps, '_key' | '_type' | 'text' | 'image'> & {
    // Allow image to be a string or Sanity image
    image?: BaseHeroProps['image'] | string
    // Allow text to be a string
    text?: BaseHeroProps['text'] | string
    isBreadcrumb?: boolean
  }

export const Hero = ({
  title,
  image,
  text,
  isBreadcrumb = false
}: HeroProps) => {
  return (
    <section className='relative flex h-[560px] w-full items-end justify-start bg-primary px-4 py-16'>
      <Image
        src={
          image
            ? typeof image === 'string'
              ? image
              : urlFor(image)
                  .width(1920)
                  .height(1080)
                  .quality(80)
                  .auto('format')
                  .url()
            : '/images/placeholder-hero.webp'
        }
        alt={title || 'Hero Image'}
        fill
        className='absolute inset-0 object-cover object-center'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent' />
      <div className='z-20 mx-auto w-full max-w-7xl'>
        {isBreadcrumb && <PageBreadcrumb />}
        <h1 className='mt-8 font-serif text-5xl font-bold text-white uppercase sm:text-7xl'>
          {title}
        </h1>
        <div className='prose mt-2 max-w-2xl prose-invert sm:prose-lg'>
          {typeof text === 'string' ? (
            <div dangerouslySetInnerHTML={{ __html: text }} />
          ) : (
            <PortableText value={text ?? []} />
          )}
        </div>
      </div>
    </section>
  )
}
