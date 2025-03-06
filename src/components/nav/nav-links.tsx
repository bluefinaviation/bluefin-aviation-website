'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface NavLinksProps {
  className?: string
}

export function NavLinks({ className }: NavLinksProps) {
  const pathname = usePathname()

  return (
    <div className='hidden items-center font-medium sm:flex'>
      <div className='flex gap-16 bg-primary p-8'>
        {NAV_LINKS.map(link => {
          return (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                'relative -mb-8 pb-8 text-lg transition-all duration-300',
                'after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-transparent after:transition-all after:duration-300',
                pathname === link.href
                  ? 'text-white after:bg-white'
                  : 'text-white/80 hover:text-white hover:after:bg-white',
                className
              )}
            >
              {link.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
