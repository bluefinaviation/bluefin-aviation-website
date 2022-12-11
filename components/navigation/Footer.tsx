'use client';
import clsx from 'clsx';
import Link from 'next/link';
import {
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from 'react-icons/tb';

import { Logo } from '@/components/logos/Logo';
import { Container } from '@/components/shared/Container';
import { COMPANY_NAME } from '@/utils/constants';

const navigation = {
  main: [
    {
      id: 1,
      name: 'Services',
      href: '/services',
    },
    {
      id: 2,
      name: 'About',
      href: '/about',
    },
    {
      id: 3,
      name: 'Contact',
      href: '/contact',
    },
  ],
  social: [
    {
      id: 1,
      name: 'Instagram',
      href: 'https://www.instagram.com/bluefin_aviation/?hl=en',
      icon: TbBrandInstagram,
    },
    {
      id: 2,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/bluefin-aviation-services',
      icon: TbBrandLinkedin,
    },
    {
      id: 3,
      name: 'WhatsApp',
      href: 'https://wa.me/+19548812932',
      icon: TbBrandWhatsapp,
    },
  ],
  //   policies: [
  //     { id: 1, name: 'Cookie Policy', href: '/policies/cookie-policy' },
  //     { id: 2, name: 'Privacy Policy', href: '/policies/privacy-policy' },
  //     {
  //       id: 3,
  //       name: 'Terms & Conditions',
  //       href: '/policies/terms-and-conditions',
  //     },
  //   ],
};

export const Footer = ({ className }) => {
  return (
    <footer className={clsx('bg-gray-900', className)}>
      <Container>
        <div className="grid grid-cols-1 place-items-center gap-y-12 py-24 text-base text-gray-300 sm:text-lg lg:grid-cols-3 lg:gap-y-0">
          <Link
            href="/"
            className="tw-transition group col-span-1 flex items-center opacity-80 hover:opacity-100"
          >
            <Logo
              darkColor="#f9fafb"
              lightColor="#f9fafb"
              className="tw-transition w-32 lg:w-44"
            />
          </Link>
          <nav className="col-span-1">
            <ul className="flex items-center gap-x-6">
              {navigation.main.map((item) => (
                <Link
                  href={item.href}
                  key={item.id}
                  className="tw-transition hover:text-gray-50"
                >
                  <li>{item.name}</li>
                </Link>
              ))}
            </ul>
          </nav>
          <div className="col-span-1">
            <ul className="flex items-center gap-x-6">
              {navigation.social.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tw-transition hover:text-gray-50"
                  >
                    <item.icon className="h-6 w-6 lg:h-8 lg:w-8" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-y-2 gap-x-6 py-3 text-xs text-gray-500 sm:text-sm lg:flex-row">
          <p>
            &copy; {COMPANY_NAME} {new Date().getFullYear()}
          </p>
          {/* <span className="hidden lg:block">|</span>
          <ul className="flex gap-x-3">
            {navigation.policies.map((policy) => (
              <Link
                key={policy.id}
                href={policy.href}
                className="tw-transition hover:text-gray-300"
              >
                <li>{policy.name}</li>
              </Link>
            ))}
          </ul> */}
        </div>
      </Container>
    </footer>
  );
};
