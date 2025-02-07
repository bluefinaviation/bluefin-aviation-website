import { Image as SanityImage } from "sanity";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { urlFor } from "@/sanity/lib/image";

interface ServiceCardProps {
  title: string;
  tagline: string;
  slug: string;
  image: SanityImage;
}

export const ServiceCard = ({
  title,
  tagline,
  slug,
  image,
}: ServiceCardProps) => {
  return (
    <Link href={slug} className="group">
      <div className="relative flex h-screen rounded-lg shadow-sm">
        <Image
          src={
            image?.asset?._ref
              ? urlFor(image).width(1200).height(1600).fit("crop").url()
              : "https://source.unsplash.com/1080x1080/?plane"
          }
          alt={image.alt as string}
          width={1200}
          height={1600}
          priority
          sizes="(min-width: 1380px) 604px, (min-width: 1040px) calc(37.5vw + 94px), calc(100vw - 24px)"
          className="absolute inset-0 size-full rounded-lg object-cover object-center shadow-sm"
        />
        {/* <div className="tw-transition relative flex w-full flex-col items-start justify-end rounded-lg bg-black/30 p-8 shadow-sm group-hover:bg-transparent sm:p-12">
          <p className="text-xs font-mono uppercase text-slate-200 lg:text-sm">
            {tagline}
          </p>
          <div className="flex items-center text-3xl font-semibold text-slate-50 lg:text-4xl">
            <h2>{title}</h2>
            <ArrowRight className="tw-transition ml-2 group-hover:ml-3" />
          </div>
        </div> */}
        <div className="tw-transition absolute inset-0 rounded-lg bg-black opacity-30 group-hover:opacity-0" />

        <div className="absolute bottom-5 left-5 z-10 sm:bottom-10 sm:left-10">
          <p className="sm:text-sm text-xs font-mono text-slate-300 uppercase">
            {tagline}
          </p>
          <div className="flex items-center">
            <h3 className="text-3xl font-serif font-semibold mt-2 text-slate-50 sm:text-4xl lg:text-5xl">
              {title}
            </h3>
            <ArrowRight className="tw-transition ml-1.5 size-7 text-slate-200 group-hover:ml-3 sm:ml-2 sm:size-10 sm:group-hover:ml-4 lg:ml-3 lg:size-12 lg:group-hover:ml-5" />
          </div>
        </div>
      </div>
    </Link>
  );
};
