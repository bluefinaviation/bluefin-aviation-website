'use client';

import { ContactPage } from '@/components/pages/contact/ContactPage';
import { usePreview } from '@/lib/sanity.preview';
import { contactPageQuery } from '@/lib/sanity.queries';

export function ContactPagePreview({ token }: { token: null | string }) {
  const contact: any = usePreview(token, contactPageQuery);

  if (!contact) {
    return (
      <div className="text-center">
        Please start editing your About document to see the preview!
      </div>
    );
  }

  return <ContactPage data={contact} />;
}
