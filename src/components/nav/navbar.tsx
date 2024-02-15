'use client'

import { Popover } from '@headlessui/react'
import { Bars3Icon, ChevronUpIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

import { Logo } from '@/components/branding/logo'
import { MobileNavLink } from '@/components/nav/mobile-nav-link'
import { NavLinks } from '@/components/nav/nav-links'
import { Container } from '@/components/shared/section-container'

export const Navbar = () => {
  return (
    <header>
      <nav>
        <Container className='relative z-50 flex h-16 items-center justify-between sm:h-20 lg:h-24'>
          <div className='relative z-10 flex w-full items-center justify-between gap-16'>
            <Link href='/' aria-label='Home'>
              <Logo
                darkColor='#00184f'
                lightColor='#1d63ab'
                className='h-14 w-auto sm:h-14 lg:h-20'
              />
            </Link>
            <div className='hidden lg:flex lg:gap-10'>
              <NavLinks />
            </div>
          </div>
          <div className='flex items-center gap-6'>
            <Popover className='lg:hidden'>
              {({ open }) => (
                <>
                  <Popover.Button
                    className='relative z-10 -m-2 inline-flex items-center rounded-lg stroke-slate-900 p-2 hover:bg-slate-200/50 hover:stroke-slate-600 active:stroke-slate-900 [&:not(:focus-visible)]:focus:outline-none'
                    aria-label='Toggle site navigation'
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className='size-6' />
                      ) : (
                        <Bars3Icon className='size-6' />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className='fixed inset-0 z-0 bg-slate-300/60 backdrop-blur'
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 }
                          }}
                          className='rounded-lg-b-2xl absolute inset-x-0 top-0 z-0 origin-top bg-slate-50 px-6 pb-6 pt-32 shadow shadow-slate-900/20'
                        >
                          <div className='flex flex-col space-y-4'>
                            <MobileNavLink href='/services'>
                              Services
                            </MobileNavLink>
                            <MobileNavLink href='/about'>About</MobileNavLink>
                            <MobileNavLink href='/contact'>
                              Contact
                            </MobileNavLink>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
          </div>
        </Container>
      </nav>
      {/* <InquirySlideOver
          closeInquiry={closeInquiry}
          isInquiryOpen={isInquiryOpen}
        /> */}
    </header>
  )
}
