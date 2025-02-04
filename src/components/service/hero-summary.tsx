import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface HeroSummaryProps {
  children: ReactNode;
  className?: string;
}

export const HeroSummary = ({ children, className }: HeroSummaryProps) => {
  return (
    <div
      className={cn(
        "mt-2 max-w-prose text-base font-medium sm:mt-3 sm:text-lg lg:mt-5 lg:text-xl",
        className
      )}
    >
      {children}
    </div>
  );
};
