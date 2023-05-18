export const FeaturesCard = ({ feature }) => {
  return (
    <div key={feature.id}>
      <dt>
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500 text-white">
          <feature.icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <p className="mt-5 text-lg font-medium leading-6 text-gray-900">
          {feature.name}
        </p>
      </dt>
      <dd className="mt-2 text-base text-gray-500">{feature.value}</dd>
    </div>
  );
};
