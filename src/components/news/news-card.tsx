import Image from 'next/image'
import Link from 'next/link'
import dayjs from 'dayjs'

import { Card, CardContent } from '@/components/ui/card'

interface Article {
  _id: string
  title: string
  slug: string
  image?: string
  publishedAt?: string
  excerpt?: string
}

interface NewsCardProps {
  article: Article
}

export function NewsCard({ article }: NewsCardProps) {
  const formattedDate = article.publishedAt
    ? dayjs(article.publishedAt).format('YYYY-MM-DD')
    : ''

  return (
    <Link href={`/news/${article.slug}`} className='group block'>
      <Card className='overflow-hidden border-0 transition-all duration-300 hover:shadow-md'>
        <div className='relative h-48 w-full overflow-hidden'>
          {article.image ? (
            <Image
              src={article.image}
              alt={article.title}
              fill
              className='object-cover transition-transform duration-300 group-hover:scale-105'
            />
          ) : (
            <div className='flex h-full w-full items-center justify-center bg-gray-200'>
              <span className='text-gray-400'>No image</span>
            </div>
          )}
        </div>

        <CardContent className='p-6'>
          {formattedDate && (
            <div className='mb-2 text-sm text-gray-500'>{formattedDate}</div>
          )}
          <h2 className='mb-3 text-xl font-semibold transition-colors group-hover:text-blue-600'>
            {article.title}
          </h2>
          {article.excerpt && (
            <p className='line-clamp-2 text-sm text-gray-600'>
              {article.excerpt}
            </p>
          )}
        </CardContent>
      </Card>
    </Link>
  )
}
