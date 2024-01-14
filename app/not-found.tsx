'use client';
import { Container, useTheme } from '@mui/material';

import { MainBox } from '@/components/CommonComponents/Common-сomponents-style';
import InfoPageContent from '@/components/Info-page/info-page-content';

export default function NotFound() {
  const theme = useTheme();

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
