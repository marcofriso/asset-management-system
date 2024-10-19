import { KPI, Layout, Visualization, Asset } from "@/content/types";
import TextView from "./Layouts/TextView";
import ColumnView from "./Layouts/ColumnView";
import PieView from "./Layouts/PieView";

const Storyboards = ({
  assets,
  kpis,
  layouts,
  area,
}: {
  assets: Asset[];
  kpis: KPI[];
  layouts: Layout[];
  area: string;
}) => {
  const getLayoutForKPI = (kpiName: string) => {
    const layout = layouts.find((layout) => layout.kpi === kpiName);
    return layout ? layout.visualization : Visualization.TEXT;
  };

  const getKPIValuesForAsset = (
    asset: Asset,
    kpiName: string,
    area: string
  ) => {
    const assetKpi = asset.kpis.find((assetKpi) => assetKpi.name === kpiName);
    if (assetKpi && assetKpi.values[area]) {
      return assetKpi.values[area];
    }

    return { realised: 0, planned: 0 };
  };

  const renderSelectedComponent = (
    type: Visualization,
    kpi: KPI,
    asset: Asset,
    area: string
  ) => {
    const { realised, planned } = getKPIValuesForAsset(asset, kpi.name, area);

    switch (type) {
      case Visualization.TEXT:
        return <TextView realised={realised} planned={planned} kpi={kpi} />;
      case Visualization.COLUMN:
        return <ColumnView realised={realised} planned={planned} kpi={kpi} />;
      case Visualization.PIE:
        return <PieView realised={realised} planned={planned} kpi={kpi} />;
      default:
        return null;
    }
  };

  if (!assets || assets.length === 0 || !kpis || kpis.length === 0) {
    return <p>Please select at least one asset and one KPI.</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      {assets
        .sort((a, b) => a.id - b.id)
        .map((asset) => (
          <div
            key={asset.id}
            className="grid grid-cols-[calc(50%-20px)_calc(50%+20px)] p-4 bg-white rounded-lg border text-slate-600 w-full cursor-pointer hover:shadow-lg"
          >
            <h3 className="text-xl font-bold">{asset.name}</h3>
            <div className="grid grid-cols-1 gap-4">
              {kpis
                .sort((a, b) => a.id - b.id)
                .map((kpi) => {
                  const selectedLayout = getLayoutForKPI(kpi.name);
                  return (
                    <div key={`${asset.id} - ${kpi.id}`}>
                      {renderSelectedComponent(
                        selectedLayout,
                        kpi,
                        asset,
                        area
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Storyboards;
