interface Asset {
  id: number;
  name: string;
  description: string;
  areas: string[];
  businessQuestions: BusinessQuestion[];
  kpis: AssetKPI[];
}

interface BusinessQuestion {
  title: string;
  description: string;
}

interface AssetKPI {
  id: string;
  name: string;
  values: {
    [area: string]: {
      realised: number;
      planned: number;
    };
  };
}

enum KPIName {
  SALES = "sales",
  COST = "cost",
  PROFIT = "profit",
}

enum Visualization {
  TEXT = "text",
  COLUMN = "column",
  PIE = "pie",
}

interface KPI {
  id: number;
  name: KPIName;
  description: string;
  calculation: string;
  unit: string;
}

interface Layout {
  kpi: KPIName;
  visualization: Visualization;
}

export type { Asset, KPI, Layout };
export { Visualization, KPIName };
