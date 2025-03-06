'use client'

import Link from 'next/link'
import { motion } from 'motion/react'

import { PlaneSheet } from '@/components/shared/plane-sheet'
import { Button } from '@/components/ui/button'

import { Plane } from '@/sanity/types'

const MotionPlaneSheet = motion(PlaneSheet)

interface EmptyStateProps {
  hasFilters: boolean
}

const EmptyState = ({ hasFilters }: EmptyStateProps) => {
  return (
    <div className='flex flex-col items-center justify-center py-12 text-center'>
      <h3 className='mb-2 text-xl font-semibold'>No planes found</h3>
      <p className='mb-6 text-muted-foreground'>
        {hasFilters
          ? 'No planes match your selected filters. Try adjusting your criteria.'
          : 'There are no planes available at the moment.'}
      </p>
      {hasFilters && (
        <Link href='/charter'>
          <Button variant='outline'>Clear Filters</Button>
        </Link>
      )}
    </div>
  )
}

interface PlanesGridProps {
  planes: Plane[]
  hasFilters: boolean
}

export const PlanesGrid = ({ planes, hasFilters }: PlanesGridProps) => {
  if (planes.length === 0) {
    return <EmptyState hasFilters={hasFilters} />
  }

  return (
    <div className='mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {planes.map(plane => (
        <MotionPlaneSheet
          key={plane._id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          plane={plane}
        />
      ))}
    </div>
  )
}
