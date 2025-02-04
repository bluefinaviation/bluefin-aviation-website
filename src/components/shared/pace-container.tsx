import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export const PageContainer = ({ children, className }: PageContainerProps) => {
  return (
    <main
      // // initial="hidden"

      // // initial="hidden"
      // // animate="enter"
      // // exit="exit"
      // // variants={pageVariants}
      // // transition={{ type: 'easeInOut' }}
      className={cn(
        className,
        "min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)]"
      )}
    >
      {children}
    </main>
  );
};
