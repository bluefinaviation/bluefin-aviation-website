import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export const Container = ({ className, children }: ContainerProps) => {
  return (
    <div className={cn("mx-auto max-w-7xl px-3", className)}>{children}</div>
  );
};
