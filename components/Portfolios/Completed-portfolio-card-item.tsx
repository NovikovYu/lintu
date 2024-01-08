import { FC } from 'react';

import {
  PortfolioCardItem,
  PortfolioCardNumbersWrapper,
  PortfolioCardNumbersColumnLeft,
  PortfolioCardTitle,
  PortfolioCardNumbersColumnRight,
  PortfolioCardAssentTitle,
  PortfolioNoSuccedCardAssentTitle,
  SecondaryButtonForPortfolioCard,
} from './Portfolios-style';
import { P } from '../CommonComponents/Common-сomponents-style';

interface IProps {
  currency: string;
  amount: number;
  number: number;
  profitability: number;
  link: string;
}

const CompletedPortfolioCardItem: FC<IProps> = ({
  currency,
  amount,
  number,
  profitability,
  link,
}) => {
  return (
    <PortfolioCardItem>
      <PortfolioCardNumbersWrapper>
        <PortfolioCardNumbersColumnLeft>
          <PortfolioCardTitle>
            {currency} {amount}
          </PortfolioCardTitle>
          <P variant="h2">Portfolio {number}</P>
        </PortfolioCardNumbersColumnLeft>

        <PortfolioCardNumbersColumnRight>
          {profitability > 0 ? (
            <PortfolioCardAssentTitle>
              +{profitability}%
            </PortfolioCardAssentTitle>
          ) : (
            <PortfolioNoSuccedCardAssentTitle>
              {profitability}%
            </PortfolioNoSuccedCardAssentTitle>
          )}
          <P>per 1 year</P>
        </PortfolioCardNumbersColumnRight>
      </PortfolioCardNumbersWrapper>

      <SecondaryButtonForPortfolioCard
        type="button"
        fullWidth
        size="small"
        variant="contained"
        href={link}
      >
        details
      </SecondaryButtonForPortfolioCard>
    </PortfolioCardItem>
  );
};

export default CompletedPortfolioCardItem;
