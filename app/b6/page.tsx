'use client';
import { FC, useCallback, useEffect, useRef, useState } from 'react';

import { Container, useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

import { getQuestionList, saveAnswer } from '@/actions/actions';
import Question, { IQuestion } from '@/app/b7/Question';
import {
  MainBox,
  P,
} from '@/components/CommonComponents/Common-сomponents-style';
import {
  SurvayWrapper,
  SurvayPartTitleWrapper,
  SurvayPartTitleTitle,
  SurvayPartQuestionsWrapper,
  SurvayPartQuestionsCounter,
} from '@/components/Survey/Survey-style';
import { selectAccessKey } from '@/store/slices/sessionSlice';

export interface ISortedQuestionSection {
  sectionTitle: string;
  questions: IQuestion[];
}
type Props = {
  params: {
    id: string;
  };
};

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

  return (
    <MainBox>
      <Container
        sx={{ maxWidth: theme.breakpoints.values.containersMd }}
        maxWidth={false}
      >
        <SurvayWrapper>
          <SurvayPartQuestionsWrapper>
            <Question
              question={'Method of replenishment'}
              questionSubtitle={
                'As long as you do not have a saved deposit method'
              }
              // questionAnswers={[{
              //   answer_text: 'wire transfer',
              //   answer_id: 'wire transfer',
              // }, {
              //   answer_text: 'wise balance',
              //   answer_id: 'wise balance',
              // }]}
              submit={handleSubmit}
            />
          </SurvayPartQuestionsWrapper>
        </SurvayWrapper>
      </Container>
    </MainBox>
  );
}
