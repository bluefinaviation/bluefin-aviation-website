import Link from 'next/link'
import { PortableText } from '@portabletext/react'

import { Logo } from '@/components/branding/logo'
import { NewsletterFooterForm } from '@/components/forms/newsletter-footer-form'

import { navigation } from '@/data/nav-links'
import { COMPANY_NAME } from '@/lib/constants'
import { FooterPayload } from '@/types'
import { sanityFetch } from '@/sanity/lib/fetch'
import { footerQuery } from '@/sanity/lib/queries'

export interface FooterProps {
  data: FooterPayload | null
}

export const Footer = async () => {
  const footerData = await sanityFetch({
    query: footerQuery
  })

  if (!footerData) return null

  return (
    <footer className='bg-slate-900' aria-labelledby='footer-heading'>
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

          <ul className='col-start-3 mt-16 flex items-center justify-between xl:mt-0'>
            {navigation.main.map(item => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className='tw-transition text-base text-slate-50 hover:text-slate-300 sm:text-lg'
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='mt-16 border-t border-white/10 pt-8 sm:mt-10 lg:mt-12 lg:flex lg:items-center lg:justify-between'>
          <div>
            <h3 className='text-base font-semibold leading-6 text-white sm:text-lg'>
              {footerData.newsletter.section.heading}
            </h3>
            <div className='mt-2 text-sm leading-6 text-slate-300 sm:text-base'>
              <PortableText value={footerData.newsletter.section.summary!} />
            </div>
          </div>
          <NewsletterFooterForm />
        </div>

        <div className='mt-8 flex justify-between border-t border-white/10 pt-8 text-xs'>
          <p className='leading-5 text-slate-400 md:order-1 md:mt-0'>
            &copy; {COMPANY_NAME} {new Date().getFullYear()}
          </p>

          <div className='flex space-x-6 md:order-2'>
            {navigation.social.map(item => (
              <a
                key={item.name}
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                className='tw-transition text-slate-400 hover:text-slate-300'
              >
                <span className='sr-only'>{item.name}</span>
                <item.icon className='size-6' aria-hidden='true' />
              </a>
            ))}
          </div>
        </div>

        <ul className='mt-8 flex place-content-center gap-x-3 text-xs'>
          {footerData.policies.map(policy => (
            <li key={policy.id} className='text-slate-400 hover:text-slate-300'>
              <Link href={`/policies/${policy.slug}`}>{policy.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
