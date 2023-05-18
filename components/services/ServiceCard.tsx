import { urlForImage } from 'lib/sanity.image';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';

export const ServiceCard = ({ title, tagline, slug, image }) => {
  return (
    <Link href={slug} className="group">
      <div className="relative flex h-screen rounded-lg shadow">
        <Image
          src={
            image?.asset?._ref
              ? // @ts-expect-error xxx
                urlForImage(image).width(1200).height(1600).fit('crop').url()
              : 'https://source.unsplash.com/1080x1080/?plane'
          }
          alt={image.alt}
          width={1200}
          height={1600}
          className="absolute inset-0 h-full w-full rounded-lg object-cover object-center shadow"
        />
        <div className="tw-transition relative flex w-full flex-col items-start justify-end rounded-lg bg-black bg-opacity-30 p-8 shadow group-hover:bg-opacity-0 sm:p-12">
          <p className="text-base font-medium text-gray-200 lg:text-lg">
            {tagline}
          </p>
          <div className="flex items-center text-3xl font-semibold text-gray-50 lg:text-4xl">
            <h2>{title}</h2>
            <AiOutlineArrowRight className="tw-transition ml-2 group-hover:ml-3" />
          </div>
        </div>
      </div>
    </Link>
  );
};
