import Image from "next/image";
import Link from "next/link";

import { BackgroundIllustration } from "@/components/backgrounds/background-illustration";
import { PageSummary } from "@/components/shared/page-summary";
import { PageTitle } from "@/components/shared/page-title";
import { Container } from "@/components/shared/section-container";
import { buttonVariants } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <>
      <div className="grid h-[720px] items-center justify-center overflow-hidden">
        <Container>
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
            <div className="relative z-10 mx-auto mt-6 max-w-2xl sm:mt-0 sm:max-w-none lg:col-span-7 lg:pt-6 xl:col-span-6">
              <PageTitle>{`The Best Solution for Your Aviation Needs`}</PageTitle>
              <PageSummary>
                {`A total concierge-style battery of services awaits you at Bluefin Aviation. We offer our clients top quality services for aircraft needs at all levels.`}
              </PageSummary>
              <div className="mt-12 flex flex-wrap gap-x-3 gap-y-2 lg:gap-x-6 lg:gap-y-4">
                <Link
                  href="/services"
                  className={buttonVariants({
                    variant: "default",
                    size: "lg",
                  })}
                >
                  Our Services
                </Link>
                <Link
                  href="https://wa.me/+19548812932"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    variant: "secondary",
                    size: "lg",
                  })}
                >
                  24/7 Support
                </Link>
              </div>
            </div>
            <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
              <BackgroundIllustration className="absolute left-1/2 top-4 size-[1026px] -tranzinc-x-1/3 stroke-zinc-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-tranzinc-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
              <div className="-mx-4 h-[260px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 sm:h-[520px] lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
                <Image
                  src="/images/home-hero.webp"
                  alt="Private plane."
                  width={1920}
                  height={1080}
                  className="object-cover object-center animate-float"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
