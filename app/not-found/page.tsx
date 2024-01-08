'use client';
import { Container, useTheme } from '@mui/material';
import Head from 'next/head';
import { useSelector } from 'react-redux';

import { MainBox } from '@/components/CommonComponents/Common-сomponents-style';
import InfoPageContent from '@/components/Info-page/info-page-content';
import { selectUserEmail } from '@/store/slices/userEmailSlice';

export default function NotFoundPage() {
  const theme = useTheme();
  const userEmail = useSelector(selectUserEmail);

  return (
    <MainBox>
      <Container
        sx={{ maxWidth: theme.breakpoints.values.containersMd }}
        maxWidth={false}
      >
        <InfoPageContent
          imgSrc={'/checking-info.png'}
          imgAlt={'our analytic is ckecking each users'}
          titleText={'404 This page could not be found.'}
          mainText={"We're already fixing it"}
          buttonText={'Go to main page'}
          buttonLink={'/'}
        />
      </Container>
    </MainBox>
  );
}
