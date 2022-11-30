export const StatsList = ({ children }) => {
  return (
    <ul className="grid-cols grid divide-y divide-gray-500 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 lg:divide-x">
      {children}
    </ul>
  );
};
