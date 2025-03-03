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
        "max-w-2xl font-serif text-3xl font-medium sm:text-5xl",
        className
      )}
    >
      {children}
    </h2>
  );
};
