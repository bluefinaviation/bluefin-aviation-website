import * as demo from 'lib/demo.data';
import { getPostBySlug, getSettings } from 'lib/sanity.client';
import { urlForImage } from 'lib/sanity.image';

import WebsiteMeta from '@/components/WebsiteMeta';

export default async function SlugHead({
  params,
}: {
  params: { slug: string };
}) {
  const [{ title = demo.title }, post] = await Promise.all([
    getSettings(),
    getPostBySlug(params.slug),
  ]);
  return (
    <>
      <title>{post.title ? `${post.title} | ${title}` : title}</title>
      <WebsiteMeta />
      {post.coverImage?.asset?._ref && (
        <meta
          property="og:image"
          content={urlForImage(post.coverImage)
            .width(1200)
            .height(627)
            .fit('crop')
            .url()}
        />
      )}
    </>
  );
}
