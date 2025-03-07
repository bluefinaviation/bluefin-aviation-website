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
    <div className={cn(isLeft ? 'pr-24' : 'pl-24')}>
      <div className='mb-4'>
        <span className='font-mono text-3xl font-bold text-primary sm:text-4xl'>
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
    <div className={cn('relative mt-12 sm:mt-16', className)}>
      {/* Timeline content */}
      <div className='relative mx-auto max-w-6xl'>
        {/* Vertical line with dots */}
        <div className='absolute top-0 bottom-0 left-1/2 w-4'>
          <div className='-tranzinc-x-1/2 absolute top-[12.5%] bottom-[12.5%] left-1/2 w-[1px] bg-black/20'>
            {events.map((_, index) => (
              <div
                key={index}
                className='-tranzinc-x-1/2 absolute left-1/2 h-2 w-2 rounded-full bg-black'
                style={{
                  top: `${(index / (events.length - 1)) * 100}%`
                }}
              />
            ))}
          </div>
        </div>

        {/* Events */}
        <div className='relative grid grid-cols-2 gap-y-16'>
          {events.map((event, index) => (
            <Fragment key={event.title}>
              {index % 2 === 0 ? (
                <>
                  {/* Left event */}
                  <TimelineEvent event={event} index={index} isLeft={true} />
                  {/* Empty right */}
                  <div />
                </>
              ) : (
                <>
                  {/* Empty left */}
                  <div />
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
