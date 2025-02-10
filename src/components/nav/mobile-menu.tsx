"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  List,
  Video,
  X,
  GraduationCap,
  Database,
  Chalkboard,
  Pencil,
  SealPercent,
  WindowsLogo,
  MagnifyingGlass,
  Lightbulb,
  UsersThree,
  ReadCvLogo,
  Calendar,
  SealQuestion,
  Asterisk,
  Info,
} from "@phosphor-icons/react";

import {   buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";

// // const navLinks = [
// //   {
// //     title: "Consultancy",
// //     links: [
// //       {
// //         label: "Consultancy",
// //         href: "/data-consultancy-services",
// //         icon: <Asterisk weight="fill" className="text-accent size-5" />,
// //       },
// //       {
// //         label: "Technologies",
// //         href: "/technology-services",
// //         icon: <Info weight="fill" className="text-accent size-5" />,
// //       },
// //     ],
// //   },
// //   {
// //     title: "Training",
// //     links: [
// //       {
// //         label: "Courses",
// //         href: "/",
// //         icon: <GraduationCap weight="fill" className="text-accent size-5" />,
// //       },
// //       {
// //         label: "Bespoke Training",
// //         href: "/",
// //         icon: <Database weight="fill" className="text-accent size-5" />,
// //       },
// //       {
// //         label: "Virtual Training",
// //         href: "/",
// //         icon: <Video weight="fill" className="text-accent size-5" />,
// //       },
// //       {
// //         label: "Blended Training & Consultancy",
// //         href: "/blended-learning-consultancy-services-bi-solutions",
// //         icon: <Chalkboard weight="fill" className="text-accent size-5" />,
// //       },
// //       {
// //         label: "Microsoft Data Platform Certifications",
// //         href: "/",
// //         icon: <WindowsLogo weight="fill" className="text-accent size-5" />,
// //       },
// //       {
// //         label: "Offers",
// //         href: "/",
// //         icon: <SealPercent weight="fill" className="text-accent size-5" />,
// //       },
// //     ],
// //   },
// //   {
// //     title: "Insights",
// //     links: [
// //       {
// //         label: "Blog",
// //         href: "/blog",
// //         icon: <Pencil weight="fill" className="text-accent size-5" />,
// //       },
// //       {
// //         label: "Case Studies",
// //         href: "/case-studies",
// //         icon: <MagnifyingGlass weight="fill" className="text-accent size-5" />,
// //       },
// //       {
// //         label: "Top Tips",
// //         href: "/top-tips",
// //         icon: <Lightbulb weight="fill" className="text-accent size-5" />,
// //       },
// //       {
// //         label: "Events",
// //         href: "/",
// //         icon: <Calendar weight="fill" className="text-accent size-5" />,
// //       },
// //       {
// //         label: "FAQ",
// //         href: "/faq",
// //         icon: <SealQuestion weight="fill" className="text-accent size-5" />,
// //       },
// //     ],
// //   },
// //   {
// //     title: "Company",
// //     links: [
// //       {
// //         label: "About Us",
// //         href: "/",
// //         icon: <GraduationCap weight="fill" className="text-accent size-5" />,
// //       },
// //       {
// //         label: "Team",
// //         href: "/",
// //         icon: <UsersThree weight="fill" className="text-accent size-5" />,
// //       },
// //       {
// //         label: "Careers",
// //         href: "/",
// //         icon: <ReadCvLogo weight="fill" className="text-accent size-5" />,
// //       },
// //     ],
// //   },
// // ];

const modalVariants = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
  exit: {
    y: "-100vh",
    transition: {
      type: "tween",
      duration: 0.3,
      delay: 0.3,
    },
  },
};

// // const linkItemVariants = {
// //   hidden: { opacity: 0, y: "50%" },
// //   visible: {
// //     opacity: 1,
// //     y: 0,
// //     transition: {
// //       duration: 0.5,
// //       ease: "easeOut",
// //     },
// //   },
// //   exit: {
// //     opacity: 0,
// //     y: "50%",
// //     transition: {
// //       duration: 0.1,
// //       ease: "easeOut",
// //     },
// //   },
// // };

// // const navLinksVariants = {
// //   hidden: {},
// //   visible: {
// //     transition: {
// //       staggerChildren: 0.1,
// //       delayChildren: 0.3,
// //     },
// //   },
// //   exit: {
// //     transition: {
// //       staggerChildren: 0.05,
// //       staggerDirection: -1,
// //     },
// //   },
// // };

// // const MotionLink = motion.create(Link);

export const MobileMenu = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-white px-5 shadow-xs sm:hidden">
      <Link href="/">
        <div className="relative aspect-video w-20">
          <Image
            src="/images/logos/ptr-logo.png"
            alt="PTR logo"
            fill
            className="object-contain object-center"
          />
        </div>
      </Link>

      <List onClick={() => toggleModal()} className="block size-7 sm:hidden" />

      <AnimatePresence>
        {showModal && (
          <motion.div
            className={cn("fixed inset-0 h-screen bg-slate-950 px-5")}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex h-16 w-full items-center justify-between">
              <div></div>
              <X
                className="size-5 cursor-pointer text-white"
                onClick={() => toggleModal()}
              />
            </div>

            <div className="mt-10 flex items-center justify-center">
              <Link href="/contact" className={buttonVariants()}>
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
