import clsx from 'clsx'
import { useRouter } from 'next/router'

import { Footer } from '@/components/navigation/Footer'
import { Header } from '@/components/navigation/Header'

interface IProps {
  children: React.ReactNode
  className?: string
}

export const Layout = ({ children, className }: IProps) => {
  const router = useRouter()
  const studioSlug = router.asPath.split('/')[1]

  return (
    <main className={clsx(className, 'h-full min-h-screen')}>
      <Header className={clsx(studioSlug === 'studio' && 'hidden')} />
      {children}
      <Footer className={clsx(studioSlug === 'studio' && 'hidden')} />
    </main>
  )
}
