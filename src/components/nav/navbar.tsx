"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { List, X } from "@phosphor-icons/react";

import { Logo } from "@/components/branding/logo";
import { NavLinks } from "@/components/nav/nav-links";
import { Container } from "@/components/shared/section-container";

import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";

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

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3 + custom * 0.1,
      duration: 0.3,
    },
  }),
  exit: { opacity: 0, x: -20 },
};

export const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <header>
      <nav>
        <Container className="relative z-10 flex h-16 items-center justify-between sm:h-20 lg:h-24">
          <div className="relative flex w-full items-center justify-between gap-16">
            <Link href="/" aria-label="Home">
              <Logo
                className="h-8 w-auto sm:h-10 lg:h-12"
                darkColor="#0f172a"
                lightColor="#64748b"
              />
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
            <List
              onClick={() => toggleModal()}
              className="block size-7 sm:hidden"
            />
          </div>
        </Container>
        <AnimatePresence>
          {showModal && (
            <motion.div
              className={cn("fixed inset-0 z-50 h-screen bg-slate-950 px-5")}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex h-16 w-full items-center justify-between">
                <Link href="/" aria-label="Home">
                  <Logo
                    className="h-8 w-auto sm:h-10"
                    darkColor="#fff"
                    lightColor="#e2e8f0"
                  />
                </Link>
                <X
                  className="size-5 cursor-pointer text-white"
                  onClick={() => toggleModal()}
                />
              </div>

              <div className="mt-16 flex flex-col gap-8">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.href}
                    custom={index}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <Link
                      href={link.href}
                      className="text-2xl font-medium text-white hover:text-slate-200"
                      onClick={() => toggleModal()}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
