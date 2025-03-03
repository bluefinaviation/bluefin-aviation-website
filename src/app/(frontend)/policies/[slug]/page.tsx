import { Metadata } from "next";
import dayjs from "dayjs";
import type { PortableTextBlock } from "@portabletext/types";

import { CustomPortableText } from "@/components/shared/custom-portable-text";
import { SectionHeading } from "@/components/shared/section-heading";

import { POLICY_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

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

  const { data: policyPageData } = await sanityFetch({
    query: POLICY_BY_SLUG_QUERY,
    params: {
      slug: slug,
    },
  });

  if (!policyPageData) return null;

  const formattedDate = dayjs(policyPageData.updatedAt as string).format(
    "MMMM D, YYYY"
  );

  return (
    <div className="py-8 sm:py-16 lg:py-24">
      <div className="text-center ">
        <SectionHeading>{policyPageData.title}</SectionHeading>
        <p className="font-medium text-zinc-700">
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
