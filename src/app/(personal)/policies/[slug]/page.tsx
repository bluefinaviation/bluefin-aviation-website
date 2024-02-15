import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { PolicyPage } from '@/components/pages/policy/policy-page'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { loadPolicyBySlug } from '@/sanity/loader/loadQuery'

const PolicyPreview = dynamic(
  () => import('@/components/pages/policy/policy-page-preview')
)

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data: project } = await loadPolicyBySlug(params.slug)

  return {
    title: project?.title
  }
}

export function generateStaticParams() {
  return generateStaticSlugs('project')
}

export default async function PolicySlugRoute({ params }: Props) {
  const initial = await loadPolicyBySlug(params.slug)

  if (draftMode().isEnabled) {
    return <PolicyPreview params={params} initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <PolicyPage data={initial.data} />
}
