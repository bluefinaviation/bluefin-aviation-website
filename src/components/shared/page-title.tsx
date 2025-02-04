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
        "mb-5 text-4xl font-black tracking-tight sm:mb-7 sm:text-5xl lg:mb-10 lg:text-6xl",
        className
      )}
    >
      {children}
    </h1>
  );
};
