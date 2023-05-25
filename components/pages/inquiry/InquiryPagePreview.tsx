'use client';

import { InquiryPage } from '@/components/pages/inquiry/InquiryPage';
import { usePreview } from '@/lib/sanity.preview';
import { inquiryPageQuery } from '@/lib/sanity.queries';

export function InquiryPagePreview({ token }: { token: null | string }) {
  const inquiry: any = usePreview(token, inquiryPageQuery);

  if (!inquiry) {
    return (
      <div className="text-center">
        Please start editing your About document to see the preview!
      </div>
    );
  }

  return <InquiryPage data={inquiry} />;
}
