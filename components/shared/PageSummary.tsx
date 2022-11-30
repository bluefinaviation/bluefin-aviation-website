import clsx from 'clsx';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const PageSummary = ({ children, className }: IProps) => {
  return (
    <div
      className={clsx(
        'max-w-xl text-lg text-gray-700	sm:text-xl lg:text-2xl',
        className
      )}
    >
      {children}
    </div>
  );
};
