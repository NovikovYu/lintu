'use client';
import { useEffect, useRef } from 'react';

import { Container, useTheme } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

import { startNewQuestionnaire } from '@/actions/actions';
import { MainBox } from '@/components/CommonComponents/Common-сomponents-style';
import InfoPageContent from '@/components/Info-page/info-page-content';
import { selectAccessKey } from '@/store/slices/sessionSlice';

export default function StartTheQuestionnaire() {
  const accessKey = useSelector(selectAccessKey);
  const router = useRouter();
  const theme = useTheme();
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

  const handleStartQuestionnaire = () => {
    startNewQuestionnaire(accessKey, router);
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
          imgSrc={'/business-product-planning-and-research.png'}
          imgAlt={
            'our analytics are thinking about the best investment strategy for you'
          }
          titleText={'Creating a new investment portfolio'}
          mainText={
            "Answer 38 questions and we'll create a unique, personalized portfolio for you"
          }
          buttonText={'Start the questionnaire'}
          onClick={handleStartQuestionnaire}
        />
      </Container>
    </MainBox>
  );
}
