import Image from 'next/image'
import {
  ArrowRight,
  CalendarBlank,
  Clock,
  Seat
} from '@phosphor-icons/react/dist/ssr'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { EmptyLegsForm } from '@/components/forms/empty-legs-form'

import { sanityFetch } from '@/sanity/lib/live'
import { EMPTY_LEGS_QUERY } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import { formatFlightTimes, formatPrice } from '@/lib/utils'

export const EmptyLegs = async () => {
  const { data: emptyLegs } = await sanityFetch({
    query: EMPTY_LEGS_QUERY
  })

  return (
    <div className='s8'>
      {emptyLegs.map((emptyLeg, index) => {
        const times = formatFlightTimes(
          emptyLeg.departureTime || '',
          emptyLeg.arrivalTime || ''
        )
        return (
          <div
            key={emptyLeg._id}
            className={`pb-6 ${
              index !== emptyLegs.length - 1
                ? 'mb-6 border-b border-zinc-200'
                : 'mb-4'
            } flex flex-col justify-between sm:flex-row`}
          >
            <div className='flex flex-col gap-4 lg:flex-row lg:gap-x-8'>
              <div className='flex flex-col gap-y-2'>
                <div className='relative aspect-video w-full lg:w-56'>
                  {emptyLeg.plane?.image && (
                    <Image
                      src={urlFor(emptyLeg.plane.image).url()}
                      alt={emptyLeg.plane.model || 'Aircraft'}
                      fill
                      className='rounded-lg object-cover'
                    />
                  )}
                </div>
                <h4 className='font-mono text-xs uppercase'>
                  {emptyLeg.plane?.manufacturer?.name} {emptyLeg.plane?.model}
                </h4>
              </div>
              <div className='flex flex-1 flex-col gap-y-4 text-primary'>
                <div className='flex flex-col items-start gap-y-2 font-serif text-2xl font-bold lg:flex-row lg:items-center lg:gap-x-4 lg:text-3xl'>
                  <h3>
                    {emptyLeg.origin?.city} ({emptyLeg.origin?.airportCode})
                  </h3>
                  <ArrowRight className='hidden size-6 lg:block' />
                  <h3>
                    {emptyLeg.destination?.city} (
                    {emptyLeg.destination?.airportCode})
                  </h3>
                </div>

                <div className='flex flex-col gap-y-2 lg:flex-row lg:gap-x-4'>
                  <div className='flex items-center gap-x-2'>
                    <CalendarBlank
                      weight='fill'
                      className='size-5 text-primary lg:size-6'
                    />
                    <p className='text-sm lg:text-base'>
                      {times.date || times.departureDate} {times.departureTime}
                    </p>
                  </div>
                  <div className='flex items-center gap-x-2'>
                    <Clock
                      weight='fill'
                      className='size-5 text-primary lg:size-6'
                    />
                    <p className='text-sm lg:text-base'>{times.duration}</p>
                  </div>
                  <div className='flex items-center gap-x-2'>
                    <Seat
                      weight='fill'
                      className='size-5 text-primary lg:size-6'
                    />
                    <p className='text-sm lg:text-base'>
                      Up to {emptyLeg.plane?.capacity} passengers
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-4 flex flex-col gap-y-2 lg:mt-0'>
              <p className='text-2xl font-bold lg:text-3xl'>
                {formatPrice(emptyLeg.price || 0)}
              </p>
              <Sheet>
                <SheetTrigger asChild>
                  <Button size='lg' className='w-full lg:w-auto'>
                    Enquire Now
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Empty Leg Enquiry</SheetTitle>
                    <SheetDescription>
                      {`Interested in this empty leg flight from ${emptyLeg.origin?.city || ''} to ${emptyLeg.destination?.city || ''}. Fill out the form below and we'll get back to you as soon as possible.`}
                    </SheetDescription>
                  </SheetHeader>

                  <div className='px-4 py-8'>
                    <EmptyLegsForm emptyLeg={emptyLeg} />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        )
      })}
    </div>
  )
}
