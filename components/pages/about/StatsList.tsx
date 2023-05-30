export const StatsList = ({ children }) => {
  return (
    <ul className="grid-cols grid divide-y divide-slate-500 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
      {children}
    </ul>
  );
};
