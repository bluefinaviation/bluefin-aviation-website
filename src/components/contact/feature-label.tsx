import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface FeatureLabelProps {
  children: ReactNode;
  className?: string;
}
export const FeatureLabel = ({ children, className }: FeatureLabelProps) => {
  return (
    <h3
      className={cn(
        "text-xl font-semibold leading-6 text-slate-900 lg:text-2xl",
        className
      )}
    >
      {children}
    </h3>
  );
};
