import Link from 'next/link';

export const LinktreeItem = ({ link }: { link: any }) => {
  return (
    <li>
      <Link
        href={link.linkUrl ?? '/'}
        className="tw-transition gap-y-2.5w group grid rounded-2xl border-2 border-blue-900 bg-white px-5 py-5 text-center text-blue-900 hover:scale-105"
      >
        <h2 className="text-base font-semibold sm:text-lg">{link.label}</h2>
        <p className="text-sm text-slate-900">{link.description}</p>
      </Link>
    </li>
  );
};
