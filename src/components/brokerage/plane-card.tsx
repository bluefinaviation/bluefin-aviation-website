import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Plane } from "@/sanity/types";
import { Gauge, Path, Users } from "@phosphor-icons/react/dist/ssr";

type QueryPlane = Omit<Plane, "manufacturer"> & {
  manufacturer: string;
};

interface PlaneCardProps {
  plane: QueryPlane;
}

export const PlaneCard = ({ plane }: PlaneCardProps) => {
  return (
    <Link
      href={`/brokerage-fleet/${plane.slug}`}
      className="flex shadow-lg bg-slate-50 hover:bg-white flex-col hover:-translate-y-2 tw-transition group items-center border border-gray-200 rounded-lg overflow-hidden relative"
    >
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
      </div>

      {/* Content container */}
      <div className="relative w-full h-[140px]">
        {/* Text container with transition */}
        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center transition-all duration-300 group-hover:translate-y-[-20px]">
          <h4 className="text-sm font-mono uppercase text-gray-500">
            {plane.manufacturer}
          </h4>
          <h3 className="text-2xl font-bold mt-1">{plane.model}</h3>
        </div>

        {/* Details section */}
        <div className="absolute bottom-3 left-0 right-0 w-full flex justify-between items-center px-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex items-center gap-x-2">
            <Users className="size-4 text-gray-600" />
            <p className="text-sm font-mono uppercase text-gray-600">
              {plane.capacity || "-"}
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <Gauge className="size-4 text-gray-600" />
            <p className="text-sm font-mono uppercase text-gray-600">
              {plane.speed ? `${plane.speed} km/h` : "-"}
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <Path className="size-4 text-gray-600" />
            <p className="text-sm font-mono uppercase text-gray-600">
              {plane.range ? `${plane.range} km` : "-"}
            </p>
          </div>
        </div>
      </div>

      {/* Blue hover bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </Link>
  );
};
