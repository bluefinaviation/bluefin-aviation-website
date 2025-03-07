import Image from 'next/image'
import { PortableText } from 'next-sanity'

import { SectionHeading } from '@/components/shared/section-heading'

import { urlFor } from '@/sanity/lib/image'
import { SERVICE_QUERYResult } from '@/sanity/types'

type FeaturesProps = Extract<
  NonNullable<NonNullable<SERVICE_QUERYResult>['content']>[number],
  { _type: 'features' }
>

export const Features = ({ features, title, text }: FeaturesProps) => {
  return (
    <section className='mx-auto flex max-w-7xl flex-col gap-16 px-3 py-16 sm:py-24'>
      <div className='flex flex-col items-center gap-4 text-center'>
        <SectionHeading>{title}</SectionHeading>

        <div className='prose max-w-prose'>
          {text && <PortableText value={text} />}
        </div>
      </div>

      {Array.isArray(features) ? (
        <div className='grid grid-cols-5 gap-8'>
          {features.map(feature => (
            <div
              key={feature._key}
              className='flex flex-col items-center text-center'
            >
              <Image
                src={urlFor(feature.icon!).url()}
                alt={feature.title || ''}
                width={100}
                height={100}
                className='size-20'
              />
              <h3 className='mt-4 font-serif text-2xl font-bold text-primary'>
                {feature.title}
              </h3>
              <p className='font-mono text-sm text-slate-700 uppercase'>
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  )
}
