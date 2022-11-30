import clsx from 'clsx';
// // import { BsDot } from 'react-icons/bs';

export const DotButton = ({ selected, onClick }) => (
  <button
    className={clsx(
      'tw-transition h-3 w-3 cursor-pointer rounded-full border-2 border-blue-700 lg:h-4 lg:w-4',
      selected ? 'bg-blue-700' : 'bg-transparent'
    )}
    type="button"
    onClick={onClick}
  />
);
