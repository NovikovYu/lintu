'use client';
import { FC, useCallback, useEffect, useState } from 'react';

import { Container, useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

import { getQuestionList, saveAnswer } from '@/actions/actions';
import {
  MainBox,
  P,
} from '@/components/CommonComponents/Common-сomponents-style';
import Question, { IQuestion } from '@/components/Survey/Question';
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

  const [questionList, setQuestionList] = useState<ISortedQuestionSection[]>(
    [],
  );

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [currentPart, setCurrentPart] = useState<number>(0);

  const getFirstList = useCallback(async (portfolioId: string) => {
    const questionList = await getQuestionList(portfolioId);
    setQuestionList(questionList);
    findCurrentQuestion(questionList ?? []);
  }, []);

  useEffect(() => {
    if (portfolioId) {
      getFirstList(portfolioId);
    }
  }, [portfolioId, getFirstList]);

  const goNext = () => {
    if (
      questionList &&
      questionList[currentPart] &&
      questionList[currentPart].questions &&
      currentQuestion < questionList[currentPart].questions.length - 1
    ) {
      setCurrentQuestion((value) => value + 1);
    } else {
      if (currentPart < questionList.length - 1) {
        setCurrentPart((value) => value + 1);
        setCurrentQuestion(0);
      } else {
        router.push(`/portfolio`);
      }
    }
  };

  const goBack = async () => {
    const questionList = await getQuestionList(portfolioId);
    setQuestionList(questionList);
    if (currentQuestion > 0) {
      setCurrentQuestion((value) => value - 1);
    } else {
      if (currentPart > 0) {
        setCurrentPart((value) => value - 1);
        setCurrentQuestion(questionList[currentPart - 1].questions.length - 1);
      } else {
        console.error('The BACK button should not have worked...');
      }
    }
  };

  const updateAnswers = (questionId: string, answers: string[]): void => {
    // bookmark - process multi-response
    saveAnswer(portfolioId, questionId, answers[0], accessKey);
  };

  const findCurrentQuestion = (questions: ISortedQuestionSection[]): void => {
    for (let i = 0; i < questions.length; i++) {
      const section = questions[i];
      const sectionQuestions = section.questions;

      for (let j = 0; j < sectionQuestions.length; j++) {
        const question = sectionQuestions[j];
        const answerId = question.answer_id;

        if (answerId === null || answerId === '') {
          setCurrentPart(i);
          setCurrentQuestion(j);
          return;
        }
      }
    }
  };

  const sectionTitleMapper: Record<string, string> = {
    'introduction_part ': 'Introduction',
    investment_horizone: 'Investment horizone',
    risk_tolerance_test: 'Risk tolerance',
    tf_part1: 'Thinking / Feeling #1',
    tf_part2: 'Thinking / Feeling #2',
    sn_part1: 'Sensing / Intuition # 1',
    sn_part2: 'Sensing / Intuition # 2',
  };

  return (
    <MainBox>
      <Container
        sx={{ maxWidth: theme.breakpoints.values.containersMd }}
        maxWidth={false}
      >
        <SurvayWrapper>
          <SurvayPartTitleWrapper>
            <SurvayPartTitleTitle variant="h1">
              Part {currentPart + 1} of {questionList.length}:{' '}
              {questionList[currentPart]?.sectionTitle
                ? sectionTitleMapper[questionList[currentPart].sectionTitle] ??
                  questionList[currentPart].sectionTitle
                : 'Loading...'}
            </SurvayPartTitleTitle>
            <P>
              If you exit, the answers are saved. You can always come back and
              take the test to the end. There are a total of 38 questions in the
              question. Answer thoughtfully to get the best result
            </P>
          </SurvayPartTitleWrapper>

          <SurvayPartQuestionsWrapper>
            <SurvayPartQuestionsCounter>
              Question {currentQuestion + 1} of{' '}
              {questionList[currentPart] && questionList[currentPart].questions
                ? questionList[currentPart].questions.length
                : 'Loading...'}
            </SurvayPartQuestionsCounter>

            <Question
              question={
                questionList[currentPart] && questionList[currentPart].questions
                  ? questionList[currentPart].questions[currentQuestion]
                  : undefined
              }
              answer={
                questionList[currentPart] && questionList[currentPart].questions
                  ? questionList[currentPart].questions[currentQuestion]
                      ?.answer_id
                  : null
              }
              goNext={goNext}
              goBack={goBack}
              updateAnswers={updateAnswers}
              disableGoBackBtn={currentPart === 0 && currentQuestion === 0}
            />
          </SurvayPartQuestionsWrapper>
        </SurvayWrapper>
      </Container>
    </MainBox>
  );
}
