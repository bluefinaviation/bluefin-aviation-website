import Link from 'next/link'

import { Button } from '@/components/shared/Button'

export const Newsletter = () => {
  return (
    <div className="py-12 lg:flex lg:items-center lg:py-16">
      <div className="lg:w-0 lg:flex-1">
        <h2
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          id="newsletter-headline"
        >
          Sign up for our newsletter
        </h2>
        <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
        </p>
      </div>
      <div className="mt-8 lg:mt-0 lg:ml-8">
        <form className="sm:flex">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email-address"
            type="email"
            autoComplete="email"
            required
            className="w-full rounded-lg border border-transparent px-3 py-2 placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:max-w-xs"
            placeholder="Enter your email"
          />
          <div className="mt-3 rounded-lg shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <Button variant="outline" color="white">
              Subscribe
            </Button>
          </div>
        </form>
        <p className="mt-3 text-sm text-gray-300">
          We care about the protection of your data. Read our{' '}
          <Link
            href="/policies/privacy-policy"
            className="font-medium text-white underline"
          >
            Privacy Policy.
          </Link>
        </p>
      </div>
    </div>
  )
}
