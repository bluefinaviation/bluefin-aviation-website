'use client';

import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';

import { pageVariants } from '@/utils/framer';

interface IProps {
  children: React.ReactNode;
  metaTitle: string;
  metaDescription?: string;
  className?: string;
}

export const PageContainer = ({
  children,
  metaTitle,
  metaDescription,
  className,
}: IProps) => {
  return (
    <>
      <NextSeo title={metaTitle} description={metaDescription} />
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={pageVariants}
        transition={{ type: 'easeInOut' }}
        className={`${className} min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)]`}
      >
        {children}
      </motion.main>
    </>
  );
};
