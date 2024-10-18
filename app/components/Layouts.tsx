import { KPI, Layout, Visualization, KPIName } from "@/content/types";
import TextView from "./Layouts/TextView";
import ColumnView from "./Layouts/ColumnView";
import PieView from "./Layouts/PieView";

interface LayoutProps {
  selectedKpis: KPI[];
  selectedLayouts: Layout[];
  setSelectedLayouts: (layouts: Layout[]) => void;
}

const Layouts = ({
  selectedKpis,
  selectedLayouts,
  setSelectedLayouts,
}: LayoutProps) => {
  const handleSelection = (kpiName: KPIName, visualization: Visualization) => {
    const updatedLayouts = selectedLayouts.some((l) => l.kpi === kpiName)
      ? selectedLayouts.map((l) =>
          l.kpi === kpiName ? { ...l, visualization } : l
        )
      : [...selectedLayouts, { kpi: kpiName, visualization }];

    setSelectedLayouts(updatedLayouts);
  };

  const renderSelectedComponent = (type: Visualization, kpi: KPI) => {
    switch (type) {
      case Visualization.TEXT:
        return <TextView realised={70} planned={100} kpi={kpi} />;
      case Visualization.COLUMN:
        return <ColumnView realised={70} planned={100} kpi={kpi} />;
      case Visualization.PIE:
        return <PieView realised={70} planned={100} kpi={kpi} />;
      default:
        return null;
    }
  };

  const visualizationLabels = {
    [Visualization.TEXT]: "Text",
    [Visualization.COLUMN]: "Column",
    [Visualization.PIE]: "Pie",
  };

  if (!selectedKpis || selectedKpis.length === 0) {
    return <p>Please select at least one KPI.</p>;
  }

  return (
    <div className="flex flex-col gap-5">
      {selectedKpis.map((kpi) => {
        const selectedLayout = selectedLayouts.find((l) => l.kpi === kpi.name);

        return (
          <div
            key={kpi.id}
            className="grid grid-cols-[calc(50%-20px)_calc(50%+20px)] p-4 bg-white rounded-lg border text-slate-600 w-full cursor-pointer hover:shadow-lg"
          >
            <div className="flex gap-4 my-auto">
              {Object.values(Visualization).map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="radio"
                    name={`kpi-${kpi.id}`}
                    value={option}
                    checked={selectedLayout?.visualization === option}
                    onChange={() => handleSelection(kpi.name, option)}
                  />
                  <span className="ml-2">{visualizationLabels[option]}</span>
                </label>
              ))}
            </div>

            <div className="">
              {renderSelectedComponent(
                selectedLayout?.visualization || Visualization.TEXT,
                kpi
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Layouts;
