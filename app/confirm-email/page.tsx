'use client';
import { Container, useTheme } from '@mui/material';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';

import { MainBox } from '@/components/CommonComponents/Common-сomponents-style';
import InfoPageContent from '@/components/Info-page/info-page-content';
import { setSigninPopupState } from '@/store/slices/signinPopupStateSlice';
import { selectUserEmail } from '@/store/slices/userEmailSlice';

export default function ConfirmYourEmail() {
  const theme = useTheme();
  const userEmail = useSelector(selectUserEmail);
  const dispatch = useDispatch();

  const handleOpenSignin = () => {
    dispatch(setSigninPopupState(true));
  };

  return (
    <MainBox>
      <Container
        sx={{ maxWidth: theme.breakpoints.values.containersMd }}
        maxWidth={false}
      >
        <InfoPageContent
          imgSrc={'/checking-info.png'}
          imgAlt={'our analytic is ckecking each users'}
          titleText={'Confirm your email'}
          mainText={`We sent an email to ${userEmail ?? 'your email'}.
              Until you confirm the email, you will not be able to use some of the functionality of the platform`}
          buttonText={"OK, I'll confirm"}
          onClick={handleOpenSignin}
        />
      </Container>
    </MainBox>
  );
}
