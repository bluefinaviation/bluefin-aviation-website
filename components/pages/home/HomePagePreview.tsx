'use client';

import { HomePage } from '@/components/pages/home/HomePage';
import { usePreview } from '@/lib/sanity.preview';
import { homePageQuery } from '@/lib/sanity.queries';
import type { HomePagePayload } from '@/types/sanity';

export function HomePagePreview({ token }: { token: null | string }) {
  const home: HomePagePayload = usePreview(token, homePageQuery);

  if (!home) {
    return (
      <div className="text-center">
        Please start editing your Home document to see the preview!
      </div>
    );
  }

  return <HomePage data={home} />;
}
