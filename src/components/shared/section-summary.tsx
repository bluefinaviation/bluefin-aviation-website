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
    <div className={cn("max-w-lg text-base sm:text-lg", className)}>
      {children}
    </div>
  );
};
