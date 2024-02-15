import { PortableText, PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import Link from 'next/link'
import { Image } from 'sanity'

import { ImageCustom } from '@/components/shared/image-custom'

export function CustomPortableText({
  paragraphClasses,
  value
}: {
  paragraphClasses?: string
  value: PortableTextBlock[]
}) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => {
        return <p className={paragraphClasses}>{children}</p>
      }
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <>
            {!value.href.startsWith('/') ? (
              <a
                href={value.href}
                rel='noreferrer noopener'
                target='_blank'
                className='tw-transition text-blue-700 hover:text-blue-900'
              >
                {children}
              </a>
            ) : (
              <Link
                href={value.href}
                className='tw-transition text-blue-700 hover:text-blue-900'
              >
                {children}
              </Link>
            )}
          </>
        )
      }
    },
    types: {
      image: ({
        value
      }: {
        value: Image & { alt?: string; caption?: string }
      }) => {
        return (
          <div className='my-6 space-y-2'>
            <ImageCustom
              image={value}
              alt={value.alt}
              className='relative aspect-[16/9]'
            />
            {value?.caption && (
              <div className='font-sans text-sm text-slate-600'>
                {value.caption}
              </div>
            )}
          </div>
        )
      }
    }
  }

  return <PortableText components={components} value={value} />
}
