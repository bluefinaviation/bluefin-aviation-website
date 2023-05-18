'use client';

import { AboutPage } from '@/components/pages/about/AboutPage';
import { usePreview } from '@/lib/sanity.preview';
import { aboutPageQuery } from '@/lib/sanity.queries';

export function AboutPagePreview({ token }: { token: null | string }) {
  const about: any = usePreview(token, aboutPageQuery);

  if (!about) {
    return (
      <div className="text-center">
        Please start editing your About document to see the preview!
      </div>
    );
  }

  return <AboutPage data={about} />;
}
