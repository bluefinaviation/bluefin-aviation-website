import Image from 'next/image'
import Link from 'next/link'
import dayjs from 'dayjs'

import { Article } from '@/sanity/types'
import { urlFor } from '@/sanity/lib/image'

interface NewsCardProps {
  article: Article
}

export function NewsCard({ article }: NewsCardProps) {
  const formattedDate = article.publishedAt
    ? formatDate(article.publishedAt)
    : ''

  // Function to format date as "12th Jun 2024"
  function formatDate(dateString: string) {
    const date = dayjs(dateString)
    const day = date.date()
    const month = date.format('MMM')
    const year = date.year()

    // Add ordinal suffix to day
    const suffix = getDaySuffix(day)

    return `${day}${suffix} ${month} ${year}`
  }

  // Function to get the ordinal suffix for a day (st, nd, rd, th)
  function getDaySuffix(day: number) {
    if (day > 3 && day < 21) return 'th'
    switch (day % 10) {
      case 1:
        return 'st'
      case 2:
        return 'nd'
      case 3:
        return 'rd'
      default:
        return 'th'
    }
  }

  console.log(article)
  return (
    <Link href={`/news/${article.slug}`}>
      <div className='group relative flex cursor-pointer flex-col overflow-hidden border border-zinc-200 bg-zinc-50 tw-transition hover:scale-105 hover:bg-white'>
        <div className='relative aspect-[3/2] w-full bg-zinc-100'>
          {article.mainImage ? (
            <Image
              src={urlFor(article.mainImage).url()}
              alt={article.title ?? ''}
              fill
              className='object-cover object-center'
            />
          ) : (
            <div className='flex h-full w-full items-center justify-center bg-zinc-100'>
              <span className='text-zinc-400'>No image</span>
            </div>
          )}
        </div>

        <div className='p-6'>
          {formattedDate && (
            <div className='mb-2 text-sm text-zinc-500'>{formattedDate}</div>
          )}
          <h2 className='text-xl font-semibold transition-colors group-hover:text-blue-600 sm:text-2xl'>
            {article.title}
          </h2>
        </div>

        {/* Blue hover bar at the top */}
        <div className='absolute top-0 right-0 left-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100'></div>
      </div>
    </Link>
  )
}
