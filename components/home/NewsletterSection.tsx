'use client';

import { PortableText } from '@portabletext/react';
import Link from 'next/link';

import { CircleBackground } from '@/components/backgrounds/CircleBackground';
import { Button } from '@/components/shared/Button';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { SectionSummary } from '@/components/shared/SectionSummary';

export function NewsletterSection({ newsletterSection }) {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden border-b border-slate-700 bg-slate-900 py-20 sm:py-28"
    >
      <div className="absolute top-1/2 left-20 z-0 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#93c5fd" className="animate-spin-slower" />
      </div>

      <Container className="z-50 flex flex-col gap-8 lg:flex-row lg:items-center">
        <div>
          <SectionHeading className="text-gray-50">
            {newsletterSection.section.heading}
          </SectionHeading>
          <SectionSummary className="text-gray-200">
            <PortableText value={newsletterSection.section.summary} />
          </SectionSummary>
        </div>

        <div>
          <form className="w-full sm:flex">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-lg border-gray-300 px-3 py-2 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 sm:max-w-xs"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-lg shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <Button variant="outline" color="white" className="w-full">
                Subscribe
              </Button>
            </div>
          </form>

          <p className="mt-3 text-xs text-gray-300 lg:text-sm">
            We care about the protection of your data. Read our{' '}
            <Link
              href="/policies/privacy-policy"
              className="tw-transition font-medium underline hover:text-gray-400"
            >
              Privacy Policy.
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
