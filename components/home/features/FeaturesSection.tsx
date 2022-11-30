import { Tb3DCubeSphere } from 'react-icons/tb'

import { FeaturesCard } from '@/components/home/features/FeaturesCard'
import { FeaturesList } from '@/components/home/features/FeaturesList'
import { Container } from '@/components/shared/Container'

const features = [
  {
    id: 1,
    name: 'Flexible Solutions',
    description:
      'Enjoy the benefits of a jet card or aircraft fractional ownership programs, without the heavy financial commitments.',
    icon: Tb3DCubeSphere,
  },
  {
    id: 2,
    name: 'Exclusive Shared Flights',
    description:
      'Clients can book a seat on selected routes, sharing the costs with like-minded people. Experience the benefits of flying private for a fraction of the price.',
    icon: Tb3DCubeSphere,
  },
  {
    id: 3,
    name: 'Operational Independence',
    description:
      'Our asset-light model alow us to take leverage of more than 5.000 aircraft and, through innovative optimization, deliver smart and cost-competitive flights.',
    icon: Tb3DCubeSphere,
  },
  {
    id: 4,
    name: 'Personalization',
    description:
      'We do not believe in “on-seize fits- all”. We take the time to understand why you need to fly so you get a solution suitable to your needs and budget.',
    icon: Tb3DCubeSphere,
  },
]

export const FeaturesSection = () => {
  return (
    <Container>
      <div className="relative mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why BlueFin?
            </h2>
          </div>
          <dl className="mt-10 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0">
            {features.map((feature) => (
              <div key={feature.id}>
                <dt>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-lg font-medium leading-6 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Container>
  )
}
