import { group } from 'console';

import React, { FC, SyntheticEvent, useEffect, useState } from 'react';

import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  useMediaQuery,
} from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import type { ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

import { exposuresChartRequest } from '@/actions/actions';
import { P } from '@/components/CommonComponents/Common-сomponents-style';
import CustomTabPanel from '@/feature/CustomTabPanel/CustomTabPanel';
import getTabAccessibilityProps from '@/feature/CustomTabPanel/getTabAccessibilityProps';
import { selectAccessKey } from '@/store/slices/sessionSlice';

import {
  ActiveGroupIcon,
  ActiveGroupTableCell,
  BarChartsWrapper,
  ExposuresDescriptionText,
  HolingName,
} from './exposures-block-style';
import {
  ACTIVE_GROUPS_COLORS,
  BONDS_COLORS,
  EQUITIES_COLORS,
} from '../constants';
import {
  PortfolioRightBlock,
  PortfolioBlockTitle,
} from '../portfolio-page-styles';
import { IExposures } from '../types';

export interface IEtfAllocation {
  fundName: string;
  ticket: string;
  weight: number;
  dollarsAmount: number;
  numberOfShares: number;
}

export interface IExposuresData {
  etfAllocations: {
    groupName: string;
    groupData: IEtfAllocation[];
  }[];
  sectorExposures: Record<string, number>;
  topHoldings: {
    holdingName: string;
    holdingSector: string;
    weight: number;
  }[];
  creditQuality: Record<string, number>;
}

// const exposuresMockData = {
//   etfAllocations: [
//     {
//       groupName: 'U.S. Stocks',
//       groupData: [
//         {
//           fundName: 'iShares Core S&P 500 ETF',
//           weight: 32.6,
//           dollarsAmount: 110,
//           numberOfShares: 12,
//         },
//         {
//           fundName: 'iShares Core S&P Mid-Cap ETF',
//           weight: 2.1,
//           dollarsAmount: 90,
//           numberOfShares: 5,
//         },
//       ],
//     },
//     {
//       groupName: 'INTERNATIONAL Stocks',
//       groupData: [
//         {
//           fundName: 'iShares Core MSCI International Developed Markets ETF',
//           weight: 32.6,
//           dollarsAmount: 110,
//           numberOfShares: 12,
//         },
//         {
//           fundName: 'iShares Core MSCI Emerging Markets ETF',
//           weight: 2.1,
//           dollarsAmount: 90,
//           numberOfShares: 5,
//         },
//       ],
//     },
//   ],
//   sectorExposures: {
//     treasury: 0.2,
//     technology: 0.11,
//     financial: 0.69,
//     treasury1: 0.2,
//     technology1: 0.11,
//     financial1: 0.69,
//     treasury2: 0.2,
//     technology2: 0.11,
//     financial2: 0.69,
//     financial3: 0.69,
//   },
//   topHoldings: [
//     {
//       holdingName: 'TRESURY NoTe',
//       holdingSector: 'Tresury',
//       weight: 8.99,
//     },
//     {
//       holdingName: 'miCrosoft corp',
//       holdingSector: 'Information technology',
//       weight: 32.6,
//     },
//   ],
//   creditQuality: {
//     'AAA Rated': 0.2,
//     'AA Rated': 0.11,
//     'A Rated': 0.69,
//   },
// };

export interface Asset {
  asset: string;
  ticket: string;
  allocation: number;
  money: number;
  numberofshares: number;
}

export interface Exposures {
  asset_class?: string;
  assets?: Asset[];
  sectors?: { [sector: string]: number };
  holdings?: { [holding: string]: number };
  ratings?: { [rating: string]: number };
}

const exposuresMockData2: Exposures[] = [
  {
    asset_class: 'Equity',
    assets: [
      {
        asset: 'Vanguard S&P 500 ETF',
        ticket: 'VOO-',
        allocation: 0.2,
        money: 200.0,
        numberofshares: 0.42,
      },
      {
        asset: 'Vanguard Total World Stock Inde',
        ticket: 'VT',
        allocation: 0.05,
        money: 50.0,
        numberofshares: 0.46,
      },
    ],
  },
  {
    asset_class: 'Bonds',
    assets: [
      {
        asset: 'Vanguard Short-Term Bond ETF',
        ticket: 'BSV',
        allocation: 0.55,
        money: 550.0,
        numberofshares: 7.2,
      },
      {
        asset: 'iShares Core U.S. Aggregate Bon',
        ticket: 'AGG',
        allocation: 0.2,
        money: 200.0,
        numberofshares: 2.06,
      },
    ],
  },
  {
    sectors: {
      'Basic Materials': 0.64,
      'Consumer Cyclical': 2.7,
      'Financial Services': 3.28,
      'Real Estate': 0.61,
      'Consumer Defensive': 1.5,
      Healthcare: 3.08,
      Utilities: 0.55,
      'Communication Services': 2.14,
      Energy: 0.97,
      Industrials: 2.2,
      Technology: 7.33,
    },
  },
  {
    holdings: {
      'Microsoft Corp': 1.63,
      'Apple Inc': 1.41,
      'NVIDIA Corp': 1.01,
      'Amazon.com Inc': 0.84,
      'Meta Platforms Inc Class A': 0.56,
      'Alphabet Inc Class A': 0.44,
      'Alphabet Inc Class C': 0.39,
      'Berkshire Hathaway Inc Class B': 0.36,
      'Eli Lilly and Co': 0.32,
      'Broadcom Inc': 0.27,
      'Tesla Inc': 0.03,
    },
  },
  {
    ratings: {
      'US Government': 37.13,
      AAA: 2.75,
      AA: 15.76,
      A: 9.77,
      BBB: 9.47,
      'Not rated': 0.0,
      Cash: 0.14,
    },
  },
];

export const sectorExposuresOptions: ChartOptions<'bar'> = {
  indexAxis: 'y' as const,
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    bar: {
      borderWidth: 0,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: '% of Market Value',
    },
  },
  scales: {
    y: {
      ticks: {
        autoSkip: false,
      },
    },
    x: {
      ticks: {
        callback: function (value, index, values) {
          return value + '%';
        },
      },
    },
  },
};

export const creditQualityOptions: ChartOptions<'bar'> = {
  indexAxis: 'y' as const,
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: '% of Fixed Income Market Value',
    },
  },
  scales: {
    y: {
      ticks: {
        autoSkip: false,
      },
    },
    x: {
      ticks: {
        callback: function (value, index, values) {
          return value + '%';
        },
      },
    },
  },
};

const ExposuresBlock: FC<IExposures> = ({ portfolioId }) => {
  const theme = useTheme();
  const accessKey = useSelector(selectAccessKey);

  // tabs switching
  const [tabsValue, setTabsValue] = useState(0);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setTabsValue(newValue);
  };

  // LOADING
  // const [dataToDispaly, setDataToDispaly] = useState<IExposuresData | null>(
  const [dataToDispaly, setDataToDispaly] = useState<Exposures[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const requestBody = {
        portfolio: portfolioId,
      };

      console.log('requestBody', requestBody);

      // const response: IExposuresData | undefined = await exposuresChartRequest(
      const response: Exposures[] | undefined = await exposuresChartRequest(
        accessKey,
        requestBody,
        setIsLoading,
      );

      // console.log('response', response);

      // if (response?.etfAllocations) {
      if (response) {
        setDataToDispaly(response);
      } else {
        // @ts-ignore
        setDataToDispaly(exposuresMockData2);
      }
    };

    if (accessKey) {
      fetchData();
    }
  }, [accessKey, portfolioId]);

  const matchesDesctop = useMediaQuery(
    `(min-width: ${theme.breakpoints.values.containersMd}px)`,
  );

  // @ts-ignore
  let assetGroups2;
  if (dataToDispaly) {
    assetGroups2 = dataToDispaly.filter((someObg) => someObg.asset_class);
  }

  // @ts-ignore
  let sectors2;
  if (dataToDispaly) {
    sectors2 = dataToDispaly.filter((someObg) => someObg.sectors);
  }

  // @ts-ignore
  let holdings2;
  if (dataToDispaly) {
    holdings2 = dataToDispaly.filter((someObg) => someObg.holdings);
  }

  let ratings2;
  if (dataToDispaly) {
    ratings2 = dataToDispaly.filter((someObg) => someObg.ratings);
  }
  // console.log('222 ratings2 >>', ratings2);
  return (
    <PortfolioRightBlock>
      <PortfolioBlockTitle variant="h2">Exposures</PortfolioBlockTitle>

      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={tabsValue}
            onChange={handleChange}
            aria-label="Exposures of portfolio"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab
              label="ETF ALLOCATIONS"
              {...getTabAccessibilityProps(0, 'exposures')}
            />
            <Tab
              label="SECTOR EXPOSURES"
              {...getTabAccessibilityProps(1, 'exposures')}
            />
            <Tab
              label="TOP 10 HOLDINGS"
              {...getTabAccessibilityProps(2, 'exposures')}
            />
            <Tab
              label="CREDIT QUALITY"
              {...getTabAccessibilityProps(3, 'exposures')}
            />
          </Tabs>
        </Box>
        {/* ETF ALLOCATIONS */}
        <CustomTabPanel value={tabsValue} index={0} tabsGroupName={'exposures'}>
          <ExposuresDescriptionText>
            The total expense ratio for the hypothetical portfolio is the
            weighted average expense ratio. The weighted average expense ratio
            is based on the proportional size of each fund’s position in the
            sample, aggregated with all funds in the sample. the net expense
            ratio is used for funds with fee waiver.
          </ExposuresDescriptionText>

          {isLoading && 'Loading...'}
          {assetGroups2 && (
            // <TableWrapper>
            <TableContainer component={Paper}>
              <Table
                aria-label="simple table"
                size={!matchesDesctop ? 'small' : 'medium'}
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Fund Name</TableCell>
                    <TableCell align="right">Weight&nbsp;(%)</TableCell>
                    <TableCell align="right">Dollars amount</TableCell>
                    <TableCell align="right">Number of Shares</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {dataToDispaly.etfAllocations.map((group) => (
                    <>
                      <TableRow
                        key={group.groupName}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <ActiveGroupTableCell
                          colSpan={2}
                          component="th"
                          scope="row"
                        >
                          <ActiveGroupIcon
                            // @ts-ignore
                            backgroundColor={
                              ACTIVE_GROUPS_COLORS[group.groupName]
                            }
                          />
                          {group.groupName}
                        </ActiveGroupTableCell>
                      </TableRow>

                      {group.groupData.map((groupItem) => (
                        <TableRow
                          key={groupItem.fundName}
                          sx={{
                            '&:last-child td, &:last-child th': { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {groupItem.fundName}
                          </TableCell>
                          <TableCell align="right">
                            {groupItem.weight}
                          </TableCell>
                          <TableCell align="right">
                            {groupItem.dollarsAmount}
                          </TableCell>
                          <TableCell align="right">
                            {groupItem.numberOfShares}
                          </TableCell>
                        </TableRow>
                      ))}
                    </>
                  ))} */}
                  {assetGroups2.map((group) => (
                    <>
                      <TableRow
                        key={group.asset_class}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <ActiveGroupTableCell
                          colSpan={2}
                          component="th"
                          scope="row"
                        >
                          {/* <ActiveGroupIcon
                            backgroundColor={
                              ACTIVE_GROUPS_COLORS[group.groupName] ?? 'red'
                            }
                          /> */}
                          <ActiveGroupIcon
                            // @ts-ignore
                            backgroundColor={
                              group.asset_class === 'Equity'
                                ? EQUITIES_COLORS[0]
                                : BONDS_COLORS[0]
                            }
                          />
                          {group.asset_class}
                        </ActiveGroupTableCell>
                      </TableRow>

                      {/* @ts-ignore */}
                      {group.assets.map((assetItem) => (
                        <TableRow
                          key={assetItem.asset}
                          sx={{
                            '&:last-child td, &:last-child th': { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {assetItem.asset}
                          </TableCell>
                          <TableCell align="right">
                            {assetItem.allocation}
                          </TableCell>
                          <TableCell align="right">
                            {assetItem.money.toFixed(2)}
                          </TableCell>
                          <TableCell align="right">
                            {assetItem.numberofshares}
                          </TableCell>
                        </TableRow>
                      ))}
                    </>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            // </TableWrapper>
          )}
        </CustomTabPanel>
        {/* SECTOR EXPOSURES */}
        {/* <CustomTabPanel value={tabsValue} index={1} tabsGroupName={'exposures'}>
          <ExposuresDescriptionText>
            The total expense ratio for the hypothetical portfolio is the
            weighted average expense ratio. The weighted average expense ratio
            is based on the proportional size of each fund’s position in the
            sample, aggregated with all funds in the sample. the net expense
            ratio is used for funds with fee waiver.
          </ExposuresDescriptionText>

          {isLoading && 'Loading...'}
          {dataToDispaly?.sectorExposures && (
            <BarChartsWrapper>
              <Bar
                options={sectorExposuresOptions}
                data={{
                  labels: Object.keys(dataToDispaly.sectorExposures),
                  datasets: [
                    {
                      data: Object.values(dataToDispaly.sectorExposures).map(
                        (value: number) => value * 100,
                      ),
                      backgroundColor: '#0C6748',
                    },
                  ],
                }}
              />
            </BarChartsWrapper>
          )}
        </CustomTabPanel> */}
        <CustomTabPanel value={tabsValue} index={1} tabsGroupName={'exposures'}>
          <ExposuresDescriptionText>
            The total expense ratio for the hypothetical portfolio is the
            weighted average expense ratio. The weighted average expense ratio
            is based on the proportional size of each fund’s position in the
            sample, aggregated with all funds in the sample. the net expense
            ratio is used for funds with fee waiver.
          </ExposuresDescriptionText>

          {isLoading && 'Loading...'}
          {sectors2 && sectors2[0] && (
            <BarChartsWrapper>
              <Bar
                options={sectorExposuresOptions}
                data={{
                  // @ts-ignore
                  labels: Object.keys(sectors2[0].sectors),
                  datasets: [
                    {
                      // @ts-ignore
                      data: Object.values(sectors2[0].sectors).map(
                        (value: number) => value,
                      ),
                      backgroundColor: '#0C6748',
                    },
                  ],
                }}
              />
            </BarChartsWrapper>
          )}
        </CustomTabPanel>
        {/* TOP 10 HOLDINGS */}
        {/* <CustomTabPanel value={tabsValue} index={2} tabsGroupName={'exposures'}>
          <ExposuresDescriptionText>
            The total expense ratio for the hypothetical portfolio is the
            weighted average expense ratio. The weighted average expense ratio
            is based on the proportional size of each fund’s position in the
            sample, aggregated with all funds in the sample. the net expense
            ratio is used for funds with fee waiver.
          </ExposuresDescriptionText>

          {isLoading && 'Loading...'}
          {dataToDispaly?.topHoldings && (
            <TableContainer component={Paper}>
              <Table
                aria-label="simple table"
                size={!matchesDesctop ? 'small' : 'medium'}
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Sector</TableCell>
                    <TableCell align="right">Weight&nbsp;(%)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataToDispaly.topHoldings.map((holder) => (
                    <TableRow
                      key={holder.holdingName}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <HolingName component="th" scope="row">
                        {holder.holdingName}
                      </HolingName>
                      <TableCell align="right">
                        {holder.holdingSector}
                      </TableCell>
                      <TableCell align="right">{holder.weight}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </CustomTabPanel> */}
        <CustomTabPanel value={tabsValue} index={2} tabsGroupName={'exposures'}>
          <ExposuresDescriptionText>
            The total expense ratio for the hypothetical portfolio is the
            weighted average expense ratio. The weighted average expense ratio
            is based on the proportional size of each fund’s position in the
            sample, aggregated with all funds in the sample. the net expense
            ratio is used for funds with fee waiver.
          </ExposuresDescriptionText>

          {isLoading && 'Loading...'}
          {holdings2 && holdings2[0] && (
            <TableContainer component={Paper}>
              <Table
                aria-label="simple table"
                size={!matchesDesctop ? 'small' : 'medium'}
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Weight&nbsp;(%)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* @ts-ignore */}
                  {Object.keys(holdings2[0].holdings).map((holdingName) => (
                    <TableRow
                      key={holdingName}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <HolingName component="th" scope="row">
                        {holdingName}
                      </HolingName>
                      <TableCell align="right">
                        {/* @ts-ignore */}
                        {holdings2[0].holdings[holdingName]}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </CustomTabPanel>
        {/* CREDIT QUALITY */}
        {/* <CustomTabPanel value={tabsValue} index={3} tabsGroupName={'exposures'}>
          <ExposuresDescriptionText>
            The total expense ratio for the hypothetical portfolio is the
            weighted average expense ratio. The weighted average expense ratio
            is based on the proportional size of each fund’s position in the
            sample, aggregated with all funds in the sample. the net expense
            ratio is used for funds with fee waiver.
          </ExposuresDescriptionText>

          {isLoading && 'Loading...'}
          {dataToDispaly?.creditQuality && (
            <BarChartsWrapper>
              <Bar
                options={creditQualityOptions}
                data={{
                  labels: Object.keys(dataToDispaly.creditQuality),
                  datasets: [
                    {
                      data: Object.values(dataToDispaly.creditQuality).map(
                        (value: number) => value * 100,
                      ),
                      backgroundColor: '#0C6748',
                    },
                  ],
                }}
              />
            </BarChartsWrapper>
          )}
        </CustomTabPanel> */}
        <CustomTabPanel value={tabsValue} index={3} tabsGroupName={'exposures'}>
          <ExposuresDescriptionText>
            The total expense ratio for the hypothetical portfolio is the
            weighted average expense ratio. The weighted average expense ratio
            is based on the proportional size of each fund’s position in the
            sample, aggregated with all funds in the sample. the net expense
            ratio is used for funds with fee waiver.
          </ExposuresDescriptionText>

          {isLoading && 'Loading...'}
          {ratings2 && ratings2[0] && (
            <BarChartsWrapper>
              <Bar
                options={creditQualityOptions}
                data={{
                  // @ts-ignore
                  labels: Object.keys(ratings2[0].ratings),
                  datasets: [
                    {
                      // @ts-ignore
                      data: Object.values(ratings2[0].ratings).map(
                        (value: number) => value,
                      ),
                      backgroundColor: '#0C6748',
                    },
                  ],
                }}
              />
            </BarChartsWrapper>
          )}
        </CustomTabPanel>
      </Box>
    </PortfolioRightBlock>
  );
};

export default ExposuresBlock;
