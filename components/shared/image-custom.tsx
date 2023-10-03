import Image from "next/image"
import clsx from "clsx"

import { urlForImage } from "@/lib/sanity.image"

interface ImageCustomProps {
  image?: { asset?: any }
  alt?: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
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
    image && urlForImage(image)?.height(height).width(width).fit("crop").url()

  return (
    <>
      {imageUrl && (
        <Image
          className={clsx(className, "bg-slate-300")}
          alt={alt}
          width={width}
          height={height}
          src={imageUrl}
          priority={priority}
          sizes={sizes}
        />
      )}
    </>
  )
}
