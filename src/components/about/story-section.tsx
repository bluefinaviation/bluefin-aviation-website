import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { TypedObject } from '@portabletext/types'

import { SectionHeading } from '@/components/shared/section-heading'

import { urlFor } from '@/sanity/lib/image'
import { Section } from '@/sanity/types'

interface StorySectionProps {
  storySection: {
    section: Section
    bio: TypedObject[]
  }
}

export const StorySection = ({ storySection }: StorySectionProps) => {
  const imageUrl =
    storySection.section.image &&
    urlFor(storySection.section.image)
      ?.width(1200)
      .height(1600)
      .fit('crop')
      .url()

  if (!imageUrl) return null

  return (
    <section className='relative'>
      <div className='lg:absolute lg:inset-0'>
        <div className='lg:absolute lg:inset-y-0 lg:w-1/2'>
          <Image
            src={imageUrl}
            alt={storySection.section.image?.alt || ''}
            width={1200}
            height={1600}
            priority
            className='h-96 w-full bg-zinc-200 object-cover shadow-sm lg:absolute lg:h-full lg:rounded-br-full'
          />
        </div>
      </div>
      <div className='relative gap-x-32 px-3 py-6 sm:px-0 sm:py-8 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:py-10'>
        <div className='lg:col-start-2'>
          <h1 className='sr-only'>About BlueFin Aviation</h1>
          <SectionHeading>{storySection.section.heading}</SectionHeading>

          <div className='prose-lg max-w-prose prose-gray'>
            <PortableText value={storySection.bio} />
          </div>
        </div>
      </div>
    </section>
  )
}
