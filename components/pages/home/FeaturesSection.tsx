import {
  BoltIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';

import { Container } from '@/components/global/Container';
import { SectionHeading } from '@/components/global/SectionHeading';
import { SectionSummary } from '@/components/global/SectionSummary';

const features = [
  {
    name: 'Competitive rates',
    description:
      'Consequuntur omnis dicta cumque, inventore atque ab dolores aspernatur tempora ab doloremque.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Corporis quisquam nostrum nulla veniam recusandae temporibus aperiam officia incidunt at distinctio ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Instant transfers',
    description:
      'Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi velit doloribus mollitia.',
    icon: BoltIcon,
  },
  {
    name: 'Reminder emails',
    description:
      'Veniam necessitatibus reiciendis fugit explicabo dolorem nihil et omnis assumenda odit? Quisquam unde accusantium.',
    icon: EnvelopeIcon,
  },
];

export const FeaturesSection = () => {
  return (
    <Container className="relative py-20 sm:py-32 lg:grid lg:grid-cols-3 lg:gap-x-8">
      <div className="lg:col-span-1">
        <SectionHeading>Why BlueFin?</SectionHeading>
        <SectionSummary>
          Spain and Italy serving the rest of the world. All offices manage fuel
          supply, trip support, handling and flight planning services.
        </SectionSummary>
      </div>
      <dl className="mt-10 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0">
        {features.map((feature) => (
          <div key={feature.name}>
            <dt>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700 text-white">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="mt-5 text-lg font-medium leading-6 text-slate-900">
                {feature.name}
              </p>
            </dt>
            <dd className="mt-2 text-base text-slate-500">
              {feature.description}
            </dd>
          </div>
        ))}
      </dl>
    </Container>
  );
};
