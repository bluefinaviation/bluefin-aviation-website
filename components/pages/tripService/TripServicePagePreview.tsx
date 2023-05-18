'use client';

import { TripServicePage } from '@/components/pages/tripService/TripServicePage';
import { usePreview } from '@/lib/sanity.preview';
import { tripServicePageQuery } from '@/lib/sanity.queries';

export function TripServicePagePreview({ token }: { token: null | string }) {
  const tripService: any = usePreview(token, tripServicePageQuery);

  if (!tripService) {
    return (
      <div className="text-center">
        Please start editing your About document to see the preview!
      </div>
    );
  }

  return <TripServicePage data={tripService} />;
}
