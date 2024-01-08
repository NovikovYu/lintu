'use client';

import * as React from 'react';

import { Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { MainBox } from '@/components/CommonComponents/Common-сomponents-style';
import InfoPageContent from '@/components/Info-page/info-page-content';

export default function Home() {
  const theme = useTheme();

  return (
    <MainBox>
      <Container
        sx={{ maxWidth: theme.breakpoints.values.containersMd }}
        maxWidth={false}
      >
        <InfoPageContent
          imgSrc={'/business-product-planning-and-research.png'}
          imgAlt={'our analytic is ckecking each users'}
          titleText={'Sign In or Sign Up'}
          mainText={'Lintu functionality is available only to authorized users'}
        />
      </Container>
    </MainBox>
  );
}
