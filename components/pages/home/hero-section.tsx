"use client"

import { useState } from "react"
import Image from "next/image"
import { Section } from "@/types"
import { PlayCircleIcon } from "@heroicons/react/24/outline"
import { PortableText } from "@portabletext/react"
import { TbBrandWhatsapp } from "react-icons/tb"

import { Button } from "@/components/ui/button"
import { BackgroundIllustration } from "@/components/backgrounds/background-illustration"
import { Container } from "@/components/global/container"
import { PageSummary } from "@/components/global/page-summary"
import { PageTitle } from "@/components/global/page-title"
import { VideoModal } from "@/components/global/video-modal"

interface HeroSectionProps {
  section: Section
  video: string
}

export const HeroSection = ({
  heroSection,
}: {
  heroSection: HeroSectionProps
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  function closeVideoModal() {
    setIsVideoOpen(false)
  }

  function openVideoModal() {
    setIsVideoOpen(true)
  }

  return (
    <>
      <div className="grid h-screen items-center justify-center overflow-hidden">
        <Container>
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
            <div className="relative z-10 mx-auto mt-6 max-w-2xl sm:mt-0 sm:max-w-none lg:col-span-7 lg:pt-6 xl:col-span-6">
              <PageTitle>{heroSection.section.heading}</PageTitle>
              <PageSummary>
                <PortableText value={heroSection.section.summary} />
              </PageSummary>
              <div className="mt-12 flex flex-wrap gap-x-3 gap-y-2 lg:gap-x-6 lg:gap-y-4">
                <Button variant="default">
                  <a
                    className="flex items-center"
                    href="https://wa.me/+19548812932"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TbBrandWhatsapp className="h-6 w-6 flex-none" />
                    <span className="ml-2.5">24/7 Support</span>
                  </a>
                </Button>
                <Button
                  variant="outline-dark-foreground"
                  onClick={openVideoModal}
                >
                  <div className="flex items-center justify-center">
                    <PlayCircleIcon className="h-6 w-6 flex-none" />
                    <span className="ml-2.5">Promo Video</span>
                  </div>
                </Button>
              </div>
            </div>
            <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
              <BackgroundIllustration className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-slate-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
              <div className="-mx-4 h-[260px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 sm:h-[520px] lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
                <Image
                  src="/images/home-hero.webp"
                  alt="Private plane."
                  width={1920}
                  height={1080}
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <VideoModal
        isOpen={isVideoOpen}
        closeModal={closeVideoModal}
        videoURL={
          heroSection.video
            ? heroSection.video
            : "https://www.youtube.com/embed/WQ7Wdend1xw"
        }
      />
    </>
  )
}
