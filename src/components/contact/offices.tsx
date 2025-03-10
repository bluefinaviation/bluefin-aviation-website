'use client'

import { useState } from 'react'
import { Phone, WhatsappLogo, EnvelopeSimple } from '@phosphor-icons/react'

import { Map } from '@/components/contact/map'
import Link from 'next/link'

export interface Office {
  city: string
  importance?: string
  country: string
}

export const Offices = () => {
  const [selectedOffice, setSelectedOffice] = useState<Office | null>({
    city: 'Miami',
    importance: 'Headquarters',
    country: 'USA'
  })

  return (
    <div className='relative mt-8'>
      <Map
        selectedOffice={selectedOffice}
        setSelectedOffice={setSelectedOffice}
      />

      <div className='mt-8 border-t-2 border-primary pt-8'>
        <div className='flex flex-col justify-between gap-8 sm:flex-row'>
          <div className='flex flex-col gap-2 text-center sm:text-left'>
            <h3 className='font-serif text-2xl font-medium sm:text-3xl'>
              {selectedOffice?.importance
                ? selectedOffice.importance
                : `${selectedOffice?.city}, ${selectedOffice?.country}`}
            </h3>
            <p className='font-mono text-base text-gray-500 sm:text-lg'>
              {selectedOffice?.importance &&
                `${selectedOffice?.city}, ${selectedOffice?.country}`}
            </p>
          </div>

          <div className='grid gap-8 sm:grid-cols-3'>
            <Link
              href={`tel:0019545900851`}
              className='group flex flex-col items-center gap-2'
            >
              <Phone
                weight='fill'
                className='size-6 fill-primary tw-transition group-hover:fill-accent sm:size-8'
              />
              <p className='text-base sm:text-lg'>+1 (954) 590-0851</p>
            </Link>

            <Link
              href={`https://wa.me/0019548812932`}
              target='_blank'
              rel='noopener noreferrer'
              className='group flex flex-col items-center gap-2'
            >
              <WhatsappLogo
                weight='fill'
                className='size-6 fill-primary tw-transition group-hover:fill-accent sm:size-8'
              />
              <p className='text-base sm:text-lg'>+1 (954) 881-2932</p>
            </Link>

            <Link
              href={`mailto:operations@bluefinaviation.com`}
              target='_blank'
              rel='noopener noreferrer'
              className='group flex flex-col items-center gap-2'
            >
              <EnvelopeSimple
                weight='fill'
                className='size-6 fill-primary tw-transition group-hover:fill-accent sm:size-8'
              />
              <p className='text-base sm:text-lg'>
                operations@bluefinaviation.com
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
