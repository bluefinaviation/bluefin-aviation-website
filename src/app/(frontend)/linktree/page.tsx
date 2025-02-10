import type { Metadata } from "next";

import { LinktreeItem } from "@/components/pages/linktree/linktree-item";
import { LinktreeSocial } from "@/components/pages/linktree/linktree-social";
import { PageContainer } from "@/components/shared/pace-container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { client } from "@/sanity/lib/client";
import { LINKTREE_PAGE_QUERY } from "@/sanity/lib/queries";
import { socials } from "@/data/socials";

interface LinktreeLink {
  _key: string;
  _type: "linktreeLink";
  label?: string;
  description?: string;
  linkUrl?: string;
}

export const metadata: Metadata = {
  title: "Linktree",
};

export default async function LinktreeRoute() {
  const linktreePageData = await client.fetch(
    LINKTREE_PAGE_QUERY,
    {},
    { next: { revalidate: 60 } }
  );

  if (!linktreePageData) return null;

  return (
    <PageContainer className='lg:py-24" py-8 sm:py-16'>
      <div className="relative mx-5 max-w-3xl rounded-lg bg-linear-to-br from-blue-700 to-cyan-500 px-5 py-10 sm:mx-auto sm:px-10 sm:py-20">
        <div className="flex flex-col items-center gap-y-3 text-center">
          <Avatar className="size-24 border-2 border-blue-900 bg-white sm:size-32">
            <AvatarImage
              src="/images/bluefin-logo.png"
              alt="Bluefin Aviation"
              className=""
            />
            <AvatarFallback>BF</AvatarFallback>
          </Avatar>

          <h1 className="font-slate-50 text-lg font-bold uppercase text-slate-50 sm:text-2xl">
            Bluefin Aviation Services
          </h1>
        </div>

        <ul className="mt-10 space-y-5 sm:space-y-10">
          {linktreePageData.links?.map(
            (link: LinktreeLink, linkIdx: number) => (
              <LinktreeItem key={linkIdx} link={link} />
            )
          )}
        </ul>

        <ul className="mt-10 flex place-content-center gap-x-7 sm:mt-20 sm:gap-x-10">
          {socials.map((social) => (
            <LinktreeSocial key={social.id} social={social} />
          ))}
        </ul>
      </div>
    </PageContainer>
  );
}
