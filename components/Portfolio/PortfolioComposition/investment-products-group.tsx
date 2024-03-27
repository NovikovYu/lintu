import React from 'react';

import { useTheme } from '@mui/material';

import { IEtfAllocation } from '../ExposuresBlock/exposures-block';
import {
  InvestmentProductsGroupWrapper,
  InvestmentProductGroupLabel,
  InvestmentProductWrapper,
  CustomInvestmentProductLabelWrapper,
  InvestmentProductTicket,
  InvestmentProductTitle,
  InvestmentProductSubtitle,
  InvestmentProductDescription,
} from '../portfolio-page-styles';
// import { IInvestmentProductsGroup } from '../types';

const enum currency {
  usd = '$',
}

interface IInvestmentProductsGroup {
  // productGroups: IProductGroup[];
  // etfAllocations: {
  //   groupName: string;
  //   groupData: IEtfAllocation[];
  // }[];
  data2: any[];
}

// const PortfolioCompositionChart: FC<IPortfolioCompositionChart> = ({
//   // productGroups,
//   etfAllocations,
// }) => {

const InvestmentProductsGroup: React.FC<IInvestmentProductsGroup> = ({
  // etfAllocations,
  data2,
}) => {
  const theme = useTheme();

  return (
    <>
      {data2.map((product) => {
        return (
          <InvestmentProductWrapper
            key={product.ticket2}
            // href="https://www.google.com/"
            // target="_blank"
          >
            <CustomInvestmentProductLabelWrapper
              color={product.bg2}
              theme={theme}
            >
              <InvestmentProductTicket>
                {product.ticket2}
              </InvestmentProductTicket>
            </CustomInvestmentProductLabelWrapper>
            <InvestmentProductDescription>
              <InvestmentProductTitle variant="h6">
                {product.asset2}
              </InvestmentProductTitle>
              <InvestmentProductSubtitle>
                Allocation: {product.allocation2}%, {product.money2.toFixed(2)}{' '}
                {currency['usd']}
              </InvestmentProductSubtitle>
            </InvestmentProductDescription>
          </InvestmentProductWrapper>
        );
      })}
    </>
  );
};

export default InvestmentProductsGroup;
