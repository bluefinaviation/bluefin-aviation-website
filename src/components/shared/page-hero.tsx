import Image from "next/image";
import { PageBreadcrumb } from "./page-breadcrumb";

export const PageHero = ({
  heading,
  summary,
  image,
  imageAlt,
}: {
  heading: string;
  summary: string;
  image: string;
  imageAlt: string;
}) => {
  return (
    <section className="bg-primary relative h-[560px] w-full flex items-end justify-start py-16 sm:py-24 sm:px-0 px-4">
      <Image
        src={image}
        alt={imageAlt || heading}
        fill
        className="object-center object-cover absolute inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="z-20 max-w-7xl w-full mx-auto">
        <PageBreadcrumb />
        <h1 className="sm:text-7xl text-5xl mt-4 font-bold font-serif text-white uppercase">
          {heading}
        </h1>
        <p className="text-slate-200 mt-2 max-w-2xl text-lg sm:text-xl">
          {summary}
        </p>
      </div>
    </section>
  );
};
