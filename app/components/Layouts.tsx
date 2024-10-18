import { KPI, Layout, Visualization, KPIName } from "@/content/types";

interface LayoutProps {
  selectedKpis: KPI[];
  selectedLayouts: Layout[];
  setSelectedLayouts: (layouts: Layout[]) => void;
}

const TextComponent = () => <div className="bg-blue-100 p-2">Text View</div>;
const ColumnComponent = () => (
  <div className="bg-green-100 p-2">Column View</div>
);
const PieComponent = () => <div className="bg-red-100 p-2">Pie View</div>;

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

  const renderSelectedComponent = (type: Visualization) => {
    switch (type) {
      case Visualization.TEXT:
        return <TextComponent />;
      case Visualization.COLUMN:
        return <ColumnComponent />;
      case Visualization.PIE:
        return <PieComponent />;
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
    <div className="p-4">
      {selectedKpis.map((kpi) => {
        const selectedLayout = selectedLayouts.find((l) => l.kpi === kpi.name);

        return (
          <div key={kpi.id} className="border p-2 mb-4">
            <h3 className="font-bold mb-2 capitalize">{kpi.name}</h3>
            <div className="flex gap-4">
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
            <div className="mt-4">
              {renderSelectedComponent(
                selectedLayout?.visualization || Visualization.TEXT
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Layouts;
