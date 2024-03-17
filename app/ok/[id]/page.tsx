'use client';
import { useEffect, useState } from 'react';

import { CircularProgress, Container, useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

import {
  portfolioAmountSaveRequest,
  portfolioOverallInfoRequest,
} from '@/actions/actions';
import {
  MainBox,
  PrimaryButton,
} from '@/components/CommonComponents/Common-сomponents-style';
import { InfoPageWrapper } from '@/components/Info-page/Info-page-styles';
import { IPortfolioOverallInfo } from '@/components/Portfolio/LevelOfRickBlock/level-of-rick-block';
import { selectAccessKey } from '@/store/slices/sessionSlice';

import PortfolioAmountSlider from './portfolio-amount-slider';
import {
  SurvayResultsAmountSliderWrapper,
  SurvayResultsRiskLoader,
  SurvayResultsSliderMarksText,
  SurvayResultsSliderMarksTextWrapper,
  SurvayResultsSubtitle,
  SurvayResultsText,
  SurvayResultsTextBold,
  SurvayResultsTitle,
} from './style-survay-results';

const INITIAL_AMOUNT = 51000;

const portfolioOverallInfoMockData = {
  'Risk tolerance': 'Aggressive',
  'Investment Goals': 'Retirement planning, Wealth accumulation',
  'Investment Strategy':
    'Lintu classified funds as moderate are subject to a moderate degree of fluctuation in share prices. In general, such funds may be appropriate for investors who have a relatively long-term investment horizon (more than 5 years).',
};

type Props = {
  params: {
    id: string;
  };
};

export default function CongratulationsOnRegistering({
  params: { id },
}: Props) {
  const accessKey = useSelector(selectAccessKey);
  const portfolioId = id ?? '';
  const router = useRouter();
  const theme = useTheme();
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(INITIAL_AMOUNT);

  const handleOpenSignin = async () => {
    // dispatch(setSigninPopupState(true));
    console.log('создаем тестовый аккаунт и переводим на а2', amount);

    const requestBody = {
      portfolio: portfolioId,
      amount: amount,
    };

    console.log('requestBody', requestBody);

    const response: IPortfolioOverallInfo | undefined =
      await portfolioAmountSaveRequest(requestBody, setIsLoading);

    console.log('response', response);

    // if (response) {
    router.push(`/portfolio/${portfolioId}`);
    // }
  };

  const handleSetAmount = (value: number | number[]) => {
    // dispatch(setSigninPopupState(true));
    if (typeof value === 'number') {
      setAmount(value);
    } else {
      setAmount(value[0]);
    }
  };

  // LOADING
  const [dataToDispaly, setDataToDispaly] =
    useState<IPortfolioOverallInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const requestBody = {
        portfolio: portfolioId,
      };

      console.log('requestBody', requestBody);

      const response: IPortfolioOverallInfo | undefined =
        await portfolioOverallInfoRequest(requestBody, setIsLoading);

      console.log('response', response);

      if (response && response['Risk tolerance']) {
        setDataToDispaly(response);
      } else {
        setDataToDispaly(portfolioOverallInfoMockData);
      }
    };

    fetchData();
  }, []);

  const riskTolerance = dataToDispaly && dataToDispaly['Risk tolerance'];
  return (
    <MainBox>
      <Container
        sx={{ maxWidth: theme.breakpoints.values.containersMd }}
        maxWidth={false}
      >
        <InfoPageWrapper>
          <SurvayResultsTitle variant="h1">
            Investment Questionnaire Results
          </SurvayResultsTitle>
          <SurvayResultsText>
            Thank you for completing the questionnaire. Based on your responses,
            we have tailored a personalized investment portfolio recommendation
            for you.
          </SurvayResultsText>
          <SurvayResultsSubtitle variant="h2">
            Investment Profile Summary
          </SurvayResultsSubtitle>
          {dataToDispaly ? (
            <>
              <SurvayResultsText>
                Risk Tolerance:
                <SurvayResultsTextBold>
                  {dataToDispaly['Risk tolerance']}
                </SurvayResultsTextBold>
              </SurvayResultsText>
              <SurvayResultsText>
                Investment Goals:
                <SurvayResultsTextBold>
                  {dataToDispaly['Investment Goals']}
                </SurvayResultsTextBold>
              </SurvayResultsText>
              <SurvayResultsText>
                Investment Strategy:
                <SurvayResultsTextBold>
                  {dataToDispaly['Investment Strategy']}
                </SurvayResultsTextBold>
              </SurvayResultsText>
            </>
          ) : (
            <SurvayResultsRiskLoader>
              <CircularProgress />
            </SurvayResultsRiskLoader>
          )}
          <SurvayResultsSubtitle variant="h2">
            Amount of Funds to Invest
          </SurvayResultsSubtitle>
          <SurvayResultsAmountSliderWrapper>
            <PortfolioAmountSlider
              defaultValue={INITIAL_AMOUNT}
              setAmount={handleSetAmount}
            />
            <SurvayResultsSliderMarksTextWrapper>
              <SurvayResultsSliderMarksText>
                $ 1 000
              </SurvayResultsSliderMarksText>
              <SurvayResultsSliderMarksText>
                $ 100 000
              </SurvayResultsSliderMarksText>
            </SurvayResultsSliderMarksTextWrapper>
          </SurvayResultsAmountSliderWrapper>
          <SurvayResultsText>
            <SurvayResultsTextBold>Invest {amount} USD</SurvayResultsTextBold>
          </SurvayResultsText>
          <PrimaryButton
            type="button"
            size="large"
            variant="contained"
            onClick={handleOpenSignin}
          >
            Open an account
          </PrimaryButton>
        </InfoPageWrapper>
      </Container>
    </MainBox>
  );
}
