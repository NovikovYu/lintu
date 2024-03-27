import React, { FC, useEffect, useRef } from 'react';

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
import moment from 'moment';
import { Line } from 'react-chartjs-2';

import { P } from '@/components/CommonComponents/Common-сomponents-style';

import { IDataSetWithSingleLabel, IFinancialResultValueChart } from '../types';

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
  maintainAspectRatio: false,
  aspectRatio: 1,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
      intersect: false,
      callbacks: {
        title: function (tooltipItems) {
          return tooltipItems[0].label || '';
        },
        label: function (context) {
          // Получаем значение точки
          var value = context.formattedValue;
          // Получаем метку набора данных
          var label = context.dataset.label || '';
          return `Value: ${value} USD`;
        },
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
    y: {
      position: 'right',
    },
  },
};

const PERIOD_INTERVAL_FORMATS: Record<string, string> = {
  '1mo': 'Do MMM', // "день" = "27th Feb"
  '3mo': 'WW GGGG', // "неделя" = "39 2024"
  '1y': 'WW GGGG', // "неделя" = "39 2024"
  '2y': 'MMM YY', // "месяц" = "Mar 24"
  '5y': 'MMM YY', // "месяц" = "Mar 24"
};

const FinancialResultValueChart: FC<IFinancialResultValueChart> = ({
  periods,
  data,
  resultsChartsPeriod,
}) => {
  const theme = useTheme();

  if (!data || !periods) return <P>Loading...</P>;

  return (
    <Line
      options={options}
      data={{
        labels: periods.map((period) => {
          return moment(period).format(
            PERIOD_INTERVAL_FORMATS[resultsChartsPeriod],
          );
        }),
        datasets: [
          {
            // label: data,
            data: data,
            borderColor: theme.palette.lightBlue[900],
            fill: true,
            backgroundColor: theme.palette.colorsForLineChart['600'],
            tension: 0.4,
            yAxisID: 'y',
          },
        ],
      }}
    />
  );
};

export default FinancialResultValueChart;
