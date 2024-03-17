// import { IPortfolioData } from './types';

// export const portfolioData: IPortfolioData = {
//   portfolioComposition: {
//     productGroups: [
//       {
//         productGroupLabel: 'U.S. Bonds',
//         weight: 0.3,
//         products: [
//           {
//             ticket: 'ISTB',
//             label: 'iShares Core 1-5 Year USD Bond ETF',
//             allocationPercentage: 52,
//             allocationСurrency: 0.06,
//             currency: 'usd',
//           },
//           {
//             ticket: 'AGG',
//             label: 'iShares Core U.S. Aggregate Bond ETF',
//             allocationPercentage: 38,
//             allocationСurrency: 0.04,
//             currency: 'usd',
//           },
//           {
//             ticket: 'BND',
//             label: 'Vanguard Total Bond Market ETF',
//             allocationPercentage: 7,
//             allocationСurrency: 0.01,
//             currency: 'usd',
//           },
//           {
//             ticket: 'MUB',
//             label: 'iShares National Muni Bond ETF',
//             allocationPercentage: 3,
//             allocationСurrency: 0.01,
//             currency: 'usd',
//           },
//         ],
//       },
//       {
//         productGroupLabel: 'Equities',
//         weight: 0.3,
//         products: [
//           {
//             ticket: 'IVV',
//             label: 'iShares Core S&P 500 ETF',
//             allocationPercentage: 70,
//             allocationСurrency: 0.08,
//             currency: 'usd',
//           },
//           {
//             ticket: 'VXUS',
//             label: 'Vanguard Total International Stock ETF',
//             allocationPercentage: 20,
//             allocationСurrency: 0.05,
//             currency: 'usd',
//           },
//           {
//             ticket: 'QQQ',
//             label: 'Invesco QQQ Trust',
//             allocationPercentage: 8,
//             allocationСurrency: 0.03,
//             currency: 'usd',
//           },
//           {
//             ticket: 'VGT',
//             label: 'Vanguard Information Technology ETF',
//             allocationPercentage: 2,
//             allocationСurrency: 0.01,
//             currency: 'usd',
//           },
//         ],
//       },
//       // {
//       //   productGroupLabel: 'Commodities',
//       //   weight: 0.4,
//       //   products: [
//       //     {
//       //       ticket: 'GLD',
//       //       label: 'SPDR Gold Shares',
//       //       allocationPercentage: 60,
//       //       allocationСurrency: 0.05,
//       //       currency: 'usd',
//       //     },
//       //     {
//       //       ticket: 'USO',
//       //       label: 'United States Oil Fund',
//       //       allocationPercentage: 30,
//       //       allocationСurrency: 0.04,
//       //       currency: 'usd',
//       //     },
//       //     {
//       //       ticket: 'DBA',
//       //       label: 'Invesco DB Agriculture Fund',
//       //       allocationPercentage: 7,
//       //       allocationСurrency: 0.01,
//       //       currency: 'usd',
//       //     },
//       //     {
//       //       ticket: 'SLV',
//       //       label:
//       //         'iShares Silver Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Trust',
//       //       allocationPercentage: 3,
//       //       allocationСurrency: 0.01,
//       //       currency: 'usd',
//       //     },
//       //   ],
//       // },
//       // {
//       //   productGroupLabel: 'Commodities',
//       //   weight: 0.4,
//       //   products: [
//       //     {
//       //       ticket: 'GLD',
//       //       label: 'SPDR Gold Shares',
//       //       allocationPercentage: 60,
//       //       allocationСurrency: 0.05,
//       //       currency: 'usd',
//       //     },
//       //     {
//       //       ticket: 'USO',
//       //       label: 'United States Oil Fund',
//       //       allocationPercentage: 30,
//       //       allocationСurrency: 0.04,
//       //       currency: 'usd',
//       //     },
//       //     {
//       //       ticket: 'DBA',
//       //       label: 'Invesco DB Agriculture Fund',
//       //       allocationPercentage: 7,
//       //       allocationСurrency: 0.01,
//       //       currency: 'usd',
//       //     },
//       //     {
//       //       ticket: 'SLV',
//       //       label:
//       //         'iShares Silver Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Trust',
//       //       allocationPercentage: 3,
//       //       allocationСurrency: 0.01,
//       //       currency: 'usd',
//       //     },
//       //   ],
//       // },
//       // {
//       //   productGroupLabel: 'Commodities',
//       //   weight: 0.4,
//       //   products: [
//       //     {
//       //       ticket: 'GLD',
//       //       label: 'SPDR Gold Shares',
//       //       allocationPercentage: 60,
//       //       allocationСurrency: 0.05,
//       //       currency: 'usd',
//       //     },
//       //     {
//       //       ticket: 'USO',
//       //       label: 'United States Oil Fund',
//       //       allocationPercentage: 30,
//       //       allocationСurrency: 0.04,
//       //       currency: 'usd',
//       //     },
//       //     {
//       //       ticket: 'DBA',
//       //       label: 'Invesco DB Agriculture Fund',
//       //       allocationPercentage: 7,
//       //       allocationСurrency: 0.01,
//       //       currency: 'usd',
//       //     },
//       //     {
//       //       ticket: 'SLV',
//       //       label:
//       //         'iShares Silver Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Trust',
//       //       allocationPercentage: 3,
//       //       allocationСurrency: 0.01,
//       //       currency: 'usd',
//       //     },
//       //   ],
//       // },
//       // {
//       //   productGroupLabel: 'Commodities',
//       //   weight: 0.4,
//       //   products: [
//       //     {
//       //       ticket: 'GLD',
//       //       label: 'SPDR Gold Shares',
//       //       allocationPercentage: 60,
//       //       allocationСurrency: 0.05,
//       //       currency: 'usd',
//       //     },
//       //     {
//       //       ticket: 'USO',
//       //       label: 'United States Oil Fund',
//       //       allocationPercentage: 30,
//       //       allocationСurrency: 0.04,
//       //       currency: 'usd',
//       //     },
//       //     {
//       //       ticket: 'DBA',
//       //       label: 'Invesco DB Agriculture Fund',
//       //       allocationPercentage: 7,
//       //       allocationСurrency: 0.01,
//       //       currency: 'usd',
//       //     },
//       //     {
//       //       ticket: 'SLV',
//       //       label:
//       //         'iShares Silver Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Trust',
//       //       allocationPercentage: 3,
//       //       allocationСurrency: 0.01,
//       //       currency: 'usd',
//       //     },
//       //   ],
//       // },
//       // {
//       //   productGroupLabel: 'Commodities',
//       //   weight: 0.4,
//       //   products: [
//       //     {
//       //       ticket: 'GLD',
//       //       label: 'SPDR Gold Shares',
//       //       allocationPercentage: 60,
//       //       allocationСurrency: 0.05,
//       //       currency: 'usd',
//       //     },
//       //     {
//       //       ticket: 'USO',
//       //       label: 'United States Oil Fund',
//       //       allocationPercentage: 30,
//       //       allocationСurrency: 0.04,
//       //       currency: 'usd',
//       //     },
//       //     {
//       //       ticket: 'DBA',
//       //       label: 'Invesco DB Agriculture Fund',
//       //       allocationPercentage: 7,
//       //       allocationСurrency: 0.01,
//       //       currency: 'usd',
//       //     },
//       //     {
//       //       ticket: 'SLV',
//       //       label:
//       //         'iShares Silver Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Trust',
//       //       allocationPercentage: 3,
//       //       allocationСurrency: 0.01,
//       //       currency: 'usd',
//       //     },
//       //   ],
//       // },
//       // {
//       //   productGroupLabel: 'Commodities',
//       //   weight: 0.4,
//       //   products: [
//       //     {
//       //       ticket: 'GLD',
//       //       label: 'SPDR Gold Shares',
//       //       allocationPercentage: 60,
//       //       allocationСurrency: 0.05,
//       //       currency: 'usd',
//       //     },
//       //     {
//       //       ticket: 'USO',
//       //       label: 'United States Oil Fund',
//       //       allocationPercentage: 30,
//       //       allocationСurrency: 0.04,
//       //       currency: 'usd',
//       //     },
//       //     {
//       //       ticket: 'DBA',
//       //       label: 'Invesco DB Agriculture Fund',
//       //       allocationPercentage: 7,
//       //       allocationСurrency: 0.01,
//       //       currency: 'usd',
//       //     },
//       //     {
//       //       ticket: 'SLV',
//       //       label:
//       //         'iShares Silver Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Trust',
//       //       allocationPercentage: 3,
//       //       allocationСurrency: 0.01,
//       //       currency: 'usd',
//       //     },
//       //   ],
//       // },
//     ],
//   },

//   exposures: {
//     exposuresSectors: {
//       labels: [
//         'treasury',
//         'technology',
//         'financial',
//         'healthcare',
//         'consumer discretionary',
//         'industrial',
//         'energy',
//         'utilities',
//         'real estate',
//         'communication services',
//       ],
//       values: [0.2, 0.2, 0.1, 0.1, 0.1, 0.1, 0.05, 0.05, 0.05, 0.05],
//     },
//     exposuresTop10Holdings: {
//       labels: [
//         '2treasury',
//         'technology',
//         'financial',
//         'healthcare',
//         'consumer discretionary',
//         'industrial',
//         'energy',
//         'utilities',
//         'real estate',
//         'communication services',
//       ],
//       values: [0.2, 0.2, 0.1, 0.1, 0.1, 0.1, 0.05, 0.05, 0.05, 0.05],
//     },
//     exposuresCreditQuality: {
//       labels: [
//         '3treasury',
//         'technology',
//         'financial',
//         'healthcare',
//         'consumer discretionary',
//         'industrial',
//         'energy',
//         'utilities',
//         'real estate',
//         'communication services',
//       ],
//       values: [0.2, 0.2, 0.1, 0.1, 0.1, 0.1, 0.05, 0.05, 0.05, 0.05],
//     },
//   },

//   // новая версия графика доходности (март 2024)
//   // ЗАПРОС
//   //   {
//   //   portfolioId: string,
//   //   dataType: 'performance' | 'value',
//   //   period: '1M' | '3M' | '1Y' | '2Y' | '5Y',
//   //   benchmark: '' | 'S&P 500' | 'NASDAQ Composite' | 'MSCI WORLD'
//   // }
//   // ОТВЕТ
//   // @ts-ignore
//   financialResults: {
//     portfolioValue: '6061',
//     rateOfReturn: '15.11',
//     periods: [
//       '2022-04-01T00:00:00',
//       '2022-04-02T00:00:00',
//       '2022-04-03T00:00:00',
//       // '02.10.2024',
//       // '02.11.2024',
//       // '02.12.2024',
//       // '02.13.2024',
//       // '02.14.2024',
//       // '02.15.2024',
//       // '02.16.2024',
//       // '02.17.2024',
//       // '02.18.2024',
//       // '02.19.2024',
//       // '02.20.2024',
//       // '02.21.2024',
//       // '02.22.2024',
//       // '02.23.2024',
//       // '02.24.2024',
//       // '02.25.2024',
//       // '02.26.2024',
//       // '02.27.2024',
//       // '02.28.2024',
//       // '02.29.2024',
//       // '03.01.2024',
//       // '03.02.2024',
//       // '03.03.2024',
//       // '03.04.2024',
//       // '03.05.2024',
//       // '03.06.2024',
//       // '03.07.2024',
//       // '03.08.2024',
//       // '03.09.2024',
//       // '03.10.2024',
//       // '03.11.2024',
//     ],
//     values: [
//       0.0, 0.6759076205390624, -2.0051595078616646,
//       // 0.05, 0.07, 0.08, 0.08, 0.05, 0, -0.03, -0.06, -0.011, -0.1, -0.09, -0.08,
//       // -0.07, -0.06, -0.05, -0.04, 0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07,
//       // 0.08, 0.09, 0.12, 0.12, 0.13, 0.15,
//     ],
//     benchmarkValues: [
//       0.1, 0.16759076205390624, -2.10051595078616646,
//       // 0.03, 0.04, 0.05, 0.05, 0.03, 0, -0.07, -0.09, -0.013, -0.13, -0.11, -0.1,
//       // -0.1, -0.08, -0.07, -0.06, 0, 0, 0.0, 0.01, 0.03, 0.03, 0.04, 0.06, 0.07,
//       // 0.06, 0.1, 0.11, 0.09, 0.13,
//     ],

//     // percentageReturn: [
//     //   // {
//     //   //   label: 'Average Inflation in Europe, %',
//     //   //   values: [1.5, 1.7, 1.8, 1.4, 1.5, 1.8, 2.0, 1.5, 1.3, 1.6],
//     //   // },
//     //   // {
//     //   //   label: 'Average Rate on Deposits in Europe, %',
//     //   //   values: [1.0, 0.9, 0.7, 0.5, 0.3, 0.4, 0.5, 0.7, 0.9, 1.1],
//     //   // },
//     //   {
//     //     // label: 'Return on Investments, %',
//     //     values: [
//     //       0.05, 0.07, 0.08, 0.08, 0.05, 0, -0.03, -0.06, -0.011, -0.1, -0.09,
//     //       -0.08, -0.07, -0.06, -0.05, -0.04, 0, 0.01, 0.02, 0.03, 0.04, 0.05,
//     //       0.06, 0.07, 0.08, 0.09, 0.12, 0.12, 0.13, 0.15,
//     //     ],
//     //   },
//     // ],
//     valueReturn: [
//       // {
//       //   label: 'Income from investments in deposits, per €1000',
//       //   values: [10, 9, 7, 5, 3, 4, 5, 7, 9, 11],
//       // },
//       {
//         label: 'Income from investments in Lintu, per €1000',
//         // values: [110, 99, 50, 85, 90, 74, 125, 67, 69, 141],
//         values: [
//           5800, 5825, 5835, 5840, 5855, 5860, 5875, 5870, 5890, 5870, 5885,
//           5890, 5905, 5910, 5930, 5945, 5950, 5960, 5965, 5930, 5935, 5940,
//           6010, 6025, 6030, 6040, 6055, 6060, 6065, 6080, 6088,
//         ],
//       },
//     ],
//   },

//   // старая версия графика доходности
//   historicalReturns: {
//     totalHistoricalReturns: 156,
//     years: [
//       '2013',
//       '2014',
//       '2015',
//       '2016',
//       '2017',
//       '2018',
//       '2019',
//       '2020',
//       '2021',
//       '2022',
//     ],
//     percentageReturn: [
//       {
//         label: 'Average Inflation in Europe, %',
//         values: [1.5, 1.7, 1.8, 1.4, 1.5, 1.8, 2.0, 1.5, 1.3, 1.6],
//       },
//       {
//         label: 'Average Rate on Deposits in Europe, %',
//         values: [1.0, 0.9, 0.7, 0.5, 0.3, 0.4, 0.5, 0.7, 0.9, 1.1],
//       },
//       {
//         label: 'Return on Investments, %',
//         values: [11.0, 9.9, 5, 7.5, 9, 7.4, 12.5, 6.7, 6.9, 14.1],
//       },
//     ],
//     currencyReturn: [
//       {
//         label: 'Income from investments in deposits, per €1000',
//         values: [10, 9, 7, 5, 3, 4, 5, 7, 9, 11],
//       },
//       {
//         label: 'Income from investments in Lintu, per €1000',
//         values: [110, 99, 50, 85, 90, 74, 125, 67, 69, 141],
//       },
//     ],
//   },

//   esgPerformance: {
//     labels: ['Environmental', 'Social', 'Corporate', 'Environmental', 'Social'],
//     values: [10, 5, 5, 3, 2],
//   },

//   levelOfRisk: 3,
// };
