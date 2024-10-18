import { KPI } from "@/content/types";

const ColumnView = ({
  realised,
  planned,
  kpi,
}: {
  realised: number;
  planned: number;
  kpi: KPI;
}) => {
  const max = Math.max(realised, planned);
  return (
    <div className="p-4 bg-slate-100 border rounded-lg flex flex-row">
      <h4 className="text-xl font-bold capitalize">{kpi.name}</h4>
      <div className="flex justify-around items-end w-full">
        <div className="text-center flex flex-col">
          <div className="h-[150px] w-[60px] relative mx-auto">
            <div
              className="bg-blue-600 w-[60px] absolute bottom-0"
              style={{ height: `${(realised / max) * 100}%` }}
            ></div>
          </div>
          <p className="font-bold text-blue-700 mt-2">Realized:</p>
          <p className="font-bold text-blue-700">
            {realised} {kpi.unit}
          </p>
        </div>
        <div className="text-center flex flex-col">
          <div className="h-[150px] w-[60px] relative mx-auto">
            <div
              className="bg-gray-600 w-[60px] absolute bottom-0"
              style={{ height: `${(planned / max) * 100}%` }}
            ></div>
          </div>
          <p className="font-bold text-gray-700 mt-2">Planned:</p>
          <p className="font-bold text-gray-700">
            {planned} {kpi.unit}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColumnView;
