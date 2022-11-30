import Image from 'next/image';

import { urlForImage } from 'lib/sanity.image';

export const FuelFeature = ({ feature }) => {
  return (
    <li
      key={feature.id}
      className="flex flex-col items-center rounded-lg border bg-white p-2 shadow sm:p-3 lg:p-4"
    >
      <div className="relative h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8">
        <Image
          src={
            feature?.icon?.asset?._ref
              ? urlForImage(feature?.icon)
                  .width(1080)
                  .height(1080)
                  .fit('crop')
                  .url()
              : 'https://source.unsplash.com/1080x1080/?plane'
          }
          alt={feature.icon.alt}
          fill
        />
      </div>
      <h3 className="mt-1 text-lg font-semibold text-gray-900 sm:mt-2 md:text-lg lg:mt-4 lg:text-2xl">
        {feature.continent}
      </h3>
      <p className="mt-0.5 flex items-baseline gap-x-1 text-gray-700 sm:mt-1 lg:mt-2">
        <span className="text-base font-medium sm:text-lg lg:text-xl">
          {feature.airports}
        </span>
        <span className="text-sm sm:text-base lg:text-lg">airports</span>
      </p>
    </li>
  );
};
