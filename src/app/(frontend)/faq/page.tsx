import { BluefinSimple } from "@/components/icons/bluefin-simple";
import { FAQs } from "@/components/shared/faqs";
import { PageContainer } from "@/components/shared/pace-container";

import { sanityFetch } from "@/sanity/lib/live";
import { FAQ_QUERY } from "@/sanity/lib/queries";

export default async function FAQPage() {
  const { data: faqs } = await sanityFetch({
    query: FAQ_QUERY,
  });

  return (
    <PageContainer>
      <section className="bg-primary relative h-[480px] w-full flex items-end justify-start px-16 py-32">
        <BluefinSimple className="absolute bottom-16 right-16 h-72 text-white opacity-25" />
        <h1 className="text-7xl font-serif text-white">
          Frequently Asked Questions
        </h1>
      </section>
      <FAQs faqs={faqs} />
    </PageContainer>
  );
}
