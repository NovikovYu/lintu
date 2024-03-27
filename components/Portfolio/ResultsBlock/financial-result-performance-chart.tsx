import React, { FC } from 'react';

import { useTheme } from '@mui/material';
import { blue } from '@mui/material/colors';
import moment from 'moment';
import { Line } from 'react-chartjs-2';

import { P } from '@/components/CommonComponents/Common-сomponents-style';

import { IFinancialResultPerformanceChart } from '../types';

const PERIOD_INTERVAL_FORMATS: Record<string, string> = {
  '1mo': 'Do MMM', // "день" = "27th Feb"
  '3mo': 'WW GGGG', // "неделя" = "39 2024"
  '1y': 'WW GGGG', // "неделя" = "39 2024"
  '2y': 'MMM YY', // "месяц" = "Mar 24"
  '5y': 'MMM YY', // "месяц" = "Mar 24"
};

const FinancialResultPerformanceChart: FC<IFinancialResultPerformanceChart> = ({
  periods,
  data,
  benchmarkValues,
  resultsChartsPeriod,
}) => {
  const theme = useTheme();

  if (!data || !periods) return <P>Loading...</P>;

  // Функция для создания цветового градиента в зависимости от положения
  const createGradient = (ctx: CanvasRenderingContext2D) => {
    // @ts-ignore
    const chart = ctx.chart;
    const { ctx: chartCtx, chartArea } = chart;

    if (!chartArea) return null;

    const yScale = chart.scales['y-axis-0'];
    const yPos = yScale.getPixelForValue(0);

    const gradientFill = chartCtx.createLinearGradient(0, 0, 0, chart.height);
    gradientFill.addColorStop(0, 'rgba(0, 163, 0, 0.5)');
    gradientFill.addColorStop(
      yPos / chart.height - 0.01,
      'rgba(0, 163, 0, 0.5)',
    );
    gradientFill.addColorStop(
      yPos / chart.height + 0.01,
      'rgba(255, 0, 0, 0.5)',
    );
    gradientFill.addColorStop(1, 'rgba(255, 0, 0, 0.5)');

    return gradientFill;
  };

  const options = {
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
          // @ts-ignore
          title: function (tooltipItems) {
            return tooltipItems[0].label || '';
          },
          // @ts-ignore
          label: function (context) {
            var value = context.formattedValue;
            var label = context.dataset.label || '';
            return `Performance: ${value}%`;
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
        ticks: {
          callback: (value: number, index: number, values: any) => {
            // Форматирование меток оси X
            return moment(periods[value]).format(
              PERIOD_INTERVAL_FORMATS[resultsChartsPeriod],
            );
          },
        },
      },
      y: {
        position: 'right',
        ticks: {
          // Форматирование меток оси Y в проценты
          // @ts-ignore
          callback: function (value) {
            return `${value}%`;
          },
        },
      },
    },
  };

  // Преобразование данных для графика
  const chartData = {
    labels: periods.map((period) =>
      moment(period).format(PERIOD_INTERVAL_FORMATS[resultsChartsPeriod]),
    ),
    datasets: [
      {
        label: data,
        data: data,
        borderColor: 'gray',
        fill: {
          target: 'origin',
          above: 'rgba(0, 163, 0, 0.5)',
          below: 'rgba(255, 0, 0, 0.5)',
          gradient: createGradient,
        },
        tension: 0.4,
        yAxisID: 'y',
      },
    ],
  };

  if (benchmarkValues) {
    const benchmarkData = {
      label: benchmarkValues,
      data: benchmarkValues,
      borderColor: blue['800'],
      tension: 0.4,
      yAxisID: 'y',
    };

    const datasets = chartData.datasets;
    // @ts-ignore
    datasets.push(benchmarkData);
  }

  // @ts-ignore
  return <Line data={chartData} options={options} />;
};

export default FinancialResultPerformanceChart;
