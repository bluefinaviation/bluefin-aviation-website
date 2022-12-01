import Image from 'next/image';

import { FeatureContainer } from '@/components/contact/FeatureContainer';
import { FeatureLabel } from '@/components/contact/FeatureLabel';
import { FeatureList } from '@/components/contact/FeatureList';
import { MapContainer } from '@/components/contact/MapContainer';
import { Container } from '@/components/shared/Container';
import { PageContainer } from '@/components/shared/PageContainer';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { getContactPage } from '@/lib/sanity.client';
import { urlForImage } from '@/lib/sanity.image';

export default async function ContactRoute() {
  const [contactPageData] = await Promise.all([getContactPage()]);
  return (
    <PageContainer>
      <h1 className="sr-only">Contact Us</h1>

      <Container className="py-8 sm:py-16 lg:py-24">
        <SectionHeading>Get in Touch</SectionHeading>
        <div className="flex flex-col gap-y-6 sm:flex-row sm:gap-y-0 sm:gap-x-12">
          <div className="relative col-span-1 h-64 w-full sm:h-72 sm:w-1/2 lg:h-96">
            <Image
              src={
                contactPageData.contactSection.section?.image?.asset?._ref
                  ? urlForImage(contactPageData.contactSection.section.image)
                      .width(1600)
                      .height(1200)
                      .fit('crop')
                      .url()
                  : 'https://source.unsplash.com/1080x1080/?plane'
              }
              alt={contactPageData.contactSection.section?.image?.alt}
              width={1600}
              height={1200}
              priority
              className="h-full rounded-lg bg-gray-200 object-cover object-center shadow"
            />
          </div>

          <div className="col-span-1 w-full sm:w-1/2">
            <FeatureList>
              {contactPageData.contactSection.contacts.map((contact) => (
                <FeatureContainer key={contact._key}>
                  <FeatureLabel>{contact.cta}</FeatureLabel>
                  <dl className="mt-2 break-words text-base text-gray-500 lg:text-lg">
                    <div>
                      <dt className="sr-only">{contact.channel}</dt>
                      <a
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tw-transition font-medium hover:text-blue-700"
                      >
                        <dd>{contact.info}</dd>
                      </a>
                    </div>
                  </dl>
                </FeatureContainer>
              ))}
            </FeatureList>
          </div>
        </div>
      </Container>

      <div className="bg-gray-100">
        <Container className="py-8 sm:py-16 lg:py-24">
          <SectionHeading>Our Offices</SectionHeading>
          <div className="flex flex-col gap-y-6 sm:flex-row sm:gap-y-0 sm:gap-x-12">
            <div className="h-64 w-full sm:h-72 sm:w-1/2 lg:h-96">
              <div className="h-full w-full rounded-lg bg-blue-900 p-3 shadow">
                <MapContainer
                  locations={contactPageData.locationSection?.locations}
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <FeatureList>
                {contactPageData.locationSection.locations.map((location) => (
                  <FeatureContainer key={location._key}>
                    <FeatureLabel>
                      {location.city} ({location.country})
                    </FeatureLabel>
                    <dl className="mt-2 text-base text-gray-500 lg:text-lg">
                      <div>
                        <dt className="sr-only">Office Locations</dt>
                        <dd className="font-medium">
                          {location.isHq ? 'Headquarters' : 'Office'}
                        </dd>
                      </div>
                    </dl>
                  </FeatureContainer>
                ))}
              </FeatureList>
            </div>
          </div>
        </Container>
      </div>
    </PageContainer>
  );
}

export const revalidate = 1;
