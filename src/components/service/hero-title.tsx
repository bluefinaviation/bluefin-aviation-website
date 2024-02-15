interface IProps {
  children: React.ReactNode;
}

export const HeroTitle = ({ children }: IProps) => {
  return (
    <h1 className="mt-1 text-5xl font-bold text-slate-50 sm:mt-1.5 sm:text-6xl lg:mt-2 lg:text-8xl">
      {children}
    </h1>
  );
};
