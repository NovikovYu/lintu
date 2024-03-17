import React, { FC, useEffect, useState } from 'react';

import { exposuresChartRequest } from '@/actions/actions';

import InvestmentProductsGroup from './investment-products-group';
import PortfolioCompositionChart from './portfolio-composition-chart';
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

const exposuresMockData = {
  etfAllocations: [
    {
      groupName: 'U.S. Stocks',
      groupData: [
        {
          fundName: 'iShares Core S&P 500 ETF',
          ticket: 'ABDD',
          weight: 32.6,
          dollarsAmount: 110,
          numberOfShares: 12,
        },
        {
          fundName: 'iShares Core S&P Mid-Cap ETF',
          ticket: 'AFDD',
          weight: 2.1,
          dollarsAmount: 90,
          numberOfShares: 5,
        },
      ],
    },
    {
      groupName: 'INTERNATIONAL Stocks',
      groupData: [
        {
          fundName: 'iShares Core MSCI International Developed Markets ETF',
          ticket: 'ARDD',
          weight: 32.6,
          dollarsAmount: 110,
          numberOfShares: 12,
        },
        {
          fundName: 'iShares Core MSCI Emerging Markets ETF',
          ticket: 'ATFD',
          weight: 2.1,
          dollarsAmount: 90,
          numberOfShares: 5,
        },
      ],
    },
  ],
  sectorExposures: {
    treasury: 0.2,
    technology: 0.11,
    financial: 0.69,
    treasury1: 0.2,
    technology1: 0.11,
    financial1: 0.69,
    treasury2: 0.2,
    technology2: 0.11,
    financial2: 0.69,
    financial3: 0.69,
  },
  topHoldings: [
    {
      holdingName: 'TRESURY NoTe',
      holdingSector: 'Tresury',
      weight: 8.99,
    },
    {
      holdingName: 'miCrosoft corp',
      holdingSector: 'Information technology',
      weight: 32.6,
    },
  ],
  creditQuality: {
    'AAA Rated': 0.2,
    'AA Rated': 0.11,
    'A Rated': 0.69,
  },
};

// const PortfolioCompositionBlock: FC<IPortfolioCompositionBlock> = ({
const PortfolioCompositionBlock: FC<IPortfolioCompositionBlock> = ({
  // productGroups,
  portfolioId,
}) => {
  // LOADING
  const [dataToDispaly, setDataToDispaly] = useState<IExposuresData | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const requestBody = {
        portfolio: portfolioId,
      };

      console.log('requestBody 123', requestBody);

      const response: IExposuresData | undefined = await exposuresChartRequest(
        requestBody,
        setIsLoading,
      );

      console.log('response 123', response);

      if (response?.etfAllocations) {
        setDataToDispaly(response);
      } else {
        setDataToDispaly(exposuresMockData);
      }
    };

    fetchData();
  }, []);

  return (
    <PortfolioCompositionBlockWrapper>
      <PortfolioCompositionTopBlock>
        <PortfolioBlockTitle variant="h2">
          Portfolio composition NEW
        </PortfolioBlockTitle>

        <PortfolioCompositionChartWrapper>
          {isLoading && 'Loading...'}
          {dataToDispaly?.etfAllocations && (
            <PortfolioCompositionChart
              etfAllocations={dataToDispaly?.etfAllocations}
            />
          )}
        </PortfolioCompositionChartWrapper>

        {isLoading && 'Loading...'}
        {dataToDispaly?.etfAllocations && (
          <InvestmentProductsGroup
            etfAllocations={dataToDispaly?.etfAllocations}
          />
        )}
      </PortfolioCompositionTopBlock>
    </PortfolioCompositionBlockWrapper>
  );
};

export default PortfolioCompositionBlock;
