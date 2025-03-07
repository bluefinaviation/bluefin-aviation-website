import Link from 'next/link'
import { LinktreeLink } from '@/sanity/types'

export const LinktreeItem = ({ link }: { link: LinktreeLink }) => {
  return (
    <li>
      <Link
        href={link.linkUrl ?? '/'}
        className='tw-transition group grid gap-y-2.5 rounded-2xl border-2 border-blue-900 bg-white p-5 text-center text-blue-900 hover:scale-105'
      >
        <h2 className='text-base font-semibold sm:text-lg'>{link.label}</h2>
        <p className='text-sm text-zinc-900'>{link.description}</p>
      </Link>
    </li>
  )
}
