// import { group } from 'console';

import React, { FC, SyntheticEvent, useEffect, useState } from 'react';

// import {
//   TableContainer,
//   Paper,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
// } from '@mui/material';
// import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
// import Tab from '@mui/material/Tab';
// import Tabs from '@mui/material/Tabs';
// import type { ChartOptions } from 'chart.js';
// import { Bar } from 'react-chartjs-2';

import { portfolioOverallInfoRequest } from '@/actions/actions';
import {
  P,
  // StyledLink,
} from '@/components/CommonComponents/Common-сomponents-style';
// import CustomTabPanel from '@/feature/CustomTabPanel/CustomTabPanel';
// import getTabAccessibilityProps from '@/feature/CustomTabPanel/getTabAccessibilityProps';

// import {
//   ActiveGroupIcon,
//   ActiveGroupTableCell,
//   BarChartsWrapper,
//   ExposuresDescriptionText,
//   HolingName,
// } from './exposures-block-style';
// import { ACTIVE_GROUPS_COLORS } from '../constants';
import LevelOfRiskinessSlider from '../level-of-riskiness-slider';
// import { portfolioData } from '../mock-data';
import {
  PortfolioRightBlock,
  PortfolioBlockTitle,
  PortfolioRiskBlockScale,
  PortfolioRiskBlockScaleItem,
} from '../portfolio-page-styles';
import { IExposures } from '../types';

export interface IPortfolioOverallInfo {
  'Risk tolerance': string;
  'Investment Goals': string;
  'Investment Strategy': string;
}

const RISK_TOLERANCE: Record<string, number> = {
  Conservative: 1,
  'Conservative to moderate': 2,
  Moderate: 3,
  'Moderate to aggressive': 4,
  Aggressive: 5,
};

const portfolioOverallInfoMockData = {
  'Risk tolerance': 'Aggressive',
  'Investment Goals': 'Retirement planning, Wealth accumulation',
  'Investment Strategy':
    'Lintu classified funds as moderate are subject to a moderate degree of fluctuation in share prices. In general, such funds may be appropriate for investors who have a relatively long-term investment horizon (more than 5 years).',
};

const LevelOfRiskBlock: FC<IExposures> = ({ portfolioId }) => {
  const theme = useTheme();

  // LOADING
  const [dataToDispaly, setDataToDispaly] =
    useState<IPortfolioOverallInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const requestBody = {
        portfolio: portfolioId,
      };

      console.log('requestBody', requestBody);

      const response: IPortfolioOverallInfo | undefined =
        await portfolioOverallInfoRequest(requestBody, setIsLoading);

      console.log('response', response);

      if (response && response['Risk tolerance']) {
        setDataToDispaly(response);
      } else {
        setDataToDispaly(portfolioOverallInfoMockData);
      }
    };

    fetchData();
  }, []);

  const riskTolerance = dataToDispaly && dataToDispaly['Risk tolerance'];
  return (
    <PortfolioRightBlock>
      <PortfolioBlockTitle variant="h2">
        The level of riskiness of the portfolio NEW
      </PortfolioBlockTitle>

      <P>
        If you do not agree with the evaluation result, you can take the
        questionnaire again
      </P>

      <div>
        <PortfolioRiskBlockScale>
          <PortfolioRiskBlockScaleItem>
            conservative
          </PortfolioRiskBlockScaleItem>
          <PortfolioRiskBlockScaleItem>moderate</PortfolioRiskBlockScaleItem>
          <PortfolioRiskBlockScaleItem>aggressive</PortfolioRiskBlockScaleItem>
        </PortfolioRiskBlockScale>

        {isLoading && 'Loading...'}
        {riskTolerance && (
          <LevelOfRiskinessSlider
            levelOfRisk={RISK_TOLERANCE[riskTolerance] || 2}
          />
        )}
      </div>
    </PortfolioRightBlock>
  );
};

export default LevelOfRiskBlock;
