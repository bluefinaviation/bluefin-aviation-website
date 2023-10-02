import { ContactPagePayload } from "@/types"

import { FeatureContainer } from "@/components/contact/feature-container"
import { FeatureLabel } from "@/components/contact/feature-label"
import { FeatureList } from "@/components/contact/feature-list"
import { MapContainer } from "@/components/contact/map-container"
import { ImageCustom } from "@/components/shared/image-custom"
import { PageContainer } from "@/components/shared/pace-container"
import { Container } from "@/components/shared/section-container"
import { SectionHeading } from "@/components/shared/section-heading"

export interface ContactPageProps {
  data: ContactPagePayload | null
}

export const ContactPage = ({ data }: ContactPageProps) => {
  // Default to an empty object to allow previews on non-existent documents
  const { contactSection = null, locationSection = null } = data ?? {}

  return (
    <PageContainer>
      <h1 className="sr-only">Contact Us</h1>

      <Container className="py-8 sm:py-16 lg:py-24">
        <SectionHeading>Get in Touch</SectionHeading>
        <div className="flex flex-col gap-y-6 sm:flex-row sm:gap-x-12 sm:gap-y-0">
          <div className="relative col-span-1 h-64 w-full sm:h-72 sm:w-1/2 lg:h-96">
            <ImageCustom
              image={contactSection?.section.image}
              // @ts-expect-error
              alt={contactSection?.section?.image?.alt ?? "Plane"}
              width={1600}
              height={1200}
              className="relative aspect-[5/4] h-full rounded-lg bg-slate-200 object-cover object-center shadow"
              priority
            />
          </div>

          <div className="col-span-1 w-full sm:w-1/2">
            <FeatureList>
              {contactSection?.contacts?.map((contact, idx) => (
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
            <div className="h-full w-full rounded-lg bg-branding p-3 shadow">
              <MapContainer locations={locationSection?.locations!} />
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <FeatureList>
              {locationSection?.locations.map((location) => (
                <FeatureContainer key={location._key}>
                  <div className="flex items-center gap-x-2">
                    <ImageCustom
                      image={locationSection?.section.image}
                      alt={
                        (contactSection?.section?.image?.alt as string) ??
                        "Plane"
                      }
                      width={96}
                      height={96}
                      className="h-6 w-6"
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
  )
}
