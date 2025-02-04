import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PageSummaryProps {
  children: ReactNode;
  className?: string;
}

export const PageSummary = ({ children, className }: PageSummaryProps) => {
  return (
    <div
      className={cn(
        "max-w-xl text-lg text-slate-700	sm:text-xl lg:text-2xl",
        className
      )}
    >
      {children}
    </div>
  );
};
