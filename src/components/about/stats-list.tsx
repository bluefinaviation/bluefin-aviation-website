import { ReactNode } from 'react'

export const StatsList = ({ children }: { children: ReactNode }) => {
  return (
    <ul className='grid-cols grid divide-y divide-zinc-500 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0'>
      {children}
    </ul>
  )
}
