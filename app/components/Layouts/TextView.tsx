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
    <div className="p-4 bg-blue-100 rounded">
      <h4 className="text-xl">{kpi.name}</h4>
      <p className="font-bold">
        Realized: {realised} {kpi.unit}
      </p>
      <p className="font-bold">
        Planned: {planned} {kpi.unit}
      </p>
      <p className={difference >= 0 ? "text-green-500" : "text-red-500"}>
        Difference: {difference} ({percentage.toFixed(2)}%)
      </p>
    </div>
  );
};

export default TextView;
