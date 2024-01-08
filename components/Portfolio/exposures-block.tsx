import React, { FC } from 'react';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import type { ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';

import {
  PortfolioRightBlock,
  PortfolioBlockTitle,
} from './portfolio-page-styles';
import { IExposures } from './types';
import CustomTabPanel from '../../feature/CustomTabPanel/CustomTabPanel';
import getTabAccessibilityProps from '../../feature/CustomTabPanel/getTabAccessibilityProps';

export const options: ChartOptions<'bar'> = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: '% of Market Value',
    },
  },
  scales: {
    y: {
      ticks: {
        autoSkip: false,
      },
    },
  },
};

const ExposuresBlock: FC<IExposures> = ({
  exposuresSectors,
  exposuresTop10Holdings,
  exposuresCreditQuality,
}) => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <PortfolioRightBlock>
      <PortfolioBlockTitle variant="h2">Exposures</PortfolioBlockTitle>

      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Exposures of portfolio"
            scrollButtons="auto"
          >
            <Tab
              label="Sectors"
              {...getTabAccessibilityProps(0, 'exposures')}
            />
            <Tab
              label="Top 10 holdings"
              {...getTabAccessibilityProps(1, 'exposures')}
            />
            <Tab
              label="Credit quality"
              {...getTabAccessibilityProps(2, 'exposures')}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0} tabsGroupName={'exposures'}>
          <Bar
            options={options}
            data={{
              labels: exposuresSectors.labels,
              datasets: [
                {
                  data: exposuresSectors.values.map(
                    (value: number) => value * 100,
                  ),
                  borderColor: Object.values(theme.palette.colorsForBarChart),
                  backgroundColor: Object.values(
                    theme.palette.colorsForBarChart,
                  ),
                },
              ],
            }}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1} tabsGroupName={'exposures'}>
          <Bar
            options={options}
            data={{
              labels: exposuresTop10Holdings.labels,
              datasets: [
                {
                  data: exposuresTop10Holdings.values.map(
                    (value: number) => value * 100,
                  ),
                  borderColor: Object.values(theme.palette.colorsForBarChart),
                  backgroundColor: Object.values(
                    theme.palette.colorsForBarChart,
                  ),
                },
              ],
            }}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2} tabsGroupName={'exposures'}>
          <Bar
            options={options}
            data={{
              labels: exposuresCreditQuality.labels,
              datasets: [
                {
                  data: exposuresCreditQuality.values.map(
                    (value: number) => value * 100,
                  ),
                  borderColor: Object.values(theme.palette.colorsForBarChart),
                  backgroundColor: Object.values(
                    theme.palette.colorsForBarChart,
                  ),
                },
              ],
            }}
          />
        </CustomTabPanel>
      </Box>
    </PortfolioRightBlock>
  );
};

export default ExposuresBlock;
