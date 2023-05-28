import clsx from 'clsx';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionSummary = ({ children, className }: IProps) => {
  return (
    <div
      className={clsx(
        'max-w-2xl text-base text-gray-700 sm:text-lg lg:text-lg',
        className
      )}
    >
      {children}
    </div>
  );
};
