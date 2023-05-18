'use client';

import { FuelServicePage } from '@/components/pages/fuelService/FuelServicePage';
import { usePreview } from '@/lib/sanity.preview';
import { fuelServicePageQuery } from '@/lib/sanity.queries';

export function FuelServicePagePreview({ token }: { token: null | string }) {
  const fuelService: any = usePreview(token, fuelServicePageQuery);

  if (!fuelService) {
    return (
      <div className="text-center">
        Please start editing your About document to see the preview!
      </div>
    );
  }

  return <FuelServicePage data={fuelService} />;
}
