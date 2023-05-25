'use client';

import { PolicyPage } from '@/components/pages/policy/PolicyPage';
import { usePreview } from '@/lib/sanity.preview';
import { policyBySlugQuery } from '@/lib/sanity.queries';
import type { PolicyPayload } from '@/types/sanity';

export function PolicyPreview({
  token,
  slug,
}: {
  token: null | string;
  slug: string;
}) {
  const policy: PolicyPayload = usePreview(token, policyBySlugQuery, {
    slug: slug,
  });

  return <PolicyPage data={policy} />;
}
