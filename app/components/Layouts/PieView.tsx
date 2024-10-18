import { KPI } from "@/content/types";
import { useEffect, useRef } from "react";

const ColumnView = ({
  realised,
  planned,
  kpi,
}: {
  realised: number;
  planned: number;
  kpi: KPI;
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const max = Math.max(realised, planned);

  useEffect(() => {
    const max = Math.max(realised, planned);
    const realizedPercentage = (realised / max) * 2 * Math.PI;

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.moveTo(60, 60);
        ctx.arc(60, 60, 60, 0, realizedPercentage);
        ctx.fillStyle = "#2563eb"; // blue-600
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(60, 60);
        ctx.arc(60, 60, 60, realizedPercentage, 2 * Math.PI);
        ctx.fillStyle = "#4b5563"; // gray-600
        ctx.fill();
      }
    }
  }, [realised, planned]);

  return (
    <div className="p-4 bg-slate-100 border rounded-lg flex flex-row">
      <h4 className="text-xl font-bold capitalize">{kpi.name}</h4>
      <div className="flex justify-around items-end w-full">
        <canvas ref={canvasRef} width={120} height={120}></canvas>
        <div className="text-center">
          <p className="font-bold text-blue-700">
            Realized: {realised} {kpi.unit}
          </p>
          <p className="font-bold text-gray-700">
            Planned: {planned} {kpi.unit}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColumnView;
