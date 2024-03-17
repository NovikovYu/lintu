import { useEffect, useState } from 'react';

// import InfoIcon from '@mui/icons-material/Info';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
// import FormHelperText from '@mui/material/FormHelperText';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import {
  portfolioPerformanceChartRequest,
  // signIn
} from '@/actions/actions';
import { P } from '@/components/CommonComponents/Common-сomponents-style';

import {
  ResultsbenchmarkSelectWrapper,
  ResultsBlock,
  ResultsChartsPeriodsWrapper,
  ResultsChartsWrapper,
  ResultsHeader,
  ResultsNetNumber,
  ResultsNumberIconNegative,
  ResultsNumberIconPositive,
  ResultsNumberInner,
  ResultsNumbers,
  ResultsPerformanceTitle,
  ResultsPerformanceTitleWrapper,
  ResultsReturnNumberNegative,
  ResultsReturnNumberPositive,
  ResultsSwitcherButtonLeft,
  ResultsSwitcherButtonRigth,
} from './financial-result-component-styles';
import FinancialResultPerformanceChart from './financial-result-performance-chart';
import FinancialResultValueChart from './financial-result-value-chart';
// import HistoricalReturnsChart from '../historical-returns-chart';
// import { portfolioData } from '../mock-data';
import { IHistoricalReturns } from '../types';

const financialResultsMockData = {
  value: 1000.0,
  arr: 7.5471484068504235,
  portfolio_graph: {
    '2022-04-01T00:00:00': 0.0,
    '2022-05-01T00:00:00': 0.6754718948092542,
    '2022-06-01T00:00:00': -2.012630869162735,
    '2022-07-01T00:00:00': 0.8981410970946735,
  },
  benchmark_graph: {
    '2022-04-01T00:00:00': 0.0,
    '2022-05-01T00:00:00': 0.005317770464463578,
    '2022-06-01T00:00:00': -8.387128490215245,
    '2022-07-01T00:00:00': -0.039694202200302175,
  },
};

type IPortfolioGraph = Record<string, number>;

export interface IFinancialResultData {
  value: number;
  arr: number;
  portfolio_graph: IPortfolioGraph;
  benchmark_graph: IPortfolioGraph;
}

const FinancialResultComponent: React.FC<IHistoricalReturns> = ({
  // totalHistoricalReturns,
  // years,
  // percentageReturn,
  // currencyReturn,
  portfolioId,
}) => {
  // ДАННЫЕ С БЭКА
  // ТИП performance / value
  const [resultsSwitcherState, setResultsSwitcherState] =
    useState('performance');

  // БЭНЧМАРК benchmark: '' | 'S&P 500' | 'NASDAQ Composite' | 'MSCI WORLD'
  const Benchmarks = ['', 'S&P 500', 'NASDAQ Composite', 'MSCI WORLD'];
  const [benchmark, setbenchmark] = useState('');
  const handleChangebenchmark = (event: SelectChangeEvent) => {
    setbenchmark(event.target.value);
  };

  // ПЕРИОД PERIODS = ('1mo', '3mo', '1y', '2y', '5y')
  const ResultsChartsPeriods = ['1mo', '3mo', '1y', '2y', '5y'];
  const [resultsChartsPeriod, setResultsChartsPeriod] = useState('1mo');

  // LOADING
  const [dataToDispaly, setDataToDispaly] =
    useState<IFinancialResultData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const requestBody = {
        portfolio: portfolioId,
        dataType: resultsSwitcherState,
        period: resultsChartsPeriod,
        benchmark,
      };

      console.log('requestBody', requestBody);

      const response = await portfolioPerformanceChartRequest(
        requestBody,
        setIsLoading,
      );

      console.log('response', response);

      if (response) {
        setDataToDispaly(response);
      } else {
        setDataToDispaly(financialResultsMockData);
      }
    };

    fetchData();
  }, [portfolioId, resultsSwitcherState, resultsChartsPeriod, benchmark]);

  return (
    <ResultsBlock>
      <ResultsPerformanceTitleWrapper>
        <ResultsPerformanceTitle>Portfolio Performance</ResultsPerformanceTitle>
      </ResultsPerformanceTitleWrapper>

      <ResultsHeader>
        <ResultsNumbers>
          <div>
            <div>
              <P>Portfolio Value</P>
              <ResultsNetNumber>
                {dataToDispaly ? `${dataToDispaly.value} $` : 'Loading...'}
              </ResultsNetNumber>
            </div>
          </div>

          <div>
            {dataToDispaly && (
              <ResultsNumberInner>
                {dataToDispaly.arr > 0 ? (
                  <ResultsNumberIconPositive />
                ) : (
                  <ResultsNumberIconNegative />
                )}

                <div>
                  <P>Rate of Return</P>

                  {dataToDispaly.arr > 0 ? (
                    <ResultsReturnNumberPositive>
                      {dataToDispaly.arr}
                    </ResultsReturnNumberPositive>
                  ) : (
                    <ResultsReturnNumberNegative>
                      {dataToDispaly.arr}
                    </ResultsReturnNumberNegative>
                  )}
                </div>
              </ResultsNumberInner>
            )}
          </div>
        </ResultsNumbers>

        <div>
          <ResultsSwitcherButtonLeft
            variant={
              resultsSwitcherState === 'value' ? 'contained' : 'outlined'
            }
            onClick={() => setResultsSwitcherState('value')}
          >
            Value
          </ResultsSwitcherButtonLeft>
          <ResultsSwitcherButtonRigth
            variant={
              resultsSwitcherState === 'performance' ? 'contained' : 'outlined'
            }
            onClick={() => setResultsSwitcherState('performance')}
          >
            Performance
          </ResultsSwitcherButtonRigth>
        </div>
      </ResultsHeader>

      {resultsSwitcherState === 'performance' && (
        <ResultsbenchmarkSelectWrapper>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select
              value={benchmark}
              onChange={handleChangebenchmark}
              displayEmpty
            >
              {Benchmarks.map((benchmarkName) => {
                return (
                  <MenuItem value={benchmarkName} key={benchmarkName}>
                    {benchmarkName ? benchmarkName : 'No benchmark'}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </ResultsbenchmarkSelectWrapper>
      )}

      <ResultsChartsWrapper>
        {resultsSwitcherState === 'value' && dataToDispaly && (
          <FinancialResultValueChart
            periods={Object.keys(dataToDispaly.portfolio_graph)}
            data={Object.values(dataToDispaly.portfolio_graph)}
          />
        )}

        {resultsSwitcherState === 'performance' && dataToDispaly && (
          <FinancialResultPerformanceChart
            periods={Object.keys(dataToDispaly.portfolio_graph)}
            data={Object.values(dataToDispaly.portfolio_graph)}
            benchmarkValues={
              benchmark
                ? Object.values(dataToDispaly.benchmark_graph)
                : undefined
            }
          />
        )}
      </ResultsChartsWrapper>

      <ResultsChartsPeriodsWrapper>
        {ResultsChartsPeriods.map((period) => {
          return (
            <Button
              variant={resultsChartsPeriod === period ? 'outlined' : 'text'}
              onClick={() => setResultsChartsPeriod(period)}
              key={period}
              size={'small'}
            >
              {period}
            </Button>
          );
        })}
      </ResultsChartsPeriodsWrapper>
    </ResultsBlock>
  );
};

export default FinancialResultComponent;
