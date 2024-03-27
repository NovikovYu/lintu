'use client';
import { FC, useCallback, useEffect, useRef, useState } from 'react';

import { Container, useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

import {
  getQuestionList,
  getUnsortedQuestionList,
  saveAnswer,
} from '@/actions/actions';
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

import ProgressBar from '../../../components/Progress-bar/Progress-bar';

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

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!accessKeyRef.current) {
        router.push('/');
      }
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [router]);

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
    setTotalCurrentQuestion2(totalCurrentQuestion2 + 1);
    // console.log('goNext');
    // сейчас или currentQuestion или currentPart косячит с обновлением
    // console.log('currentQuestion', currentQuestion);
    // console.log('currentPart', currentPart);

    if (
      questionList &&
      questionList[currentPart] &&
      questionList[currentPart].questions &&
      currentQuestion < questionList[currentPart].questions.length - 1
    ) {
      // console.log('косячный if 1');
      setCurrentQuestion((value) => value + 1);
    } else {
      // условие 1 - вопрос последний
      // console.log('условие 1');
      // console.log('currentQuestion', currentQuestion);
      // console.log(
      //   'questionList[currentPart].questions.length - 1',
      //   questionList[currentPart].questions.length - 1,
      // );
      if (currentPart < questionList.length - 1) {
        // console.log('косячный if 2');
        setCurrentPart((value) => value + 1);
        setCurrentQuestion(0);
      } else {
        // условие 2 - часть последняя последний
        // console.log('условие 2');
        // console.log('currentPart', currentPart);
        // console.log('questionList.length - 1', questionList.length - 1);

        // bookmark 001
        router.push(`/ok/${portfolioId}`);
      }
    }
  };

  const goBack = async () => {
    setTotalCurrentQuestion2(totalCurrentQuestion2 - 1);

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
    // tf_part1: 'Thinking / Feeling #1',
    // tf_part2: 'Thinking / Feeling #2',
    // sn_part1: 'Sensing / Intuition # 1',
    sn_part1: 'Personality test',
    // sn_part2: 'Sensing / Intuition # 2',
  };

  const [totalCurrentQuestion, setTotalCurrentQuestion] = useState(0);
  const countCurrentQuestion = useCallback(async () => {
    const questionList = await getUnsortedQuestionList(portfolioId);
    const answerQuontity = questionList.filter((obj: IQuestion) => {
      return typeof obj.answer == 'string';
    }).length;
    setTotalCurrentQuestion(answerQuontity);
  }, [portfolioId]);

  useEffect(() => {
    countCurrentQuestion();
  }, [countCurrentQuestion, currentQuestion]);

  // NEW
  const [totalCurrentQuestion2, setTotalCurrentQuestion2] = useState(0);
  const countCurrentQuestion2 = useCallback(async () => {
    const questionList = await getUnsortedQuestionList(portfolioId);
    const answerQuontity = questionList.filter((obj: IQuestion) => {
      return typeof obj.answer == 'string';
    }).length;
    setTotalCurrentQuestion(answerQuontity);
  }, [portfolioId]);

  useEffect(() => {
    countCurrentQuestion2();
  }, [countCurrentQuestion]);
  // End
  const [totalQuestionQuontity, setTotalQuestionQuontity] = useState(0);
  const countTotalQuestionQuontity = useCallback(() => {
    let result = 0;
    questionList.forEach((part) => (result += part.questions.length));
    setTotalQuestionQuontity(result);
  }, [questionList]);

  useEffect(() => {
    countTotalQuestionQuontity();
  }, [countTotalQuestionQuontity, questionList]);

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
              The Questionnaire will take you about 15 minutes. The following 38
              questions will help us get acquainted and provide a tailored
              solution for you. Please choose the most suitable option based on
              your feelings. We will save your answers automatically if you want
              to take a break.
            </P>
          </SurvayPartTitleWrapper>

          <SurvayPartQuestionsWrapper>
            <SurvayPartQuestionsCounter>
              Question {currentQuestion + 1} of{' '}
              {questionList[currentPart] && questionList[currentPart].questions
                ? questionList[currentPart].questions.length
                : 'Loading...'}
            </SurvayPartQuestionsCounter>

            {totalCurrentQuestion2 === 38 && 'Loading...'}

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

            <ProgressBar
              currentQuestion={totalCurrentQuestion}
              totalQuestionQuontity={totalQuestionQuontity}
            />
          </SurvayPartQuestionsWrapper>
        </SurvayWrapper>
      </Container>
    </MainBox>
  );
}
