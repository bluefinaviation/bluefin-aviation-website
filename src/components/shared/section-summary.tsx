import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionSummaryProps {
  children: ReactNode;
  className?: string;
}

export const SectionSummary = ({
  children,
  className,
}: SectionSummaryProps) => {
  return (
    <div className={cn("max-w-2xl text-base sm:text-lg lg:text-lg", className)}>
      {children}
    </div>
  );
};
