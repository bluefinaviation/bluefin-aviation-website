interface IProps {
  children: React.ReactNode;
}

export const HeroTagline = ({ children }: IProps) => {
  return (
    <p className="text-base font-medium uppercase tracking-wider text-slate-200 sm:text-lg lg:text-xl">
      {children}
    </p>
  );
};
