import Image from "next/image";
import { PortableText } from "next-sanity";

import { SectionHeading } from "@/components/shared/section-heading";

import { urlFor } from "@/sanity/lib/image";
import { SERVICE_QUERYResult } from "@/sanity/types";

type FeaturesProps = Extract<
  NonNullable<NonNullable<SERVICE_QUERYResult>["content"]>[number],
  { _type: "features" }
>;

export const Features = ({ features, title, text }: FeaturesProps) => {
  return (
    <section className="mx-auto flex flex-col gap-16 py-16 sm:py-24 max-w-7xl px-3">
      <div className="flex flex-col gap-4 items-center text-center">
        <SectionHeading>{title}</SectionHeading>

        <div className="prose max-w-prose">
          {text && <PortableText value={text} />}
        </div>
      </div>

      {Array.isArray(features) ? (
        <div className="grid grid-cols-5 gap-8">
          {features.map((feature) => (
            <div
              key={feature._key}
              className="flex flex-col text-center items-center"
            >
              <Image
                src={urlFor(feature.icon!).url()}
                alt={feature.title || ""}
                width={100}
                height={100}
                className="size-12"
              />
              <h3 className="text-2xl mt-4 font-serif font-bold text-primary">
                {feature.title}
              </h3>
              <p className="text-sm font-mono uppercase text-slate-700">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
};
