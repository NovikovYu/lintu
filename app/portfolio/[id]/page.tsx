'use client';
import { useRef, useEffect } from 'react';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Container, Link, useTheme } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
// import Head from 'next/head';
// import link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
// import { number } from 'yup';

import {
  MainBox,
  P,
  PrimaryButton,
  SecondaryButton,
  // StyledLink,
} from '@/components/CommonComponents/Common-сomponents-style';
// import ESGPerformanceChart from '@/components/Portfolio/esg-performance-chart';
import ExposuresBlock from '@/components/Portfolio/ExposuresBlock/exposures-block';
// import HistoricalReturnsBox from '@/components/Portfolio/historical-returns-chart-block';
// import LevelOfRiskinessSlider from '@/components/Portfolio/level-of-riskiness-slider';
import LevelOfRiskBlock from '@/components/Portfolio/LevelOfRickBlock/level-of-rick-block';
// import { portfolioData } from '@/components/Portfolio/mock-data';
import {
  PortfolioActionBlock,
  PortfolioActionBlockButton,
  PortfolioBlockTitle,
  PortfolioContentBlock,
  PortfolioDownloadBtn,
  PortfolioRightBlock,
  PortfolioRiskBlockScale,
  PortfolioRiskBlockScaleItem,
  PortfolioStudyBlockWrapper,
  PortfolioTitle,
  PortfolioTitleWrapper,
  StudyLink,
  PortfolioLeftContentColumn,
  PortfolioAcountAmountBlock,
  PortfolioAcountAmountBlockContent,
  PortfolioRefillBlock,
  PortfolioRefillBlockButtonsWrapper,
  PortfolioRigthContentColumn,
} from '@/components/Portfolio/portfolio-page-styles';
import PortfolioCompositionBlock from '@/components/Portfolio/PortfolioComposition/portfolio-composition-block';
import FinancialResultComponent from '@/components/Portfolio/ResultsBlock/financial-result-component';
import {
  PortfolioCardItem,
  PortfolioCardNumbersWrapper,
  PortfolioCardNumbersColumnLeft,
  PortfolioCardTitle,
  PortfolioCardNumbersColumnRight,
  PortfolioCardAssentTitle,
  PortfolioNoSuccedCardAssentTitle,
} from '@/components/Portfolios/Portfolios-style';
import { selectAccessKey } from '@/store/slices/sessionSlice';

import { SecondaryButtonForPortfolioCard } from '../../settings/settings-style';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

type Props = {
  params: {
    id: string;
  };
};

// export default function Survey({ params: { id } }: Props) {
//   const router = useRouter();
//   const portfolioId = id ?? '';

export default function СPortfolio({ params: { id } }: Props) {
  const pageRef = useRef(null);
  const theme = useTheme();
  const portfolioId = id ?? '';
  const accessKey = useSelector(selectAccessKey);
  const router = useRouter();
  const accessKeyRef = useRef(accessKey);

  useEffect(() => {
    accessKeyRef.current = accessKey;
  }, [accessKey]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!accessKeyRef.current) {
        router.push('/');
      }
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [router]);

  const saveAsPDF = async () => {
    const page = pageRef.current;

    if (page) {
      const canvas = await html2canvas(page);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();

      pdf.addImage(
        imgData,
        'PNG',
        0,
        0,
        pdf.internal.pageSize.getWidth(),
        pdf.internal.pageSize.getHeight(),
      );
      pdf.save('Lintu-Portfolio-Description.pdf');
    }
  };

  const handleClick = () => {
    saveAsPDF();
  };

  // закладка - удалить
  const profitability = 10;

  // закладка - b4
  const handleRefill = (id: string) => {
    console.log('handleRefill', id);
  };

  const handleDelete = (id: string) => {
    console.log('handleRefill', id);
  };

  return (
    <MainBox>
      <Container
        sx={{ maxWidth: theme.breakpoints.values.containersLg }}
        maxWidth={false}
      >
        <PortfolioTitleWrapper>
          <div>
            <PortfolioTitle variant="h1">Portfolio</PortfolioTitle>
            <P>
              Here are all your created portfolios and all the analytics about
              them
            </P>
          </div>

          <PortfolioDownloadBtn
            variant="outlined"
            type="button"
            size="large"
            onClick={handleClick}
            endIcon={<ArrowDownwardIcon />}
          >
            Download in PDF
          </PortfolioDownloadBtn>
        </PortfolioTitleWrapper>

        <PortfolioActionBlock>
          <div>
            <PortfolioBlockTitle variant="h2">
              Your investments
            </PortfolioBlockTitle>

            <P>Fund your account to start your investment journey</P>
          </div>

          <PortfolioActionBlockButton
            type="button"
            size="large"
            variant="contained"
            href={'/buttonLink'}
          >
            Open an account
          </PortfolioActionBlockButton>
        </PortfolioActionBlock>

        {/* bookmark - a2 */}
        {false && (
          <PortfolioAcountAmountBlock>
            <div>
              <PortfolioBlockTitle variant="h2">
                Demo acount
              </PortfolioBlockTitle>

              <P>Refill your account to start investing</P>
            </div>

            <PortfolioCardNumbersColumnRight>
              {profitability > 0 ? (
                <PortfolioCardAssentTitle>
                  {/* +{profitability}% */}$ 10 000
                </PortfolioCardAssentTitle>
              ) : (
                <PortfolioNoSuccedCardAssentTitle>
                  {/* {profitability}% */}$ 10 000
                </PortfolioNoSuccedCardAssentTitle>
              )}
              <P>+ 0% per year</P>
            </PortfolioCardNumbersColumnRight>
          </PortfolioAcountAmountBlock>
        )}

        {/* bookmark - b4 */}
        {false && (
          <PortfolioRefillBlock>
            <PortfolioAcountAmountBlockContent>
              <div>
                <PortfolioBlockTitle variant="h2">
                  Your investments
                </PortfolioBlockTitle>

                <P>Refill your account to start investing</P>
              </div>

              <PortfolioCardNumbersColumnRight>
                {profitability > 0 ? (
                  <PortfolioCardAssentTitle>
                    {/* +{profitability}% */}$ 0
                  </PortfolioCardAssentTitle>
                ) : (
                  <PortfolioNoSuccedCardAssentTitle>
                    {/* {profitability}% */}$ 0
                  </PortfolioNoSuccedCardAssentTitle>
                )}
                <P>+ 0% per year</P>
              </PortfolioCardNumbersColumnRight>
            </PortfolioAcountAmountBlockContent>

            <PortfolioRefillBlockButtonsWrapper>
              <PrimaryButton
                type="button"
                size="medium"
                variant="contained"
                onClick={() => handleRefill('id1')}
              >
                Refill
              </PrimaryButton>
              <SecondaryButton
                type="button"
                size="medium"
                variant="contained"
                onClick={() => handleDelete('id1')}
              >
                Replenishment History
              </SecondaryButton>
            </PortfolioRefillBlockButtonsWrapper>
          </PortfolioRefillBlock>
        )}

        <FinancialResultComponent
          // totalHistoricalReturns={
          //   portfolioData.historicalReturns.totalHistoricalReturns
          // }
          // years={portfolioData.historicalReturns.years}
          // percentageReturn={portfolioData.historicalReturns.percentageReturn}
          // currencyReturn={portfolioData.historicalReturns.currencyReturn}
          portfolioId={portfolioId}
        />

        <PortfolioContentBlock ref={pageRef}>
          <PortfolioLeftContentColumn>
            <PortfolioCompositionBlock
              // productGroups={portfolioData.portfolioComposition.productGroups}
              portfolioId={portfolioId}
            />

            <PortfolioStudyBlockWrapper>
              <PortfolioBlockTitle variant="h2">
                What is an ETF
              </PortfolioBlockTitle>

              <P>An article from our CFO about ETFs and why we use this tool</P>

              <StudyLink href="https://en.wikipedia.org/wiki/Exchange-traded_fund">
                Read article
              </StudyLink>
            </PortfolioStudyBlockWrapper>
          </PortfolioLeftContentColumn>

          <PortfolioRigthContentColumn>
            {/* <HistoricalReturnsBox
              totalHistoricalReturns={
                portfolioData.historicalReturns.totalHistoricalReturns
              }
              years={portfolioData.historicalReturns.years}
              percentageReturn={
                portfolioData.historicalReturns.percentageReturn
              }
              currencyReturn={portfolioData.historicalReturns.currencyReturn}
            /> */}

            <ExposuresBlock
              // exposuresSectors={portfolioData.exposures.exposuresSectors}
              // exposuresTop10Holdings={
              //   portfolioData.exposures.exposuresTop10Holdings
              // }
              // exposuresCreditQuality={
              //   portfolioData.exposures.exposuresCreditQuality
              // }
              portfolioId={portfolioId}
            />

            {/* <ExposuresBlock
              exposuresSectors={portfolioData.exposures.exposuresSectors}
              exposuresTop10Holdings={
                portfolioData.exposures.exposuresTop10Holdings
              }
              exposuresCreditQuality={
                portfolioData.exposures.exposuresCreditQuality
              }
            /> */}

            {/* <PortfolioRightBlock>
              <PortfolioBlockTitle variant="h2">
                ESG performance
              </PortfolioBlockTitle>

              <P>
                <StyledLink>In this article</StyledLink> In this article we tell
                you why this indicator is important for your portfolio
              </P>

              <ESGPerformanceChartWrapper>
                <ESGPerformanceChart
                  labels={portfolioData.esgPerformance.labels}
                  values={portfolioData.esgPerformance.values}
                />
              </ESGPerformanceChartWrapper>
            </PortfolioRightBlock> */}

            <LevelOfRiskBlock portfolioId={portfolioId} />

            {/* <PortfolioEconomicDetailsBlock>
              <div>
                <PortfolioBlockTitle variant="h2">
                  More economic details
                </PortfolioBlockTitle>

                <P>You can read the economic indicators</P>
              </div>

              <PrimaryButton>read</PrimaryButton>
            </PortfolioEconomicDetailsBlock> */}
          </PortfolioRigthContentColumn>
        </PortfolioContentBlock>
      </Container>
    </MainBox>
  );
}
