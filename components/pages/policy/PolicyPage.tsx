import type { PortableTextBlock } from '@portabletext/types';
import { format } from 'date-fns';

import { CustomPortableText } from '@/components/global/CustomPortableText';
import { SectionHeading } from '@/components/global/SectionHeading';
import type { PolicyPayload } from '@/types/sanity';

export function PolicyPage({ data }: { data: PolicyPayload }) {
  const { title, content, updatedAt } = data || {};

  const formattedDate = format(new Date(updatedAt), 'PPP');

  return (
    <div className="py-8 sm:py-16 lg:py-24">
      <div className="text-center ">
        <SectionHeading>{title}</SectionHeading>
        <p className="font-medium text-slate-700">
          Last updated on {formattedDate}
        </p>
      </div>
      <div className="prose mx-auto mt-16 max-w-prose">
        <CustomPortableText value={content as PortableTextBlock[]} />
      </div>
    </div>
  );
}
