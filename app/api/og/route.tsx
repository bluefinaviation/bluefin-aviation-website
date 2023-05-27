import { ImageResponse } from 'next/server';
// App router includes @vercel/og.
// No need to install it.

export const runtime = 'edge';
const websiteUrl = 'bluefinaviation.com';

export async function GET() {
  return new ImageResponse(
    (
      <div tw="flex flex-row-reverse h-full bg-neutral-800">
        <div tw="flex w-1/2 h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            tw="w-full h-full"
            src={`${websiteUrl}/images/bluefin-logo.png`}
            alt="Prism"
          />
          <div
            tw="absolute left-[-80px] top-[-30px] w-[150px] h-[120%] bg-neutral-800"
            style={{ transform: 'rotate(12deg)' }}
          />
        </div>
        <div tw="flex flex-col w-1/2 p-[48px] mt-auto text-white">
          <h1 tw="text-[52px]">{`Bluefin Aviation`}</h1>
          <p tw="text-[26px] text-neutral-400">{`We'll take you there`}</p>
        </div>
      </div>
    )
  );
}
