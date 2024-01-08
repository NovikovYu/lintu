import React, { FC } from 'react';

import { useTheme } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import type { ChartOptions } from 'chart.js';
import { Line } from 'react-chartjs-2';

import { IDataSetWithSingleLabel, IHistoricalReturnsChart } from './types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

export const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        boxHeight: 0,
      },
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },

  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const HistoricalReturnsChart: FC<IHistoricalReturnsChart> = ({
  years,
  percentageReturn,
  currencyReturn,
}) => {
  const theme = useTheme();
  const dataSet = percentageReturn ?? currencyReturn;

  if (!dataSet) return null;

  return (
    <Line
      options={options}
      data={{
        labels: years,
        datasets: dataSet.map(
          (dataSet: IDataSetWithSingleLabel, i: number) => ({
            label: dataSet.label,
            data: dataSet.values,
            borderColor: Object.values(theme.palette.colorsForLineChart)[
              i
            ] as string,
            yAxisID: 'y',
          }),
        ),
      }}
    />
  );
};

export default HistoricalReturnsChart;
