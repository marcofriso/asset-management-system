import React from "react";
import type { KPI } from "@/content/types";
import { kpis } from "@/content/constants";

const KPIs = ({
  selectedKPIs,
  setSelectedKPIs,
}: {
  selectedKPIs: KPI[];
  setSelectedKPIs: (kpis: KPI[]) => void;
}) => {
  const handleCheckboxClick = (kpi: KPI) => {
    const isSelected = selectedKPIs.includes(kpi);
    if (isSelected) {
      setSelectedKPIs(selectedKPIs.filter((a) => a.id !== kpi.id));
    } else {
      setSelectedKPIs([...selectedKPIs, kpi]);
    }
  };

  return (
    <div className="w-full grid md:grid-cols-2 gap-4">
      {kpis.map((kpi) => (
        <div
          key={kpi.id}
          className="flex flex-col p-4 bg-white rounded-lg border text-slate-600 w-full cursor-pointer hover:shadow-lg"
        >
          <div className="flex gap-3 w-fit">
            <input
              type="checkbox"
              id={`kpi ${kpi.id}`}
              checked={selectedKPIs.includes(kpi)}
              onChange={() => handleCheckboxClick(kpi)}
            />
            <label
              htmlFor={`kpi ${kpi.id}`}
              className="text-md font-semibold capitalize"
            >
              {kpi.name}
            </label>
          </div>
          <p className="text-sm line-clamp-3 text-ellipsis">
            {kpi.description}
          </p>
          <p className="text-sm text-slate-600 mt-2">
            <span className="font-semibold">Unit: </span>
            {kpi.unit}
          </p>
          <p className="text-sm text-slate-600 mt-0.5">
            <span className="font-semibold">Calculation: </span>
            {kpi.calculation}
          </p>
        </div>
      ))}
    </div>
  );
};

export default KPIs;
