import { ReactNode } from "react";

interface HeroTitleProps {
  children: ReactNode;
}

export const HeroTitle = ({ children }: HeroTitleProps) => {
  return (
    <h1 className="mt-1 text-5xl font-bold text-zinc-50 sm:mt-1.5 sm:text-6xl lg:mt-2 lg:text-8xl">
      {children}
    </h1>
  );
};
