interface PlaneDetailProps {
  label: string;
  value: string;
  unit?: string;
}

export const PlaneDetail = ({ label, value, unit }: PlaneDetailProps) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-xs uppercase tracking-wider font-mono">{label}</h2>
      <p className="text-lg font-bold">
        {value}
        {unit && <span className="text-sm font-mono uppercase"> {unit}</span>}
      </p>
    </div>
  );
};
