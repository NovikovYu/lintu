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
          titleText={'Log In or Sign Up'}
          mainText={'Explore full Lintu features after signing up!'}
        />
      </Container>
    </MainBox>
  );
}
