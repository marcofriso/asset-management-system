import { KPI } from "@/content/types";

const TextView = ({
  realised,
  planned,
  kpi,
}: {
  realised: number;
  planned: number;
  kpi: KPI;
}) => {
  const difference = realised - planned;
  const percentage = ((realised - planned) / planned) * 100;

  return (
    <div className="flex p-4 bg-slate-100 border rounded-lg">
      <h4 className="text-xl font-bold capitalize">{kpi.name}</h4>
      <div className="mx-auto">
        <p className="font-bold text-blue-700">
          Realized: {realised} {kpi.unit}
        </p>
        <p className="font-bold text-gray-700">
          Planned: {planned} {kpi.unit}
        </p>
        <p
          className={`font-bold mt-2 ${
            difference >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          Difference: {difference} ({percentage.toFixed(2)}%)
        </p>
      </div>
    </div>
  );
};

export default TextView;
