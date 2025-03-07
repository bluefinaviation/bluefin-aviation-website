import Image from 'next/image'
import { PageBreadcrumb } from './page-breadcrumb'

export const PageHero = ({
  heading,
  summary,
  image,
  imageAlt
}: {
  heading: string
  summary: string
  image: string
  imageAlt: string
}) => {
  return (
    <section className='relative flex h-[560px] w-full items-end justify-start bg-primary px-4 py-16 sm:px-0 sm:py-24'>
      <Image
        src={image}
        alt={imageAlt || heading}
        fill
        className='absolute inset-0 object-cover object-center'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent' />
      <div className='z-20 mx-auto w-full max-w-7xl'>
        <PageBreadcrumb />
        <h1 className='mt-4 font-serif text-5xl font-bold text-white uppercase sm:text-7xl'>
          {heading}
        </h1>
        <p className='mt-2 max-w-2xl text-lg text-zinc-200 sm:text-xl'>
          {summary}
        </p>
      </div>
    </section>
  )
}
