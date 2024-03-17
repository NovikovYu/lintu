// export interface IPortfolioData {
//   portfolioComposition: { productGroups: IProductGroup[] };
//   exposures: IExposures;
//   historicalReturns: IHistoricalReturns;
//   esgPerformance: IDataSet;
//   levelOfRisk: number;
// }

interface Product {
  ticket: string;
  label: string;
  allocationPercentage: number;
  allocationСurrency?: number;
  currency?: string;
}

// export interface IProductGroup {
//   productGroupLabel: string;
//   weight: number;
//   products: Product[];
// }

// export interface IInvestmentProductsGroup {
//   productGroups: IProductGroup[];
// }

export interface IHistoricalReturns {
  // totalHistoricalReturns: number;
  // years: string[];
  // percentageReturn: IDataSetWithSingleLabel[];
  // currencyReturn: IDataSetWithSingleLabel[];
  portfolioId: string;
}

export interface IHistoricalReturnsChart {
  years: string[];
  percentageReturn?: IDataSetWithSingleLabel[];
  currencyReturn?: IDataSetWithSingleLabel[];
}

export interface IFinancialResultValueChart {
  periods: string[];
  data: number[];
}
export interface IFinancialResultPerformanceChart {
  periods: string[];
  data: number[];
  benchmarkValues?: number[];
}

export interface IExposures {
  // exposuresSectors: IDataSet;
  // exposuresTop10Holdings: IDataSet;
  // exposuresCreditQuality: IDataSet;
  portfolioId: string;
}
export interface IDataSet {
  labels: string[];
  values: number[];
}
export interface IDataSetWithSingleLabel {
  label: string;
  values: number[];
}
