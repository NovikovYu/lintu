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

import { IProductGroup } from './types';

ChartJS.register(ArcElement, Tooltip, Legend);

interface IPortfolioCompositionChart {
  productGroups: IProductGroup[];
}

const PortfolioCompositionChart: FC<IPortfolioCompositionChart> = ({
  productGroups,
}) => {
  const theme = useTheme();
  const labels = productGroups.map((group) => group.productGroupLabel);
  // now in mock data the weight of the group is stored as a share (“0.4”) of the portfolio, and in the chart description we display the percentage of the portfolio (multiply the share by 100)
  const values = productGroups.map((group) => group.weight * 100);

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
            backgroundColor: Object.values(theme.palette.colorsForDonutChart),
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
