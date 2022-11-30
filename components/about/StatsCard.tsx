export const StatsCard = ({ stat }) => {
  return (
    <li className="col-span-1 py-6  text-center lg:py-0">
      <h3 className="text-5xl font-semibold text-gray-50 lg:text-6xl">
        {stat.value}
      </h3>
      <p className="mt-1 text-sm font-medium text-gray-300 lg:mt-2 lg:text-base">
        {stat.label}
      </p>
    </li>
  );
};
