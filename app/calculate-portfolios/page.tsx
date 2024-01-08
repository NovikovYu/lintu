'use client';
import * as React from 'react';

import { Container, useTheme } from '@mui/material';
import Head from 'next/head';

import { MainBox } from '@/components/CommonComponents/Common-сomponents-style';
import InfoPageContent from '@/components/Info-page/info-page-content';

export default function СalculatePortfolios() {
  const theme = useTheme();

  return (
    <MainBox>
      <Container
        sx={{ maxWidth: theme.breakpoints.values.containersMd }}
        maxWidth={false}
      >
        <InfoPageContent
          imgSrc={'/calculate-portfolios.png'}
          imgAlt={'our analytic is calculates the best portfolios'}
          titleText={'Сalculate the best portfolios'}
          mainText={`Wait a few minutes. It's worth it`}
          buttonText={'OK'}
          buttonLink={'/portfolio'}
        />
      </Container>
    </MainBox>
  );
}
