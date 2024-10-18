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
    <div className="p-4 bg-blue-100 rounded">
      <h4 className="text-xl">{kpi.name}</h4>
      <div className="flex justify-around items-end h-48">
        <div className="text-center">
          <div className="h-[150px] relative">
            <div
              className="bg-blue-600 w-[60px] absolute bottom-0"
              style={{ height: `${(realised / max) * 100}%` }}
            ></div>
          </div>
          <p>Realized</p>
        </div>
        <div className="text-center">
          <div className="h-[150px] relative">
            <div
              className="bg-gray-600 w-[60px] absolute bottom-0"
              style={{ height: `${(planned / max) * 100}%` }}
            ></div>
          </div>
          <p>Planned</p>
        </div>
      </div>
    </div>
  );
};

export default ColumnView;
