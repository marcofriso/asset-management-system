type Asset = {
  id: number;
  name: string;
  description: string;
  areas: string[];
  businessQuestions: BusinessQuestion[];
  kpis: KPI[];
};

type BusinessQuestion = {
  title: string;
  description: string;
};

type KPI = {
  id: string;
  name: string;
  values: {
    [area: string]: {
      realised: number;
      planned: number;
    };
  };
};

export type { Asset, KPI };
