import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PageTitleProps {
  children: ReactNode;
  className?: string;
}

export const PageTitle = ({ children, className }: PageTitleProps) => {
  return (
    <h1
      className={cn(
        "mb-4 text-4xl uppercase font-black sm:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
};
