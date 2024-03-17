import React, { FC } from 'react';

import { useTheme } from '@mui/material';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartEvent,
  ActiveElement,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { EMPTY_STRING_FN, NOOP } from '@/feature/constants';

import { ACTIVE_GROUPS_COLORS } from '../constants';
import { IEtfAllocation } from '../ExposuresBlock/exposures-block';
// import { IProductGroup } from '../types';

ChartJS.register(ArcElement, Tooltip, Legend);

interface IPortfolioCompositionChart {
  // productGroups: IProductGroup[];
  etfAllocations: {
    groupName: string;
    groupData: IEtfAllocation[];
  }[];
}

const PortfolioCompositionChart: FC<IPortfolioCompositionChart> = ({
  // productGroups,
  etfAllocations,
}) => {
  const theme = useTheme();
  // const labels = productGroups.map((group) => group.productGroupLabel);
  // // now in mock data the weight of the group is stored as a share (“0.4”) of the portfolio, and in the chart description we display the percentage of the portfolio (multiply the share by 100)
  // const values = productGroups.map((group) => group.weight * 100);

  // groupName: 'U.S. Stocks',
  // groupData: [
  //   {
  //     fundName: 'iShares Core S&P 500 ETF',
  //     weight: 32.6,
  //     dollarsAmount: 110,
  //     numberOfShares: 12,
  //   },
  const labels = etfAllocations.map((group) => group.groupName);
  // now in mock data the weight of the group is stored as a share (“0.4”) of the portfolio, and in the chart description we display the percentage of the portfolio (multiply the share by 100)
  const values = etfAllocations.map((group) =>
    group.groupData.reduce(
      (accumulator, currentValue) => accumulator + currentValue.weight,
      0,
    ),
  );

  const handleLabelClick = () => {
    const url = 'https://ru.wikipedia.org/wiki/URL';
    window.open(url, '_blank');
  };

  const handleChartClick = (event: ChartEvent, elements: ActiveElement[]) => {
    if (elements.length > 0) {
      handleLabelClick();
    }
  };

  return (
    <Doughnut
      data={{
        labels: labels.map((label, i) => `${values[i]}% ${label}`),
        datasets: [
          {
            label: '% of portfolio',
            data: values,
            // backgroundColor: Object.values(theme.palette.colorsForDonutChart),
            backgroundColor: labels.map(
              (label) => ACTIVE_GROUPS_COLORS[label] || 'black',
            ),
          },
        ],
      }}
      options={{
        cutout: '20%',
        plugins: {
          legend: {
            position: 'bottom',
            // the callback below cancels the default click behavior (excluding sectors from the chart)
            onClick: NOOP,
          },
          tooltip: {
            displayColors: false,
            // the callback below removes the second line from the tooltip (the tooltip displayed when hovering over the sector)
            callbacks: {
              label: EMPTY_STRING_FN,
            },
          },
        },
        onClick: handleChartClick,
      }}
    />
  );
};

export default PortfolioCompositionChart;
