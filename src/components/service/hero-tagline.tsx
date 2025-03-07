import { ReactNode } from 'react'

interface HeroTaglineProps {
  children: ReactNode
}

export const HeroTagline = ({ children }: HeroTaglineProps) => {
  return (
    <p className='text-base font-medium tracking-wider text-zinc-200 uppercase sm:text-lg lg:text-xl'>
      {children}
    </p>
  )
}
