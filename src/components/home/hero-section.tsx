import Image from "next/image";
import Link from "next/link";

// // import { BackgroundIllustration } from "@/components/backgrounds/background-illustration";
import { PageSummary } from "@/components/shared/page-summary";
import { PageTitle } from "@/components/shared/page-title";
import { Container } from "@/components/shared/section-container";
import { buttonVariants } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <>
      <div className="grid sm:h-screen sm:py-0 py-24 items-center justify-center overflow-hidden relative">
        <Image
          src="/images/clouds.webp"
          alt="Clouds in the sky."
          width={1920}
          height={1080}
          priority
          quality={100}
          className="object-center object-cover opacity-50 absolute -right-72 hidden sm:block"
        />
        <Image
          src="/images/home-hero-plane.webp"
          alt="Private plane."
          width={1920}
          height={1080}
          priority
          quality={100}
          className="object-center w-[68rem] object-cover -right-72 absolute animate-float hidden sm:block"
        />
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
            {/* <BackgroundIllustration className="absolute left-1/2 top-4 size-[1026px] -tranzinc-x-1/3 stroke-slate-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-tranzinc-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" /> */}
          </div>
        </Container>
      </div>
    </>
  );
};
