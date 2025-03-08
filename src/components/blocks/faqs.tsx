import { PortableText } from 'next-sanity'
import { FAQPage, WithContext } from 'schema-dts'

import { SectionHeading } from '@/components/shared/section-heading'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

import { SERVICE_QUERYResult } from '@/sanity/types'

type FAQsProps = Extract<
  NonNullable<NonNullable<SERVICE_QUERYResult>['content']>[number],
  { _type: 'faqs' }
>

const generateFaqData = (faqs: FAQsProps['faqs']): WithContext<FAQPage> => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs?.map(faq => ({
    '@type': 'Question',
    name: faq.question!,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.text!
    }
  }))
})

export const FAQs = ({ title, faqs }: FAQsProps) => {
  const faqData = generateFaqData(faqs)

  return (
    <section className='bg-zinc-200 px-4 py-20 sm:px-0 sm:py-32'>
      <div className='mx-auto flex max-w-7xl flex-col gap-8'>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
        {title ? <SectionHeading>{title}</SectionHeading> : null}
        {Array.isArray(faqs) ? (
          <div className='border-b'>
            <Accordion type='single' collapsible>
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={faq._id}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent className='prose max-w-2xl'>
                    {faq.answer ? <PortableText value={faq.answer} /> : null}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ) : null}
      </div>
    </section>
  )
}
