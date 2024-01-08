import React, { FC } from 'react';

import InvestmentProductsGroup from './investment-products-group';
import PortfolioCompositionChart from './portfolio-composition-chart';
import {
  PortfolioCompositionBlockWrapper,
  PortfolioCompositionTopBlock,
  PortfolioBlockTitle,
  PortfolioCompositionChartWrapper,
} from './portfolio-page-styles';
import { IProductGroup } from './types';

export interface IPortfolioCompositionBlock {
  productGroups: IProductGroup[];
}

const PortfolioCompositionBlock: FC<IPortfolioCompositionBlock> = ({
  productGroups,
}) => {
  return (
    <PortfolioCompositionBlockWrapper>
      <PortfolioCompositionTopBlock>
        <PortfolioBlockTitle variant="h2">
          Portfolio composition
        </PortfolioBlockTitle>

        <PortfolioCompositionChartWrapper>
          <PortfolioCompositionChart productGroups={productGroups} />
        </PortfolioCompositionChartWrapper>

        <InvestmentProductsGroup productGroups={productGroups} />
      </PortfolioCompositionTopBlock>
    </PortfolioCompositionBlockWrapper>
  );
};

export default PortfolioCompositionBlock;
