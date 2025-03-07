export const NewsletterSection = () => {
  return (
    // <div className="bg-white py-16 sm:py-24">
    <div className='relative isolate overflow-hidden bg-zinc-900 px-6 py-24 shadow-2xl sm:px-24 xl:py-32'>
      <h2 className='mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl'>
        Get notified when we’re launching.
      </h2>
      <p className='mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-zinc-300'>
        Reprehenderit ad esse et non officia in nulla. Id proident tempor
        incididunt nostrud nulla et culpa.
      </p>
      <form className='mx-auto mt-10 flex max-w-md gap-x-4'>
        <label htmlFor='email-address' className='sr-only'>
          Email address
        </label>
        <input
          id='email-address'
          name='email'
          type='email'
          autoComplete='email'
          required
          className='min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-xs ring-1 ring-white/10 ring-inset focus:ring-2 focus:ring-white focus:ring-inset sm:text-sm sm:leading-6'
          placeholder='Enter your email'
        />
        <button
          type='submit'
          className='flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-zinc-900 shadow-xs hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
        >
          Notify me
        </button>
      </form>
      <svg
        viewBox='0 0 1024 1024'
        className='-tranzinc-x-1/2 absolute top-1/2 left-1/2 -z-10 size-[64rem]'
        aria-hidden='true'
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
          fillOpacity='0.7'
        />
        <defs>
          <radialGradient
            id='759c1415-0410-454c-8f7c-9a820de03641'
            cx={0}
            cy={0}
            r={1}
            gradientUnits='userSpaceOnUse'
            gradientTransform='translate(512 512) rotate(90) scale(512)'
          >
            <stop stopColor='#3b82f6' />
            <stop offset={1} stopColor='#1d4ed8' stopOpacity={0} />
          </radialGradient>
        </defs>
      </svg>
    </div>
    // </div>
  )
}
