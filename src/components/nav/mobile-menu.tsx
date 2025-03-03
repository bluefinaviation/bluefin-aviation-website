"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { List, X } from "@phosphor-icons/react";

import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";

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
            className={cn("fixed inset-0 h-screen bg-zinc-950 px-5")}
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
