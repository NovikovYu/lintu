'use client';
import { Container, useTheme } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

import { startNewQuestionnaire } from '@/actions/actions';
import { MainBox } from '@/components/CommonComponents/Common-сomponents-style';
import InfoPageContent from '@/components/Info-page/info-page-content';
import { selectAccessKey } from '@/store/slices/sessionSlice';
import { setSigninPopupState } from '@/store/slices/signinPopupStateSlice';
import PortfolioAmountSlider from './portfolio-amount-slider';
import { AmountSliderMarksTextText, AmountSliderMarksTextTextWrapper, PortfolioAmountSliderWrapper } from './style-portfolio-amount';
import { useState } from 'react';

export default function CongratulationsOnRegistering() {
  const accessKey = useSelector(selectAccessKey);
  const router = useRouter();
  const theme = useTheme();
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0)

  // закладка 
  const handleOpenSignin = () => {
    // dispatch(setSigninPopupState(true));
    console.log('переводим на b2')
  };

  return (
    <MainBox>
      <Container
        sx={{ maxWidth: theme.breakpoints.values.containersMd }}
        maxWidth={false}
      >
        <InfoPageContent
          imgSrc={'/concept-of-business-employees.png'}
          imgAlt={
            'our friendly team is eager to make the best investment portfolio for you'
          }
          titleText={"To open an account, we need to meet"}
          mainText={"Please go through the KYC check, it usually takes no more than 5 minutes. Rest assured, your data will remain secure."}
          buttonText={'Pass the test'}
          buttonLink={'b2'}
        />
      </Container>
    </MainBox>
  );
}
