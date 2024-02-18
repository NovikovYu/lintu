import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import {
  Subtitle,
  SurvayAnswersWrapper,
  SurvayButtonsWrapper,
  SurvayQuestion,
} from './style-b3';
import { P, PrimaryButton, SecondaryButton } from '@/components/CommonComponents/Common-сomponents-style';

export interface IAnswer {
  answer_text: string;
  answer_id: string;
}

export interface IQuestion {
  questionnaire_id: string;
  questionnaire_title: string;
  question_id: string;
  question: string;
  answer_id: null | string;
  answer: null | string;
  question_answers: IAnswer[];
}

interface IProps {
  question: string;
  questionSubtitle: string;
  questionAnswers: IAnswer[];
  submit: (answer: string) => void;
}

const Question = ({
  question,
  questionSubtitle,
  questionAnswers,
  submit
}: IProps) => {
  const [value, setValue] = useState<string>('');

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  // const handleCheckboxChange = (newAnswer: string) => {
  //   let oldAnswers = [...value];
  //   if (oldAnswers.includes(newAnswer)) {
  //     const index = oldAnswers.indexOf(newAnswer);
  //     oldAnswers.splice(index, 1);
  //   } else {
  //     oldAnswers.push(newAnswer);
  //   }
  //   setValue(oldAnswers);
  // };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value) {
      submit(value);
      // setValue([]);
      // goNext();
    }
  };

  // useEffect(() => {
  //   if (answer !== null) {
  //     setValue([answer]);
  //   }
  // }, [answer]);

  if (!question) {
    return <SurvayQuestion>Loading...</SurvayQuestion>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <SurvayQuestion>{question}</SurvayQuestion>
        <Subtitle>{questionSubtitle}</Subtitle>

        <SurvayAnswersWrapper>
          <RadioGroup value={value} onChange={handleRadioChange}>
            {questionAnswers.map((answer, i) => (
              <FormControlLabel
                key={answer.answer_id}
                value={answer.answer_id}
                control={<Radio />}
                label={answer.answer_text}
              />
            ))}
          </RadioGroup>
        </SurvayAnswersWrapper>

        <SurvayButtonsWrapper>
          <PrimaryButton
            type="submit"
            size="large"
            variant="contained"
            disabled={value === ''}
          >
            next
          </PrimaryButton>
        </SurvayButtonsWrapper>
      </FormControl>
    </form>
  );
};

export default Question;
