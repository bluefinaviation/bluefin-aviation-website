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
    <section className="bg-primary relative h-[560px] w-full flex items-end justify-start py-16 sm:py-24">
      <Image
        src={image}
        alt={imageAlt || heading}
        fill
        className="object-center object-cover absolute inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
      <div className="z-20 max-w-7xl w-full mx-auto">
        <PageBreadcrumb />
        <h1 className="text-7xl mt-4 font-bold font-serif text-white uppercase">
          {heading}
        </h1>
        <p className="text-zinc-200 mt-2 max-w-2xl text-xl">{summary}</p>
      </div>
    </section>
  );
};
