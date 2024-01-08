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

export default function CongratulationsOnRegistering() {
  const accessKey = useSelector(selectAccessKey);
  const router = useRouter();
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleOpenSignin = () => {
    dispatch(setSigninPopupState(true));
  };

  return (
    <MainBox>
      <Head>
        <title>Lintu - Start the questionnaire</title>
      </Head>

      <Container
        sx={{ maxWidth: theme.breakpoints.values.containersMd }}
        maxWidth={false}
      >
        <InfoPageContent
          imgSrc={'/team-building.png'}
          imgAlt={
            'our friendly team is eager to make the best investment portfolio for you'
          }
          titleText={'Congratulations on your successful registration!'}
          mainText={'Now you can use all the features of our platform'}
          buttonText={'OK'}
          onClick={handleOpenSignin}
        />
      </Container>
    </MainBox>
  );
}
