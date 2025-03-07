import { Stat } from '@/sanity/types'

export const StatsCard = ({ stat }: { stat: Stat }) => {
  return (
    <li className='col-span-1 py-6 text-center lg:py-0'>
      <h3 className='text-5xl font-semibold text-zinc-50 lg:text-6xl'>
        {stat.value}
      </h3>
      <p className='mt-1 text-sm font-medium text-zinc-300 md:mt-1.5 lg:mt-2 lg:text-base'>
        {stat.title}
      </p>
    </li>
  )
}
