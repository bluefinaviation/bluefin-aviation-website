"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { List, X } from "@phosphor-icons/react";

import { NavLinks } from "@/components/nav/nav-links";
import { LogoMark } from "@/components/branding/logo-mark";

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
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <header
      className={cn(
        "fixed top-0 p-4 left-0 right-0 z-50 transition-colors duration-300",
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      )}
    >
      <nav className="relative flex items-center justify-between">
        <Link href="/" aria-label="Home">
          <LogoMark
            className="h-8 w-auto sm:h-16"
            darkColor={isHomePage || isScrolled ? "#0f172a" : "#ffffff"}
            lightColor={isHomePage || isScrolled ? "#64748b" : "#e2e8f0"}
          />
        </Link>

        <NavLinks />
        <List
          onClick={() => toggleModal()}
          className={cn(
            "block size-7 sm:hidden",
            isScrolled ? "text-zinc-900" : "text-black"
          )}
        />
        <AnimatePresence>
          {showModal && (
            <motion.div
              className={cn("fixed inset-0 z-50 h-screen bg-zinc-950 px-5")}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex h-16 w-full items-center justify-between">
                <Link href="/" aria-label="Home">
                  <LogoMark
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
                      className="text-2xl font-medium text-white hover:text-zinc-200"
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
