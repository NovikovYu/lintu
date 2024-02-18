'use client';
import { useState } from 'react';

import { Container, useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

import { MainBox } from '@/components/CommonComponents/Common-сomponents-style';
import InfoPageContent from '@/components/Info-page/info-page-content';
import { selectAccessKey } from '@/store/slices/sessionSlice';

import PortfolioAmountSlider from './portfolio-amount-slider';
import {
  AmountSliderMarksTextText,
  AmountSliderMarksTextTextWrapper,
  PortfolioAmountSliderWrapper,
} from './style-portfolio-amount';

const INITIAL_AMOUNT = 3000;

export default function CongratulationsOnRegistering() {
  const accessKey = useSelector(selectAccessKey);
  const router = useRouter();
  const theme = useTheme();
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  const handleOpenSignin = () => {
    // dispatch(setSigninPopupState(true));
    console.log('создаем тестовый аккаунт и переводим на а2', amount);
  };

  const handleSetAmount = (value: number | number[]) => {
    // dispatch(setSigninPopupState(true));
    if (typeof value === 'number') {
      setAmount(value);
    } else {
      setAmount(value[0]);
    }
    console.log('создаем тестовый аккаунт и переводим на а2', amount);
  };

  return (
    <MainBox>
      <Container
        sx={{ maxWidth: theme.breakpoints.values.containersMd }}
        maxWidth={false}
      >
        <InfoPageContent
          imgSrc={'/analyzing-business-growth-graph.png'}
          imgAlt={
            'our friendly team is eager to make the best investment portfolio for you'
          }
          titleText={"Let's experiment with a demo account"}
          mainText={
            "Just enter the amount you'd like to invest and we'll open a demo account with it. This way you will be able to check how well the portfolio works before making a real investment"
          }
          buttonText={'Submit'}
          onClick={handleOpenSignin}
        >
          <PortfolioAmountSliderWrapper>
            <PortfolioAmountSlider
              defaultValue={INITIAL_AMOUNT}
              setAmount={handleSetAmount}
            />
            <AmountSliderMarksTextTextWrapper>
              <AmountSliderMarksTextText>$ 1 000</AmountSliderMarksTextText>
              <AmountSliderMarksTextText>$ 10 000</AmountSliderMarksTextText>
            </AmountSliderMarksTextTextWrapper>
          </PortfolioAmountSliderWrapper>
        </InfoPageContent>
      </Container>
    </MainBox>
  );
}
