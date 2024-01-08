import * as React from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import HistoricalReturnsChart from './historical-returns-chart';
import {
  PortfolioRightBlock,
  HistoricalReturnsTopWrapper,
  HistoricalReturnsTitleWrapper,
  PortfolioBlockTitle,
  PortfolioBlockTitleAccent,
} from './portfolio-page-styles';
import { IHistoricalReturns } from './types';
import CustomTabPanel from '../../feature/CustomTabPanel/CustomTabPanel';
import getTabAccessibilityProps from '../../feature/CustomTabPanel/getTabAccessibilityProps';
import { P } from '../CommonComponents/Common-сomponents-style';

const HistoricalReturnsBox: React.FC<IHistoricalReturns> = ({
  totalHistoricalReturns,
  years,
  percentageReturn,
  currencyReturn,
}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <PortfolioRightBlock>
      <HistoricalReturnsTopWrapper>
        <HistoricalReturnsTitleWrapper>
          <PortfolioBlockTitle variant="h2">
            Historical returns
          </PortfolioBlockTitle>

          <PortfolioBlockTitleAccent>
            + {totalHistoricalReturns} %
          </PortfolioBlockTitleAccent>
        </HistoricalReturnsTitleWrapper>

        <P>Showing your portfolio returns over the past 10 years</P>
      </HistoricalReturnsTopWrapper>

      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Charts with percentage return and currency return"
          >
            <Tab
              label="return %"
              {...getTabAccessibilityProps(0, 'historical-returns')}
            />
            <Tab
              label="return $"
              {...getTabAccessibilityProps(1, 'historical-returns')}
            />
          </Tabs>
        </Box>
        <CustomTabPanel
          value={value}
          index={0}
          tabsGroupName={'historical-returns'}
        >
          <HistoricalReturnsChart
            years={years}
            percentageReturn={percentageReturn}
          />
        </CustomTabPanel>
        <CustomTabPanel
          value={value}
          index={1}
          tabsGroupName={'historical-returns'}
        >
          <HistoricalReturnsChart
            years={years}
            currencyReturn={currencyReturn}
          />
        </CustomTabPanel>
      </Box>
    </PortfolioRightBlock>
  );
};

export default HistoricalReturnsBox;
