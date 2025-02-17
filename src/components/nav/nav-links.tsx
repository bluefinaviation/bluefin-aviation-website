"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const NavLinks = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname();

  return (
    <>
      {NAV_LINKS.map((link, index) => {
        return (
          <Link
            key={link.label}
            href={link.href}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-lg text-slate-700 transition-colors delay-150 hover:text-slate-900 hover:delay-0"
          >
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0 rounded-lg bg-slate-100"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <span
              className={cn(
                pathname == link.href ? "text-blue-700" : "",
                "relative z-10"
              )}
            >
              {link.label}
            </span>
          </Link>
        );
      })}
    </>
  );
};
