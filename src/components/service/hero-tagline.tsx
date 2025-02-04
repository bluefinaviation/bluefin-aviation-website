import { ReactNode } from "react";

interface HeroTaglineProps {
  children: ReactNode;
}

export const HeroTagline = ({ children }: HeroTaglineProps) => {
  return (
    <p className="text-base font-medium uppercase tracking-wider text-slate-200 sm:text-lg lg:text-xl">
      {children}
    </p>
  );
};
