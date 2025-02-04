import { Metadata } from "next";
import { format } from "date-fns";
import type { PortableTextBlock } from "@portabletext/types";

import { CustomPortableText } from "@/components/shared/custom-portable-text";
import { SectionHeading } from "@/components/shared/section-heading";

import { client } from "@/sanity/lib/client";
import { POLICY_BY_SLUG_QUERY } from "@/sanity/lib/queries";

interface PolicyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const metadata: Metadata = {
  title: "Policies",
};

export default async function PolicyPage({ params }: PolicyPageProps) {
  const { slug } = await params;

  const policyPageData = await client.fetch(
    POLICY_BY_SLUG_QUERY,
    {
      params: {
        slug: slug,
      },
    },
    { next: { revalidate: 60 } }
  );

  if (!policyPageData) return null;

  const formattedDate = format(
    new Date(policyPageData.updatedAt as string),
    "PPP"
  );

  return (
    <div className="py-8 sm:py-16 lg:py-24">
      <div className="text-center ">
        <SectionHeading>{policyPageData.title}</SectionHeading>
        <p className="font-medium text-slate-700">
          Last updated on {formattedDate}
        </p>
      </div>
      <div className="prose mx-auto mt-16 max-w-prose">
        <CustomPortableText
          value={policyPageData.content as PortableTextBlock[]}
        />
      </div>
    </div>
  );
}
