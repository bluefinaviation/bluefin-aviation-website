import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const SectionHeading = ({
  children,
  className,
  id,
}: SectionHeadingProps) => {
  return (
    <h2
      id={id}
      className={cn(
        "mb-6 max-w-prose font-serif text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl",
        className
      )}
    >
      {children}
    </h2>
  );
};
