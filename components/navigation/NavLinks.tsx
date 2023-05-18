'use client';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export const NavLinks = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname();

  return (
    <>
      {[
        ['Services', '/services'],
        ['About', '/about'],
        ['Contact', '/contact'],
      ].map(([label, href], index) => {
        return (
          <Link
            key={label}
            href={href}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="hover:delay-[0ms] relative -mx-3 -my-2 rounded-lg px-3 py-2 text-lg text-gray-700 transition-colors delay-150 hover:text-gray-900"
          >
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0 rounded-lg bg-gray-100"
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
              className={clsx(
                pathname == href ? 'text-blue-700' : '',
                'relative z-10'
              )}
            >
              {label}
            </span>
          </Link>
        );
      })}
    </>
  );
};
