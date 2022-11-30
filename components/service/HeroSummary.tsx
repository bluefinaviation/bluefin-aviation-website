import clsx from 'clsx';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroSummary = ({ children, className }: IProps) => {
  return (
    <div
      className={clsx(
        'mt-2 max-w-prose text-base font-medium sm:mt-3 sm:text-lg lg:mt-5 lg:text-xl',
        className
      )}
    >
      {children}
    </div>
  );
};
