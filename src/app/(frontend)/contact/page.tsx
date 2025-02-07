import { Metadata } from "next";

import { FeatureContainer } from "@/components/contact/feature-container";
import { FeatureLabel } from "@/components/contact/feature-label";
import { FeatureList } from "@/components/contact/feature-list";
import { ImageCustom } from "@/components/shared/image-custom";
import { PageContainer } from "@/components/shared/pace-container";
import { Container } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { MapContainer } from "@/components/contact/map-container";

import { CONTACT_PAGE_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default async function ContactPage() {
  const { data: contactPageData } = await sanityFetch({
    query: CONTACT_PAGE_QUERY,
  });

  if (!contactPageData) return null;

  return (
    <PageContainer>
      <h1 className="sr-only">Contact Us</h1>

      <Container className="py-8 sm:py-16 lg:py-24">
        <SectionHeading>Get in Touch</SectionHeading>
        <div className="flex flex-col gap-y-6 sm:flex-row sm:gap-x-12 sm:gap-y-0">
          <div className="relative col-span-1 h-64 w-full sm:h-72 sm:w-1/2 lg:h-96">
            <ImageCustom
              image={contactPageData.contactSection?.section?.image}
              alt={
                (contactPageData.contactSection?.section?.image
                  ?.alt as string) ?? "Plane"
              }
              width={1920}
              height={1280}
              priority
              sizes="(min-width: 1360px) 604px, (min-width: 640px) 45.71vw, calc(100vw - 24px)"
              className="relative h-full rounded-lg bg-slate-200 object-cover object-center shadow-sm"
            />
          </div>

          <div className="col-span-1 w-full sm:w-1/2">
            <FeatureList>
              {contactPageData.contactSection?.contacts?.map((contact, idx) => (
                <FeatureContainer key={idx}>
                  <FeatureLabel>{contact.cta}</FeatureLabel>
                  <dl className="mt-2 break-words text-base text-slate-500 lg:text-lg">
                    <dd className="tw-transition font-medium hover:text-blue-700">
                      <a
                        href={contact.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {contact.label}
                      </a>
                    </dd>
                  </dl>
                </FeatureContainer>
              ))}
            </FeatureList>
          </div>
        </div>
      </Container>

      <Container className="py-8 sm:py-16 lg:py-24">
        <SectionHeading>Our Offices</SectionHeading>
        <div className="flex flex-col gap-y-6 sm:flex-row sm:gap-x-12 sm:gap-y-0">
          <div className="h-64 w-full sm:h-72 sm:w-1/2 lg:h-96">
            <div className="bg-branding size-full rounded-lg p-3 shadow-sm">
              <MapContainer
                locations={(contactPageData.locationSection?.locations ?? [])
                  .filter((location) => location.coordinates)
                  .map((location) => ({
                    _key: location._key,
                    city: location.city ?? "",
                    isHq: location.isHq ?? false,
                    address: location.address,
                    coordinates: {
                      lat: location.coordinates?.lat ?? 0,
                      lng: location.coordinates?.lng ?? 0,
                    },
                  }))}
              />
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <FeatureList>
              {contactPageData.locationSection?.locations?.map((location) => (
                <FeatureContainer key={location._key}>
                  <div className="flex items-center gap-x-2">
                    <ImageCustom
                      image={contactPageData.locationSection?.section?.image}
                      alt={
                        (contactPageData.contactSection?.section?.image
                          ?.alt as string) ?? "Plane"
                      }
                      width={96}
                      height={96}
                      className="size-6"
                    />

                    <FeatureLabel>{location.city}</FeatureLabel>
                  </div>
                  <dl className="mt-2 text-base text-slate-500 lg:text-lg">
                    <dt className="sr-only">Office Locations</dt>
                    <dd className="font-medium">
                      {location.isHq ? "Headquarters" : "Office"}
                    </dd>
                  </dl>
                </FeatureContainer>
              ))}
            </FeatureList>
          </div>
        </div>
      </Container>
    </PageContainer>
  );
}
