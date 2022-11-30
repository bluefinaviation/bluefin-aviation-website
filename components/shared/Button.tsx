import clsx from 'clsx';
import Link from 'next/link';
import { forwardRef } from 'react';

interface IProps {
  variant?: string;
  color?: string;
  className?: string;
  href?: string;
  children: React.ReactNode;
  type?: 'submit' | 'reset' | 'button';
  onClick?: React.MouseEventHandler;
  props?: any;
}

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-lg px-3 lg:px-5 py-2 lg:py-3 font-semibold outline-2 outline-offset-2 transition-colors tw-transition text-base lg:text-lg',
  outline:
    'inline-flex justify-center rounded-lg border-2 px-3 py-2 lg:px-5 lg:py-3 font-semibold outline-2 outline-offset-2 transition-colors tw-transition text-base lg:text-lg',
};

const variantStyles = {
  solid: {
    blue: 'relative overflow-hidden bg-blue-600 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-black/10 active:bg-blue-600 active:text-white/80 before:transition-colors',
    white:
      'bg-white text-blue-900 hover:bg-white/90 active:bg-white/90 active:text-blue-900/70',
    gray: 'bg-slate-800 text-white hover:bg-slate-900 active:bg-slate-800 active:text-white/80',
  },
  outline: {
    gray: 'border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80',
    white:
      'text-gray-50 border-gray-50 active:bg-gray-100 active:text-gray-700/80 hover:text-slate-900 hover:bg-gray-50',
  },
};

export const Button = forwardRef(function Button(
  {
    variant = 'solid',
    color = 'gray',
    className,
    href,
    children,
    type,
    ...props
  }: IProps,
  ref: any
) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  );

  return href ? (
    <Link ref={ref} href={href} {...props} className={className}>
      {children}
    </Link>
  ) : (
    <button ref={ref} className={className} type={type} {...props}>
      {children}
    </button>
  );
});
