import clsx from 'clsx';
// // import { motion } from 'framer-motion';
// // import { pageVariants } from '@/utils/framer';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const PageContainer = ({ children, className }: IProps) => {
  return (
    <main
      // // initial="hidden"
      // // animate="enter"
      // // exit="exit"
      // // variants={pageVariants}
      // // transition={{ type: 'easeInOut' }}
      className={clsx(
        className,
        'min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)]'
      )}
    >
      {children}
    </main>
  );
};
