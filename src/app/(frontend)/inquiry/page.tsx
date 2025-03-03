import { Metadata } from "next";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

import { InquiryForm } from "@/components/forms/inquiry-form";
import { SectionHeading } from "@/components/shared/section-heading";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { INQUIRY_PAGE_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Inquiry",
};

export default async function InquiryPage() {
  const inquiryData = await client.fetch(
    INQUIRY_PAGE_QUERY,
    {},
    { next: { revalidate: 60 } }
  );

  if (!inquiryData) return null;

  const { formSection = null } = inquiryData ?? {};

  if (!formSection || !formSection.section) return null;

  return (
    <div className="relative">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <Image
          src={
            formSection.section.image?.asset?._ref
              ? urlFor(formSection.section.image)
                  .width(1280)
                  .height(1920)
                  .fit("crop")
                  .url()
              : "https://source.unsplash.com/1080x1080/?plane"
          }
          alt={`Plane.`}
          width={1280}
          height={1920}
          className="h-64 w-full bg-zinc-100 object-cover object-center sm:h-80 lg:absolute lg:h-full"
        />
      </div>

      <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <SectionHeading>{formSection.section.heading}</SectionHeading>
            <div className="prose mt-5">
              <PortableText value={formSection.section.summary ?? []} />
            </div>
          </div>

          <InquiryForm />
        </div>
      </div>
    </div>
  );
}
