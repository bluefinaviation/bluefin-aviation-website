import Image from "next/image";
import { Gauge, Path, Users } from "@phosphor-icons/react/dist/ssr";

import { buttonVariants } from "@/components/ui/button";

import { urlFor } from "@/sanity/lib/image";
import { Plane } from "@/sanity/types";

type PlaneWithExpandedRefs = Omit<Plane, "manufacturer" | "category"> & {
  manufacturer: {
    _id: string;
    name: string;
    slug: string;
  };
  category?: {
    _id: string;
    name: string;
    slug: string;
  };
};

interface PlaneCardProps {
  plane: PlaneWithExpandedRefs;
}

export const PlaneCard = ({ plane }: PlaneCardProps) => {
  return (
    <div className="flex cursor-pointer bg-slate-50 hover:bg-white flex-col hover:scale-105 tw-transition group items-center border border-slate-200 overflow-hidden relative">
      <div className="relative w-full aspect-[3/2] bg-slate-100">
        <Image
          src={
            plane.image
              ? urlFor(plane.image).url()
              : "https://source.unsplash.com/1080x1080/?plane"
          }
          alt={plane.model || ""}
          fill
          className="object-cover text-center flex flex-col items-center justify-center object-center bg-slate-100"
        />

        <div
          className={buttonVariants({
            className:
              "absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity tw-transition",
            variant: "default",
          })}
        >
          Get a Quote
        </div>
      </div>

      {/* Content container */}
      <div className="relative w-full h-[140px]">
        {/* Text container with transition */}
        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center transition-all duration-300 group-hover:-translate-y-5">
          <h4 className="text-xs font-mono font-medium tracking-wide uppercase text-slate-500">
            {plane.manufacturer.name} • {plane.category?.name || ""}
          </h4>
          <h3 className="text-2xl mt-1 font-serif font-medium">
            {plane.model}
          </h3>
        </div>

        {/* Details section */}
        <div className="absolute bottom-3 left-0 right-0 w-full flex justify-between items-center px-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex items-center gap-x-2">
            <Users className="size-4 text-slate-600" />
            <p className="text-xs uppercase font-mono text-slate-600">
              {plane.capacity || "-"}
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <Gauge className="size-4 text-slate-600" />
            <p className="text-xs uppercase font-mono text-slate-600">
              {plane.speed ? `${plane.speed} km/h` : "-"}
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <Path className="size-4 text-slate-600" />
            <p className="text-xs uppercase font-mono text-slate-600">
              {plane.range ? `${plane.range} km` : "-"}
            </p>
          </div>
        </div>
      </div>

      {/* Blue hover bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};
