import React, { FC, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { exposuresChartRequest } from '@/actions/actions';
import { selectAccessKey } from '@/store/slices/sessionSlice';

import InvestmentProductsGroup from './investment-products-group';
import PortfolioCompositionChart from './portfolio-composition-chart';
import { EQUITIES_COLORS, BONDS_COLORS } from '../constants';
import { IExposuresData } from '../ExposuresBlock/exposures-block';
import {
  PortfolioCompositionBlockWrapper,
  PortfolioCompositionTopBlock,
  PortfolioBlockTitle,
  PortfolioCompositionChartWrapper,
} from '../portfolio-page-styles';
// import { IProductGroup } from '../types';

export interface IPortfolioCompositionBlock {
  // productGroups: IProductGroup[];
  portfolioId: string;
}

// const exposuresMockData = {
//   etfAllocations: [
//     {
//       groupName: 'U.S. Stocks',
//       groupData: [
//         {
//           fundName: 'iShares Core S&P 500 ETF',
//           ticket: 'ABDD',
//           weight: 32.6,
//           dollarsAmount: 110,
//           numberOfShares: 12,
//         },
//         {
//           fundName: 'iShares Core S&P Mid-Cap ETF',
//           ticket: 'AFDD',
//           weight: 2.1,
//           dollarsAmount: 90,
//           numberOfShares: 5,
//         },
//       ],
//     },
//     {
//       groupName: 'INTERNATIONAL Stocks',
//       groupData: [
//         {
//           fundName: 'iShares Core MSCI International Developed Markets ETF',
//           ticket: 'ARDD',
//           weight: 32.6,
//           dollarsAmount: 110,
//           numberOfShares: 12,
//         },
//         {
//           fundName: 'iShares Core MSCI Emerging Markets ETF',
//           ticket: 'ATFD',
//           weight: 2.1,
//           dollarsAmount: 90,
//           numberOfShares: 5,
//         },
//       ],
//     },
//   ],
//   sectorExposures: {
//     treasury: 0.2,
//     technology: 0.11,
//     financial: 0.69,
//     treasury1: 0.2,
//     technology1: 0.11,
//     financial1: 0.69,
//     treasury2: 0.2,
//     technology2: 0.11,
//     financial2: 0.69,
//     financial3: 0.69,
//   },
//   topHoldings: [
//     {
//       holdingName: 'TRESURY NoTe',
//       holdingSector: 'Tresury',
//       weight: 8.99,
//     },
//     {
//       holdingName: 'miCrosoft corp',
//       holdingSector: 'Information technology',
//       weight: 32.6,
//     },
//   ],
//   creditQuality: {
//     'AAA Rated': 0.2,
//     'AA Rated': 0.11,
//     'A Rated': 0.69,
//   },
// };

// const PortfolioCompositionBlock: FC<IPortfolioCompositionBlock> = ({

export interface Asset {
  asset: string;
  ticket: string;
  allocation: number;
  money: number;
  numberofshares: number;
}

export interface Exposures {
  asset_class?: string;
  assets?: Asset[];
  sectors?: { [sector: string]: number };
  holdings?: { [holding: string]: number };
  ratings?: { [rating: string]: number };
}

const exposuresMockData2: Exposures[] = [
  {
    asset_class: 'Equity',
    assets: [
      {
        asset: 'Vanguard S&P 500 ETF',
        ticket: 'VOO-',
        allocation: 0.2,
        money: 200.0,
        numberofshares: 0.42,
      },
      {
        asset: 'Vanguard Total World Stock Inde',
        ticket: 'VT',
        allocation: 0.05,
        money: 50.0,
        numberofshares: 0.46,
      },
    ],
  },
  {
    asset_class: 'Bonds',
    assets: [
      {
        asset: 'Vanguard Short-Term Bond ETF',
        ticket: 'BSV',
        allocation: 0.55,
        money: 550.0,
        numberofshares: 7.2,
      },
      {
        asset: 'iShares Core U.S. Aggregate Bon',
        ticket: 'AGG',
        allocation: 0.2,
        money: 200.0,
        numberofshares: 2.06,
      },
    ],
  },
  {
    sectors: {
      'Basic Materials': 0.64,
      'Consumer Cyclical': 2.7,
      'Financial Services': 3.28,
      'Real Estate': 0.61,
      'Consumer Defensive': 1.5,
      Healthcare: 3.08,
      Utilities: 0.55,
      'Communication Services': 2.14,
      Energy: 0.97,
      Industrials: 2.2,
      Technology: 7.33,
    },
  },
  {
    holdings: {
      'Microsoft Corp': 1.63,
      'Apple Inc': 1.41,
      'NVIDIA Corp': 1.01,
      'Amazon.com Inc': 0.84,
      'Meta Platforms Inc Class A': 0.56,
      'Alphabet Inc Class A': 0.44,
      'Alphabet Inc Class C': 0.39,
      'Berkshire Hathaway Inc Class B': 0.36,
      'Eli Lilly and Co': 0.32,
      'Broadcom Inc': 0.27,
      'Tesla Inc': 0.03,
    },
  },
  {
    ratings: {
      'US Government': 37.13,
      AAA: 2.75,
      AA: 15.76,
      A: 9.77,
      BBB: 9.47,
      'Not rated': 0.0,
      Cash: 0.14,
    },
  },
];

const PortfolioCompositionBlock: FC<IPortfolioCompositionBlock> = ({
  // productGroups,
  portfolioId,
}) => {
  const accessKey = useSelector(selectAccessKey);
  // LOADING
  // const [dataToDispaly, setDataToDispaly] = useState<IExposuresData | null>(
  const [dataToDispaly, setDataToDispaly] = useState<Exposures[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const requestBody = {
        portfolio: portfolioId,
      };

      // console.log('requestBody 123', requestBody);

      // const response: IExposuresData | undefined = await exposuresChartRequest(
      const response: Exposures[] | undefined = await exposuresChartRequest(
        accessKey,
        requestBody,
        setIsLoading,
      );

      // console.log('response 123', response);

      if (response) {
        setDataToDispaly(response);
      } else {
        setDataToDispaly(exposuresMockData2);
      }
    };

    if (accessKey) {
      fetchData();
    }
  }, [accessKey]);

  // ПОСЛЕ 25.03
  // {
  //   asset_class: 'Equity',
  //   assets: [
  //     {
  //       asset: 'Vanguard S&P 500 ETF',
  //       ticket: 'VOO',
  //       allocation: 0.2,
  //       money: 200.0,
  //       numberofshares: 0.42,
  //     },

  let mappedData2;

  if (dataToDispaly) {
    const mappedData2_0 =
      dataToDispaly &&
      // @ts-ignore
      dataToDispaly[0].assets.map((assetItem: any, ind: number) => ({
        asset2: assetItem.asset,
        ticket2: assetItem.ticket,
        allocation2: assetItem.allocation,
        money2: assetItem.money,
        numberofshares2: assetItem.numberofshares,
        bg2: EQUITIES_COLORS[ind],
      }));
    const mappedData2_1 =
      dataToDispaly &&
      // @ts-ignore
      dataToDispaly[1].assets.map((assetItem: any, ind: number) => ({
        asset2: assetItem.asset,
        ticket2: assetItem.ticket,
        allocation2: assetItem.allocation,
        money2: assetItem.money,
        numberofshares2: assetItem.numberofshares,
        bg2: BONDS_COLORS[ind],
      }));

    mappedData2 = [...mappedData2_0, ...mappedData2_1];
  }

  return (
    <PortfolioCompositionBlockWrapper>
      <PortfolioCompositionTopBlock>
        <PortfolioBlockTitle variant="h2">
          Portfolio composition
        </PortfolioBlockTitle>

        <PortfolioCompositionChartWrapper>
          {isLoading && 'Loading...'}
          {/* {dataToDispaly?.etfAllocations && (
            <PortfolioCompositionChart
              etfAllocations={dataToDispaly?.etfAllocations}
            />
          )} */}
          {mappedData2 && <PortfolioCompositionChart data2={mappedData2} />}
        </PortfolioCompositionChartWrapper>

        {isLoading && 'Loading...'}
        {/* {dataToDispaly?.etfAllocations && (
          <InvestmentProductsGroup
            etfAllocations={dataToDispaly?.etfAllocations}
          />
        )} */}
        {mappedData2 && (
          <InvestmentProductsGroup
            // etfAllocations={dataToDispaly?.etfAllocations}
            data2={mappedData2}
          />
        )}
      </PortfolioCompositionTopBlock>
    </PortfolioCompositionBlockWrapper>
  );
};

export default PortfolioCompositionBlock;
