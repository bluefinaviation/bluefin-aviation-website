import clsx from 'clsx';

interface IProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const SectionHeading = ({ children, className, id }: IProps) => {
  return (
    <h2
      id={id}
      className={clsx(
        'mb-6 max-w-prose text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl',
        className
      )}
    >
      {children}
    </h2>
  );
};
