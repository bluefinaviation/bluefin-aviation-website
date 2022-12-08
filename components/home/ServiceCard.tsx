import clsx from 'clsx';
import { urlForImage } from 'lib/sanity.image';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';

interface IProps {
  title: string;
  tagline: string;
  slug: string;
  image: any;
  className?: string;
}

export const ServiceCard = ({
  title,
  slug,
  image,
  tagline,
  className,
}: IProps) => {
  return (
    <Link
      href={slug}
      className={clsx('group relative h-[50vh] lg:h-screen', className)}
    >
      <Image
        src={
          image?.asset?._ref
            ? urlForImage(image).width(1200).height(1600).fit('crop').url()
            : 'https://source.unsplash.com/1080x1080/?plane'
        }
        alt={image?.alt ? image.alt : ''}
        width={1200}
        height={1600}
        className="h-full bg-gray-800 object-cover object-center"
      />
      <div className="tw-transition absolute inset-0 bg-black opacity-30 group-hover:opacity-0" />
      <div className="absolute left-5 bottom-5 z-10 sm:left-10 sm:bottom-10">
        <p className="text-base font-medium text-gray-200 sm:text-lg lg:text-xl">
          {tagline}
        </p>
        <div className="flex items-center">
          <h3 className="text-3xl font-semibold text-gray-50 sm:text-4xl lg:text-5xl">
            {title}
          </h3>
          <AiOutlineArrowRight className="tw-transition ml-1.5 h-7 w-7 text-gray-200 group-hover:ml-3 sm:ml-2 sm:h-10 sm:w-10 sm:group-hover:ml-4 lg:ml-3 lg:h-12 lg:w-12 lg:group-hover:ml-5" />
        </div>
      </div>
    </Link>
  );
};
