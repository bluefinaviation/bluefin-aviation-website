interface Social {
  url?: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const LinktreeSocial = ({ social }: { social: Social }) => {
  return (
    <li>
      <a href={social.url ?? "/"} rel="noreferrer noopener" target="_blank">
        <social.icon className="tw-transition size-6 text-slate-50 hover:text-slate-200 sm:size-8" />
      </a>
    </li>
  );
};
