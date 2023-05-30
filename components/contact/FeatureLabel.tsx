import clsx from 'clsx';

interface IProps {
  children: React.ReactNode;
  className?: string;
}
export const FeatureLabel = ({ children, className }: IProps) => {
  return (
    <h3
      className={clsx(
        'text-xl font-semibold leading-6 text-slate-900 lg:text-2xl',
        className
      )}
    >
      {children}
    </h3>
  );
};
