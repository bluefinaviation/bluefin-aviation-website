'use client';

import { ServicesPage } from '@/components/pages/services/ServicesPage';
import { usePreview } from '@/lib/sanity.preview';
import { servicesPageQuery } from '@/lib/sanity.queries';
// import type { HomePagePayload } from '@/types/sanity';

export function ServicesPagePreview({ token }: { token: null | string }) {
  const services: any = usePreview(token, servicesPageQuery);

  if (!services) {
    return (
      <div className="text-center">
        Please start editing your Home document to see the preview!
      </div>
    );
  }

  return <ServicesPage data={services} />;
}
