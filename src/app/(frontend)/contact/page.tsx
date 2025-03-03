import { Metadata } from "next";

import { FeatureContainer } from "@/components/contact/feature-container";
import { FeatureLabel } from "@/components/contact/feature-label";
import { FeatureList } from "@/components/contact/feature-list";
import { ImageCustom } from "@/components/shared/image-custom";
import { Container } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { MapContainer } from "@/components/contact/map-container";
import { PageHero } from "@/components/shared/page-hero";

import { CONTACT_PAGE_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default async function ContactPage() {
  const { data: contact } = await sanityFetch({
    query: CONTACT_PAGE_QUERY,
  });

  if (!contact) return null;

  return (
    <div>
      <PageHero
        heading="Contact Us"
        summary="We're here to help you with your aviation and charter needs. Our team of experts are here to assist you 24/7."
        image="/images/contact-hero.webp"
        imageAlt=""
      />

      <Container className="py-8 sm:py-16 lg:py-24">
        <SectionHeading>Get in Touch</SectionHeading>
        <div className="flex mt-8 flex-col gap-y-6 sm:flex-row sm:gap-x-12 sm:gap-y-0">
          <div className="relative col-span-1 h-64 w-full sm:h-72 sm:w-1/2 lg:h-96">
            <ImageCustom
              image={contact.contactSection?.section?.image}
              alt={
                (contact.contactSection?.section?.image?.alt as string) ??
                "Plane"
              }
              width={1920}
              height={1280}
              priority
              sizes="(min-width: 1360px) 604px, (min-width: 640px) 45.71vw, calc(100vw - 24px)"
              className="relative h-full bg-zinc-200 object-cover object-center shadow-sm"
            />
          </div>

          <div className="col-span-1 w-full sm:w-1/2">
            <FeatureList>
              {contact.contactSection?.contacts?.map((contact, idx) => (
                <FeatureContainer key={idx}>
                  <FeatureLabel>{contact.cta}</FeatureLabel>
                  <dl className="mt-2 break-words text-base text-zinc-500 lg:text-lg">
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
        <div className="flex mt-8 flex-col gap-y-6 sm:flex-row sm:gap-x-12 sm:gap-y-0">
          <div className="w-full sm:w-1/2">
            <FeatureList>
              {contact.locationSection?.locations?.map((location) => (
                <FeatureContainer key={location._key}>
                  <div className="flex items-center gap-x-2">
                    <ImageCustom
                      image={contact.locationSection?.section?.image}
                      alt={
                        (contact.contactSection?.section?.image
                          ?.alt as string) ?? "Plane"
                      }
                      width={96}
                      height={96}
                      className="size-6"
                    />

                    <FeatureLabel>{location.city}</FeatureLabel>
                  </div>
                  <dl className="mt-2 text-base text-zinc-500 lg:text-lg">
                    <dt className="sr-only">Office Locations</dt>
                    <dd className="font-medium">
                      {location.isHq ? "Headquarters" : "Office"}
                    </dd>
                  </dl>
                </FeatureContainer>
              ))}
            </FeatureList>
          </div>

          <MapContainer
            locations={(contact.locationSection?.locations ?? [])
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
      </Container>
    </div>
  );
}
