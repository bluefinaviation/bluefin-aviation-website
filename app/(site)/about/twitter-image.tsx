import { ImageResponse } from 'next/server';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'About Bluefin Aviation';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Image generation
export default function Image() {
  return new ImageResponse(
    (
      <div className="grid h-[630px] w-[1200px] place-content-center place-items-center bg-gradient-to-br from-blue-700 to-cyan-500">
        <div className="flex flex-col items-center gap-y-3 text-center">
          <Avatar className="h-24 w-24 border-2 border-blue-900 bg-white sm:h-32 sm:w-32">
            <AvatarImage
              src="/images/bluefin-logo.png"
              alt="Bluefin Aviation"
              className=""
            />
            <AvatarFallback>BF</AvatarFallback>
          </Avatar>

          <h1 className="font-gray-50 text-lg font-bold uppercase text-gray-50 sm:text-2xl">
            About Bluefin Aviation
          </h1>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageReponse's width and height.
      ...size,
    }
  );
}
