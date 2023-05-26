'use client';

import { InquiryPage } from '@/components/pages/inquiry/InquiryPage';
import { usePreview } from '@/lib/sanity.preview';
import { linktreePageQuery } from '@/lib/sanity.queries';

export function LinktreePagePreview({ token }: { token: null | string }) {
  const linktree: any = usePreview(token, linktreePageQuery);

  if (!linktree) {
    return (
      <div className="text-center">
        Please start editing your Linktree document to see the preview!
      </div>
    );
  }

  return <InquiryPage data={linktree} />;
}
