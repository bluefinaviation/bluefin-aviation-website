'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { Container } from './section-container'

interface StickyNavProps {
  className?: string
}

export function StickyNav({ className }: StickyNavProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentTab = searchParams.get('tab') || 'fleet'

  return (
    <div className={cn('sticky z-40 w-full bg-zinc-950 shadow-sm', className)}>
      <Container>
        <div className='flex h-14 items-center'>
          <div className='flex space-x-4'>
            <Link
              href={{ pathname, query: { tab: 'fleet' } }}
              replace
              scroll={false}
              className={cn(
                'flex h-14 items-center px-4 text-lg font-medium text-white/70 transition-colors hover:text-white',
                currentTab === 'fleet'
                  ? 'border-b-4 border-white text-white'
                  : ''
              )}
            >
              Fleet
            </Link>
            <Link
              href={{ pathname, query: { tab: 'empty-legs' } }}
              replace
              scroll={false}
              className={cn(
                'flex h-14 items-center px-4 text-lg font-medium text-white/70 transition-colors hover:text-white',
                currentTab === 'empty-legs'
                  ? 'border-b-4 border-white text-white'
                  : ''
              )}
            >
              Empty Legs
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
