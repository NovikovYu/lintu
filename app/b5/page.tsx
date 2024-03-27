'use client';
import { FC, useCallback, useEffect, useRef, useState } from 'react';

import { Container, useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

import { getQuestionList, saveAnswer } from '@/actions/actions';
import {
  MainBox,
  P,
  PrimaryButton,
} from '@/components/CommonComponents/Common-сomponents-style';
import {
  SurvayWrapper,
  SurvayPartTitleWrapper,
  SurvayPartTitleTitle,
  SurvayPartQuestionsWrapper,
  SurvayPartQuestionsCounter,
} from '@/components/Survey/Survey-style';
import { selectAccessKey } from '@/store/slices/sessionSlice';

import { Subtitle, SurvayButtonsWrapper, SurvayQuestion } from './style-b3';
import RechargeMethodsTable from './Table';

// export interface ISortedQuestionSection {
//   sectionTitle: string;
//   questions: IQuestion[];
// }

type Props = {
  params: {
    id: string;
  };
};

export interface RechargeMethods {
  methodName: string;
  account: string;
}

export default function Survey({ params: { id } }: Props) {
  const router = useRouter();
  const portfolioId = id ?? '';
  const accessKey = useSelector(selectAccessKey);
  const theme = useTheme();
  const accessKeyRef = useRef(accessKey);

  useEffect(() => {
    accessKeyRef.current = accessKey;
  }, [accessKey]);

  // закладка - вернуть приватность
  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     if (!accessKeyRef.current) {
  //       router.push('/');
  //     }
  //   }, 0);

  //   return () => clearTimeout(timeoutId);
  // }, [router]);

  const handleSubmit = (value: string) => {
    // console.log('handleSubmit value >>> ', value);
  };

  const RechargeMethodsData = [
    {
      methodName: 'Wire transfer',
      account: 'Tinkoff ****9564',
    },
    {
      methodName: 'Wire transfer',
      account: 'Tinkoff ****9544',
    },
    {
      methodName: 'Wire transfer',
      account: 'Tinkoff ****9523',
    },
  ];

  return (
    <MainBox>
      <Container
        sx={{ maxWidth: theme.breakpoints.values.containersMd }}
        maxWidth={false}
      >
        <SurvayWrapper>
          <SurvayPartQuestionsWrapper>
            <SurvayQuestion>Method of replenishment</SurvayQuestion>
            <Subtitle>Choose how you want to recharge</Subtitle>

            <RechargeMethodsTable data={RechargeMethodsData} />

            <SurvayButtonsWrapper>
              <PrimaryButton
                type="submit"
                size="large"
                variant="contained"
                // disabled={value === ''}
              >
                add new method
              </PrimaryButton>
            </SurvayButtonsWrapper>
          </SurvayPartQuestionsWrapper>
        </SurvayWrapper>
      </Container>
    </MainBox>
  );
}
