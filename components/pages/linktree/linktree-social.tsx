export const LinktreeSocial = ({ social }: { social: any }) => {
  return (
    <li>
      <a href={social.url ?? '/'} rel="noreferrer noopener" target="_blank">
        <social.icon className="tw-transition h-6 w-6 text-slate-50 hover:text-slate-200 sm:h-8 sm:w-8" />
      </a>
    </li>
  );
};
