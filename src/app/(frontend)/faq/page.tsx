import { BluefinSimple } from "@/components/icons/bluefin-simple";
import { FAQs } from "@/components/shared/faqs";
import { PageContainer } from "@/components/shared/pace-container";

import { sanityFetch } from "@/sanity/lib/live";
import { FAQ_QUERY } from "@/sanity/lib/queries";

// Define the interface for the FAQ component
interface FAQ {
  _id: string;
  question: string;
  answer: string;
}

// Define the interface for the FAQ query result
interface FAQ_QUERYResult {
  _id: string;
  question: string | null;
  answer: string | null;
}

export default async function FAQPage() {
  const { data: faqsData } = await sanityFetch({
    query: FAQ_QUERY,
  });

  // Map the query result to the expected type, filtering out any items with null values
  const faqs: FAQ[] = faqsData
    .filter((faq: FAQ_QUERYResult) => faq.question && faq.answer)
    .map((faq: FAQ_QUERYResult) => ({
      _id: faq._id,
      question: faq.question as string,
      answer: faq.answer as string,
    }));

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
