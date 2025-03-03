import { PortableText } from "next-sanity";
import Image from "next/image";

import { PageBreadcrumb } from "@/components/shared/page-breadcrumb";

import { urlFor } from "@/sanity/lib/image";
import { SERVICE_QUERYResult } from "@/sanity/types";

type HeroProps = Extract<
  NonNullable<NonNullable<SERVICE_QUERYResult>["content"]>[number],
  { _type: "hero" }
>;

export const Hero = ({ title, image, text }: HeroProps) => {
  return (
    <section className="bg-primary relative h-[560px] w-full flex items-end justify-start py-16">
      <Image
        src={
          image
            ? urlFor(image!)
                .width(1920)
                .height(1080)
                .quality(80)
                .auto("format")
                .url()
            : "/images/placeholder-hero.webp"
        }
        alt={title || "Hero Image"}
        fill
        className="object-center object-cover absolute inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
      <div className="z-20 max-w-7xl w-full mx-auto">
        <PageBreadcrumb />
        <h1 className="text-6xl mt-4 font-bold font-serif text-white uppercase">
          {title}
        </h1>
        <div className="prose-lg max-w-2xl text-slate-200 mt-4">
          <PortableText value={text ?? []} />
        </div>
      </div>
    </section>
  );
};

// {/* <section className="overflow-hidden">
// <div className="relative min-h-[32rem] overflow-hidden">
//   <div className="absolute inset-0">
//     <Image
//       src={
//         image
//           ? urlFor(image!)
//               .width(1920)
//               .height(1080)
//               .quality(80)
//               .auto("format")
//               .url()
//           : "/images/placeholder-hero.webp"
//       }
//       alt={
//         typeof image === "string"
//           ? title || "Concert Image"
//           : "About the Madrid F1 GP."
//       }
//       fill
//       className="object-cover objectcenter bg-card"
//       // // className="object-cover object-[25%_90%] bg-card"
//       priority
//     />
//     <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />

//     <div className="absolute bottom-0 left-0 right-0 p-4">
//       <h1 className="text-white font-mono uppercase text-5xl font-bold">
//         {title}
//       </h1>
//     </div>
//   </div>
// </div>
// </section> */}
