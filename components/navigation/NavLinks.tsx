import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export function NavLinks() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const pathname = usePathname();

  return (
    <>
      {[
        ['Services', '/services'],
        ['About', '/about'],
        ['Contact', '/contact'],
      ].map(([label, href], index) => {
        return (
          <div
            key={label}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="tw-transition relative rounded-lg px-5 py-2 text-lg font-medium text-gray-500 delay-150 hover:text-gray-900 hover:delay-[0ms]"
          >
            <Link href={href} passHref>
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
          </div>
        );
      })}
    </>
  );
}
