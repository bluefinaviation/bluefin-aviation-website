import clsx from "clsx";
import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";

interface ImageCustomProps {
  image?: { asset?: { _ref?: string } };
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export const ImageCustom = ({
  image,
  alt = "Cover image",
  width = 3500,
  height = 2000,
  className,
  priority,
  sizes,
}: ImageCustomProps) => {
  const imageUrl =
    image && urlFor(image)?.height(height).width(width).fit("crop").url();

  return (
    <>
      {imageUrl && (
        <Image
          className={clsx(className, "bg-zinc-300")}
          alt={alt}
          width={width}
          height={height}
          src={imageUrl}
          priority={priority}
          sizes={sizes}
        />
      )}
    </>
  );
};
