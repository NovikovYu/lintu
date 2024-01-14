'use client';
import * as React from 'react';
import { useRef, useEffect } from 'react';

import { Container, useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

import { MainBox } from '@/components/CommonComponents/Common-сomponents-style';
import InfoPageContent from '@/components/Info-page/info-page-content';
import { selectAccessKey } from '@/store/slices/sessionSlice';

export default function СalculatePortfolios() {
  const theme = useTheme();
  const accessKey = useSelector(selectAccessKey);
  const router = useRouter();
  const accessKeyRef = useRef(accessKey);

  useEffect(() => {
    accessKeyRef.current = accessKey;
  }, [accessKey]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!accessKeyRef.current) {
        router.push('/');
      }
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [router]);

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
