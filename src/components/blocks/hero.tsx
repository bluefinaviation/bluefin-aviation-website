import { PortableText } from 'next-sanity'
import Image from 'next/image'

import { PageBreadcrumb } from '@/components/shared/page-breadcrumb'

import { urlFor } from '@/sanity/lib/image'
import { SERVICE_QUERYResult } from '@/sanity/types'

type HeroProps = Extract<
  NonNullable<NonNullable<SERVICE_QUERYResult>['content']>[number],
  { _type: 'hero' }
>

export const Hero = ({ title, image, text }: HeroProps) => {
  return (
    <section className='relative flex h-[560px] w-full items-end justify-start bg-primary px-4 py-16'>
      <Image
        src={
          image
            ? urlFor(image!)
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
        <PageBreadcrumb />
        <h1 className='mt-4 font-serif text-6xl font-bold text-white uppercase'>
          {title}
        </h1>
        <div className='prose-lg mt-4 max-w-2xl text-zinc-200'>
          <PortableText value={text ?? []} />
        </div>
      </div>
    </section>
  )
}

// {/* <section className="overflow-hidden">
// <div className="relative min-h-[32rem] overflow-hidden">
//   <div className="absolute inset-0">
//     <Image
//       src={
//         image
//           ? urlFor(image!)
//               .width(1920)
//               .height(1080)
//               .quality(80)
//               .auto("format")
//               .url()
//           : "/images/placeholder-hero.webp"
//       }
//       alt={
//         typeof image === "string"
//           ? title || "Concert Image"
//           : "About the Madrid F1 GP."
//       }
//       fill
//       className="object-cover objectcenter bg-card"
//       // // className="object-cover object-[25%_90%] bg-card"
//       priority
//     />
//     <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />

//     <div className="absolute bottom-0 left-0 right-0 p-4">
//       <h1 className="text-white font-mono uppercase text-5xl font-bold">
//         {title}
//       </h1>
//     </div>
//   </div>
// </div>
// </section> */}
