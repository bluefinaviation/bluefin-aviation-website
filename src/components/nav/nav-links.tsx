"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface NavLinksProps {
  className?: string;
}

export function NavLinks({ className }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <div className="sm:flex items-center hidden font-medium">
      <div className="flex gap-16 p-8 bg-primary">
        {NAV_LINKS.map((link) => {
          return (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "relative text-lg transition-all duration-300 pb-8 -mb-8",
                "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-transparent after:transition-all after:duration-300",
                pathname === link.href
                  ? "after:bg-white text-white"
                  : "text-white/80 hover:text-white hover:after:bg-white",
                className
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
      <Link
        href="/contact"
        className="p-8 h-full text-lg bg-accent tw-transition hover:bg-white hover:text-accent text-white"
      >
        Contact
      </Link>
    </div>
  );
}
