import clsx from 'clsx';
import Image from 'next/image';

import { urlForImage } from '@/lib/sanity.image';

interface ImageCustomProps {
  image?: { asset?: any };
  alt?: string;
  width?: number;
  height?: number;
  // // size?: string;
  className?: string;
}

export const ImageCustom = ({
  image,
  alt = 'Cover image',
  width = 3500,
  height = 2000,
  className,
}: ImageCustomProps) => {
  const imageUrl =
    image && urlForImage(image)?.height(height).width(width).fit('crop').url();

  return (
    <>
      {imageUrl && (
        <Image
          className={clsx(className, 'bg-gray-300')}
          alt={alt}
          width={width}
          height={height}
          src={imageUrl}
        />
      )}
    </>
  );
};
