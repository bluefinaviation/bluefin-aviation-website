import { ImageResponse } from 'next/server';

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
      // ImageResponse JSX element
      <div className="flex h-full w-full items-center justify-center bg-white text-9xl">
        About Bluefin Aviation
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
