import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { Tooltip } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import {
  SurvayAnswersWrapper,
  SurvayButtonsWrapper,
  SurvayQuestion,
  SurvayRadioAnswer,
} from './Survey-style';
import {
  SecondaryButton,
  PrimaryButton,
} from '../CommonComponents/Common-сomponents-style';

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
  question: IQuestion | undefined;
  answer: string | null;
  goNext: () => void;
  goBack: () => void;
  updateAnswers: (question_id: string, answer_id: string[]) => void;
  disableGoBackBtn: boolean;
}

const Question = ({
  question,
  answer,
  goNext,
  goBack,
  updateAnswers,
  disableGoBackBtn,
}: IProps) => {
  const [value, setValue] = useState<string[]>([]);
  const [openTooltip, setOpenTooltip] = useState(false);

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue([(event.target as HTMLInputElement).value]);
  };

  const handleCheckboxChange = (newAnswer: string) => {
    let oldAnswers = [...value];
    if (oldAnswers.includes(newAnswer)) {
      const index = oldAnswers.indexOf(newAnswer);
      oldAnswers.splice(index, 1);
    } else {
      oldAnswers.push(newAnswer);
    }
    setValue(oldAnswers);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpenTooltip(true);

    setTimeout(() => {
      if (question) {
        updateAnswers(question.question_id, value);
        setValue([]);
        setOpenTooltip(false);
        goNext();
      }
    }, 1000);
  };

  useEffect(() => {
    if (answer !== null) {
      setValue([answer]);
    }
  }, [answer]);

  if (!question) {
    return <SurvayQuestion>Loading...</SurvayQuestion>;
  }

  const handleTooltipClose = () => {
    setOpenTooltip(false);
  };
  const handleTooltipOpen = () => {
    setOpenTooltip(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <SurvayQuestion>{question?.question ?? 'Loading...'}</SurvayQuestion>

        {/* bookmark - later, there should be a question with multiple answers */}
        {/* {question.question_id === '788d5c12-1a7b-4966-9319-509b11056eda' ? (
          <SurvayAnswersWrapper>
            <FormGroup>
              {question.answers.map((answer, i) => (
                <FormControlLabel
                  key={answer.answer_id}
                  control={
                    <Checkbox
                      checked={value.includes(answer.answer_id)}
                      onChange={() => handleCheckboxChange(answer.answer_id)}
                    />
                  }
                  label={answer.answer_text}
                />
              ))}
            </FormGroup>
          </SurvayAnswersWrapper>
        ) : ( */}
        <SurvayAnswersWrapper>
          <RadioGroup value={value} onChange={handleRadioChange}>
            {question.question_answers.map((answer, i) => (
              <SurvayRadioAnswer
                key={answer.answer_id}
                value={answer.answer_id}
                control={<Radio />}
                label={answer.answer_text}
              />
            ))}
          </RadioGroup>
        </SurvayAnswersWrapper>

        <SurvayButtonsWrapper>
          <SecondaryButton
            type="button"
            size="large"
            variant="contained"
            onClick={goBack}
            disabled={disableGoBackBtn}
          >
            Previous
          </SecondaryButton>

          <Tooltip
            title="The answer is saved"
            placement="top"
            arrow
            PopperProps={{
              disablePortal: true,
            }}
            onClose={handleTooltipClose}
            open={openTooltip}
            disableFocusListener
            disableHoverListener
            disableTouchListener
          >
            <PrimaryButton
              type="submit"
              size="large"
              variant="contained"
              disabled={value.length === 0}
            >
              next
            </PrimaryButton>
          </Tooltip>
        </SurvayButtonsWrapper>
      </FormControl>
    </form>
  );
};

export default Question;
