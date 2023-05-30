import { Popover } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';

interface IProps {
  children?: React.ReactNode;
  props?: any;
  href: string;
}

export const MobileNavLink = ({ children, ...props }: IProps) => {
  return (
    <Popover.Button
      as={Link}
      className="block text-xl leading-7 tracking-tight text-slate-700"
      {...props}
    >
      {children}
    </Popover.Button>
  );
};
