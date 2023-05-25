'use client';

import { NewsletterPage } from '@/components/pages/newsletter/NewsletterPage';
import { usePreview } from '@/lib/sanity.preview';
import { newsletterPageQuery } from '@/lib/sanity.queries';

export function NewsletterPagePreview({ token }: { token: null | string }) {
  const newsletter: any = usePreview(token, newsletterPageQuery);

  if (!newsletter) {
    return (
      <div className="text-center">
        Please start editing your About document to see the preview!
      </div>
    );
  }

  return <NewsletterPage data={newsletter} />;
}
