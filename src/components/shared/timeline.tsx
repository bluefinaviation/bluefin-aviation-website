'use client'

import { useRef, Fragment } from 'react'
import { motion } from 'motion/react'

import { cn } from '@/lib/utils'
import { TimelineEvent as TimelineEventType } from '@/sanity/types'

function TimelineEvent({
  event,
  index,
  isLeft
}: {
  event: TimelineEventType
  index: number
  isLeft: boolean
}) {
  const ref = useRef(null)

  const content = (
    <div
      className={cn(
        'pr-4 pl-12',
        isLeft ? 'sm:pr-24 sm:pl-0' : 'sm:pr-0 sm:pl-24'
      )}
    >
      <div className='mb-4'>
        <span className='font-mono text-2xl font-bold text-primary sm:text-3xl md:text-4xl'>
          {event.year}
        </span>
      </div>
      <p className='leading-relaxed'>{event.description}</p>
    </div>
  )

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className='py-4 sm:py-0'
    >
      {content}
    </motion.div>
  )
}

export function Timeline({
  events,
  className
}: {
  events: TimelineEventType[]
  className?: string
}) {
  return (
    <div
      className={cn(
        'relative mt-8 overflow-x-hidden sm:mt-12 md:mt-16',
        className
      )}
    >
      {/* Timeline content */}
      <div className='relative mx-auto max-w-6xl px-4 sm:px-6'>
        {/* Vertical line with dots */}
        <div className='absolute top-0 bottom-0 left-4 w-4 sm:left-1/2'>
          <div className='absolute top-[12.5%] bottom-[12.5%] left-1/2 w-[1px] -translate-x-1/2 bg-black/20'>
            {events.map((_, index) => (
              <div
                key={index}
                className='absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-black'
                style={{
                  top: `${(index / (events.length - 1)) * 100}%`
                }}
              />
            ))}
          </div>
        </div>

        {/* Events */}
        <div className='relative grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-y-16'>
          {events.map((event, index) => (
            <Fragment key={event.title}>
              {index % 2 === 0 ? (
                <>
                  {/* Left event */}
                  <TimelineEvent event={event} index={index} isLeft={true} />
                  {/* Empty right - hidden on mobile */}
                  <div className='hidden sm:block' />
                </>
              ) : (
                <>
                  {/* Empty left - hidden on mobile */}
                  <div className='hidden sm:block' />
                  {/* Right event */}
                  <TimelineEvent event={event} index={index} isLeft={false} />
                </>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
