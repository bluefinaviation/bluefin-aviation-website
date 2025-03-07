import Image from 'next/image'

import { urlFor } from '@/sanity/lib/image'
import { Section, Partner } from '@/sanity/types'

interface PartnersSectionProps {
  partnersSection: {
    section: Section
    partners: Array<Partner>
  }
}

export const PartnersSection = ({ partnersSection }: PartnersSectionProps) => {
  return (
    <div className='mx-auto flex max-w-7xl flex-col items-center justify-center py-20 sm:py-28'>
      <h2 className='text-center text-xs font-medium tracking-wider text-zinc-500 uppercase sm:text-sm'>
        {partnersSection.section.heading}
      </h2>
      <ul className='flex items-center gap-x-10 sm:gap-x-20'>
        {partnersSection.partners.map((partner, index) => (
          <li key={index} className='relative aspect-square w-20 sm:w-36'>
            {partner.logo?.asset && (
              <Image
                src={urlFor(partner.logo.asset).url()}
                alt={partner.logo?.alt ?? "Client's logo"}
                fill
                className='object-contain object-center'
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
