import clsx from 'clsx';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const PageTitle = ({ children, className }: IProps) => {
  return (
    <h1
      className={clsx(
        'mb-5 text-4xl font-black tracking-tight sm:mb-7 sm:text-5xl lg:mb-10 lg:text-6xl',
        className
      )}
    >
      {children}
    </h1>
  );
};
