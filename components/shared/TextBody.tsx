import { PortableText } from '@portabletext/react';
import clsx from 'clsx';

export const TextBody = ({ content }) => {
  return (
    <div className={clsx('mx-auto max-w-2xl')}>
      <PortableText value={content} />
    </div>
  );
};
