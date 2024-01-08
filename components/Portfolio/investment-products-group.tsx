import React from 'react';

import { useTheme } from '@mui/material';

import {
  InvestmentProductsGroupWrapper,
  InvestmentProductGroupLabel,
  InvestmentProductWrapper,
  CustomInvestmentProductLabelWrapper,
  InvestmentProductTicket,
  InvestmentProductTitle,
  InvestmentProductSubtitle,
  InvestmentProductDescription,
} from './portfolio-page-styles';
import { IInvestmentProductsGroup } from './types';

const enum currency {
  usd = '$',
}

const InvestmentProductsGroup: React.FC<IInvestmentProductsGroup> = ({
  productGroups,
}) => {
  const theme = useTheme();

  return (
    <>
      {productGroups.map((group, index) => {
        return (
          <InvestmentProductsGroupWrapper key={group.productGroupLabel}>
            <InvestmentProductGroupLabel variant="h5">
              {group.productGroupLabel}
            </InvestmentProductGroupLabel>

            {group.products.map((product) => {
              return (
                <InvestmentProductWrapper
                  key={product.ticket}
                  href="https://www.google.com/"
                  target="_blank"
                >
                  <CustomInvestmentProductLabelWrapper
                    color={
                      Object.values(theme.palette.colorsForDonutChart)[
                        index
                      ] as string
                    }
                    theme={theme}
                  >
                    <InvestmentProductTicket>
                      {product.ticket}
                    </InvestmentProductTicket>
                  </CustomInvestmentProductLabelWrapper>
                  <InvestmentProductDescription>
                    <InvestmentProductTitle variant="h6">
                      {product.label}
                    </InvestmentProductTitle>
                    <InvestmentProductSubtitle>
                      Allocation: {product.allocationPercentage}%,{' '}
                      {product.currency &&
                        ` ${product.allocationСurrency} ${currency['usd']}`}
                    </InvestmentProductSubtitle>
                  </InvestmentProductDescription>
                </InvestmentProductWrapper>
              );
            })}
          </InvestmentProductsGroupWrapper>
        );
      })}
    </>
  );
};

export default InvestmentProductsGroup;
