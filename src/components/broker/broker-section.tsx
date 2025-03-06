import Link from 'next/link'

import { MidsizeJetIcon } from '@/components/icons/midsize-jet'
import { LightJetIcon } from '@/components/icons/light-jet'
import { HeavyJetIcon } from '@/components/icons/heavy-jet'
import { SuperMidsizeJetIcon } from '@/components/icons/super-midsize-jet'
import { SectionHeading } from '@/components/shared/section-heading'
import { SectionSummary } from '@/components/shared/section-summary'
import { Container } from '@/components/shared/section-container'

export const BrokerSection = () => {
  return (
    <section className='py-16 sm:py-24'>
      <Container>
        <div className='flex flex-col items-center justify-center text-center'>
          <SectionHeading>{`Explore Our Fleet`}</SectionHeading>
          <SectionSummary className='mt-4'>
            {`Our full-service broker will cover all your aviation needs. With a fleet of over 20 aircraft, we have an option for your short, medium and long range trips.`}
          </SectionSummary>
        </div>
        <div className='grid grid-cols-2 place-items-end justify-center gap-16 py-10 sm:flex sm:flex-wrap sm:items-end sm:gap-32'>
          <Link
            href='/charter?category=light'
            className='group flex w-full flex-col items-center gap-y-4 sm:w-auto'
          >
            <LightJetIcon className='group-hover:-tranzinc-y-2 size-16 fill-slate-300 stroke-slate-300 transition-all duration-300 group-hover:fill-primary group-hover:stroke-primary' />
            <h3 className='font-mono text-xs font-medium tracking-wide uppercase'>
              Light Jets
            </h3>
          </Link>
          <Link
            href='/charter?category=midsize'
            className='group flex w-full flex-col items-center gap-y-4 sm:w-auto'
          >
            <MidsizeJetIcon className='group-hover:-tranzinc-y-2 size-20 fill-slate-300 stroke-slate-300 transition-all duration-300 group-hover:fill-primary group-hover:stroke-primary' />
            <h3 className='font-mono text-xs font-medium tracking-wide uppercase'>
              Midsize Jets
            </h3>
          </Link>
          <Link
            href='/charter?category=super-midsize'
            className='group flex w-full flex-col items-center gap-y-4 sm:w-auto'
          >
            <SuperMidsizeJetIcon className='group-hover:-tranzinc-y-2 size-24 fill-slate-300 stroke-slate-300 transition-all duration-300 group-hover:fill-primary group-hover:stroke-primary' />
            <h3 className='font-mono text-xs font-medium tracking-wide uppercase'>
              Super Midsize Jets
            </h3>
          </Link>
          <Link
            href='/charter?category=heavy'
            className='group flex w-full flex-col items-center gap-y-4 sm:w-auto'
          >
            <HeavyJetIcon className='group-hover:-tranzinc-y-2 size-32 fill-slate-300 stroke-slate-300 transition-all duration-300 group-hover:fill-primary group-hover:stroke-primary' />
            <h3 className='font-mono text-xs font-medium tracking-wide uppercase'>
              Heavy Jets
            </h3>
          </Link>
        </div>
      </Container>
    </section>
  )
}
