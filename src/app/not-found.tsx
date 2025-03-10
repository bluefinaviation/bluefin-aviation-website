import Image from 'next/image'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import { SectionHeading } from '@/components/shared/section-heading'
export default function NotFound() {
  return (
    <div className='flex h-screen flex-col items-center justify-center bg-zinc-300'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
        <Image
          src='/images/clouds.png'
          alt='Clouds background'
          width={1000}
          height={1000}
          className='object-cotain object-center'
        />
      </div>

      <div className='relative z-20 aspect-video w-[20rem] sm:w-[32rem]'>
        <div className='absolute inset-0 animate-float'>
          <Image
            src='/images/plane.webp'
            alt='Jet floating.'
            fill
            className='object-cover object-center'
          />
        </div>
      </div>

      <div className='mt-8'>
        <SectionHeading>Page Not Found</SectionHeading>
      </div>
      <Link href='/' className={buttonVariants({ className: 'mt-4' })}>
        Return Home
      </Link>
    </div>
  )
}

export const metadata = {
  title: 'Page Not Found'
}

// Add the floating animation keyframes to the global styles
export const dynamic = 'force-static'
