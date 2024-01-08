'use client';
import { useRef } from 'react';

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
import Head from 'next/head';

import {
  MainBox,
  P,
  PrimaryButton,
  StyledLink,
} from '@/components/CommonComponents/Common-сomponents-style';
import ESGPerformanceChart from '@/components/Portfolio/esg-performance-chart';
import ExposuresBlock from '@/components/Portfolio/exposures-block';
import HistoricalReturnsBox from '@/components/Portfolio/historical-returns-chart-block';
import LevelOfRiskinessSlider from '@/components/Portfolio/level-of-riskiness-slider';
import { portfolioData } from '@/components/Portfolio/mock-data';
import PortfolioCompositionBlock from '@/components/Portfolio/portfolio-composition-block';
import {
  ESGPerformanceChartWrapper,
  PortfolioActionBlock,
  PortfolioActionBlockButton,
  PortfolioBlockTitle,
  PortfolioContentBlock,
  PortfolioDownloadBtn,
  PortfolioEconomicDetailsBlock,
  PortfolioRightBlock,
  PortfolioRiskBlockScale,
  PortfolioRiskBlockScaleItem,
  PortfolioStudyBlockWrapper,
  PortfolioTitle,
  PortfolioTitleWrapper,
  StudyLink,
  PortfolioLeftContentColumn,
} from '@/components/Portfolio/portfolio-page-styles';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export default function СPortfolio() {
  const pageRef = useRef(null);
  const theme = useTheme();

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

        <PortfolioContentBlock ref={pageRef}>
          <PortfolioLeftContentColumn>
            <PortfolioCompositionBlock
              productGroups={portfolioData.portfolioComposition.productGroups}
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

          <div>
            <HistoricalReturnsBox
              totalHistoricalReturns={
                portfolioData.historicalReturns.totalHistoricalReturns
              }
              years={portfolioData.historicalReturns.years}
              percentageReturn={
                portfolioData.historicalReturns.percentageReturn
              }
              currencyReturn={portfolioData.historicalReturns.currencyReturn}
            />

            <ExposuresBlock
              exposuresSectors={portfolioData.exposures.exposuresSectors}
              exposuresTop10Holdings={
                portfolioData.exposures.exposuresTop10Holdings
              }
              exposuresCreditQuality={
                portfolioData.exposures.exposuresCreditQuality
              }
            />

            <PortfolioRightBlock>
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
            </PortfolioRightBlock>

            <PortfolioRightBlock>
              <PortfolioBlockTitle variant="h2">
                The level of riskiness of the portfolio
              </PortfolioBlockTitle>

              <P>
                If you do not agree with the evaluation result, you can{' '}
                <StyledLink>take</StyledLink> the questionnaire again
              </P>

              <div>
                <PortfolioRiskBlockScale>
                  <PortfolioRiskBlockScaleItem>
                    conservative
                  </PortfolioRiskBlockScaleItem>
                  <PortfolioRiskBlockScaleItem>
                    moderate
                  </PortfolioRiskBlockScaleItem>
                  <PortfolioRiskBlockScaleItem>
                    aggressive
                  </PortfolioRiskBlockScaleItem>
                </PortfolioRiskBlockScale>

                <LevelOfRiskinessSlider
                  levelOfRisk={portfolioData.levelOfRisk}
                />
              </div>
            </PortfolioRightBlock>

            <PortfolioEconomicDetailsBlock>
              <div>
                <PortfolioBlockTitle variant="h2">
                  More economic details
                </PortfolioBlockTitle>

                <P>You can read the economic indicators</P>
              </div>

              <PrimaryButton>read</PrimaryButton>
            </PortfolioEconomicDetailsBlock>
          </div>
        </PortfolioContentBlock>
      </Container>
    </MainBox>
  );
}
