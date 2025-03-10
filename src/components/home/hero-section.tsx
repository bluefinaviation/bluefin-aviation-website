'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { PageSummary } from '@/components/shared/page-summary'
import { PageTitle } from '@/components/shared/page-title'
import { Container } from '@/components/shared/section-container'
import { buttonVariants } from '@/components/ui/button'

type HeroImage = {
  src: string
  alt: string
}

const heroImages: HeroImage[] = [
  {
    src: '/images/home-hero-1.webp',
    alt: 'Close up of the turbine of a private plane.'
  },
  {
    src: '/images/home-hero-2.webp',
    alt: 'Luxury private jet in flight with a background of snowed peaks.'
  },
  {
    src: '/images/home-hero-3.webp',
    alt: 'Close up of the turbine of a private plane.'
  },
  { src: '/images/home-hero-4.webp', alt: 'Private jet in flight.' },
  { src: '/images/home-hero-5.webp', alt: 'Plane in the middle of the sky.' },
  {
    src: '/images/home-hero-6.webp',
    alt: 'Cockpit controls of a private plane.'
  },
  {
    src: '/images/home-hero-7.webp',
    alt: 'Private plane getting ready for takeoff.'
  },
  { src: '/images/home-hero-8.webp', alt: 'Private jet in flight.' }
]

export const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % heroImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className='relative grid items-center justify-center overflow-hidden py-24 sm:h-screen sm:py-0'>
        {heroImages.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            quality={100}
            className={`object-cover object-center transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent' />
        <Container>
          <div className='lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20'>
            <div className='relative z-10 mx-auto mt-6 max-w-2xl sm:mt-0 sm:max-w-none lg:col-span-7 lg:pt-6 xl:col-span-6'>
              <PageTitle className='text-white'>{`The Best Solution for Your Aviation Needs`}</PageTitle>
              <PageSummary className='text-zinc-200'>
                {`A total concierge-style battery of services awaits you at Bluefin Aviation. We offer our clients top quality services for aircraft needs at all levels.`}
              </PageSummary>
              <div className='mt-8 flex flex-wrap gap-x-3 gap-y-2 lg:gap-x-6 lg:gap-y-4'>
                <Link
                  href='/services'
                  className={buttonVariants({
                    variant: 'default',
                    size: 'lg'
                  })}
                >
                  Our Services
                </Link>
                <Link
                  href='https://wa.me/+19548812932'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={buttonVariants({
                    variant: 'secondary',
                    size: 'lg'
                  })}
                >
                  24/7 Support
                </Link>
              </div>
            </div>
            {/* <BackgroundIllustration className="absolute left-1/2 top-4 size-[1026px] -tranzinc-x-1/3 stroke-zinc-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-tranzinc-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" /> */}
          </div>
        </Container>
      </div>
    </>
  )
}
