import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface PageTitleProps {
  children: ReactNode
  className?: string
}

export const PageTitle = ({ children, className }: PageTitleProps) => {
  return (
    <h1
      className={cn(
        'mb-4 text-4xl font-black text-white uppercase sm:text-6xl',
        className
      )}
    >
      {children}
    </h1>
  )
}
