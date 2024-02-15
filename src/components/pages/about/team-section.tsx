import { PortableText } from '@portabletext/react'

import { ImageCustom } from '@/components/shared/image-custom'
import { Container } from '@/components/shared/section-container'
import { SectionHeading } from '@/components/shared/section-heading'
import { Section } from '@/types'

interface TeamSectionProps {
  teamSection: {
    section: Section
  }
}

export const TeamSection = ({ teamSection }: TeamSectionProps) => {
  return (
    <section className='py-8 md:py-16 lg:py-24'>
      <Container className='grid grid-cols-1 gap-12 sm:grid-cols-5'>
        <div className='sm:col-span-2'>
          <SectionHeading>{teamSection.section.heading}</SectionHeading>
          <div className='prose prose-xl prose-gray mt-4 max-w-prose sm:mt-6 lg:mt-8'>
            <PortableText value={teamSection.section.summary} />
          </div>
        </div>
        <div className='sm:col-span-3'>
          <ImageCustom
            image={teamSection.section.image}
            alt={teamSection?.section?.image?.alt as string}
            width={1600}
            height={1200}
            sizes='(min-width: 1360px) 734px, (min-width: 640px) 54.86vw, calc(100vw - 24px)'
            className='rounded-lg bg-slate-200 object-cover shadow'
          />
        </div>
      </Container>
    </section>
  )
}
