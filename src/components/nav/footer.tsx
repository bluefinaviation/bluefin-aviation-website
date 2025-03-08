import Link from 'next/link'
import { PortableText } from '@portabletext/react'

import { Logo } from '@/components/branding/logo'
import { NewsletterFooterForm } from '@/components/forms/newsletter-footer-form'

import { navigation } from '@/data/nav-links'
import { COMPANY_NAME, NAV_LINKS } from '@/lib/constants'
import { FOOTER_QUERY } from '@/sanity/lib/queries'
import { sanityFetch } from '@/sanity/lib/live'

export const Footer = async () => {
  const { data: footer } = await sanityFetch({
    query: FOOTER_QUERY
  })

  return (
    <footer className='bg-zinc-950' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-7xl px-6 py-8 sm:pt-12 lg:px-8 lg:pt-16'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <Link
            href='/'
            aria-label='Bluefin Aviation Homepage'
            className='tw-transition group col-span-1 flex place-content-center items-center opacity-80 hover:opacity-100 sm:place-content-start'
          >
            <Logo
              darkColor='#e2e8f0'
              lightColor='#f8fafc'
              className='tw-transition w-32 sm:w-44'
            />
          </Link>

          <ul className='col-start-4 mt-16 flex flex-wrap items-center justify-between sm:gap-x-8 xl:mt-0'>
            {NAV_LINKS.map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className='tw-transition text-base text-zinc-50 hover:text-zinc-300 sm:text-lg'
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='mt-16 border-t border-white/10 pt-8 sm:mt-10 lg:mt-12 lg:flex lg:items-center lg:justify-between'>
          <div>
            <h3 className='text-base leading-6 font-semibold text-white sm:text-lg'>
              {`Subscribe to Our Newsletter`}
            </h3>
            <div className='mt-2 text-sm leading-6 text-zinc-300 sm:text-base'>
              Sign up and stay up-to-date with the latest Bluefin Aviation news
              and promotions.
            </div>
          </div>
          <NewsletterFooterForm />
        </div>

        <div className='mt-8 flex justify-between border-t border-white/10 pt-8 text-xs'>
          <p className='leading-5 text-zinc-400 md:order-1 md:mt-0'>
            &copy; {COMPANY_NAME} {new Date().getFullYear()}
          </p>

          <div className='flex space-x-6 md:order-2'>
            {navigation.social.map(item => (
              <a
                key={item.name}
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                className='tw-transition text-zinc-400 hover:text-zinc-300'
              >
                <span className='sr-only'>{item.name}</span>
                <item.icon
                  weight='fill'
                  className='size-6'
                  aria-hidden='true'
                />
              </a>
            ))}
          </div>
        </div>

        <ul className='mt-8 flex place-content-center gap-x-3 text-xs'>
          {footer.policies.map(policy => (
            <li key={policy.id} className='text-zinc-400 hover:text-zinc-300'>
              <Link href={`/policies/${policy.slug}`}>{policy.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
