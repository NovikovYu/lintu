import { ISortedQuestionSection } from '@/app/survey/[id]/page';

import { IQuestion } from './Question';

export const sortQuestionsBySections = (
  questions: IQuestion[],
): ISortedQuestionSection[] => {
  const sectionOrder = [
    'introduction_part ',
    'investment_horizone',
    'risk_tolerance_test',
    'tf_part1',
    'tf_part2',
    'sn_part1',
    'sn_part2',
  ];

  const sortedQuestions: { [sectionTitle: string]: IQuestion[] } =
    questions.reduce(
      (acc: { [sectionTitle: string]: IQuestion[] }, question: IQuestion) => {
        const sectionTitle = question.questionnaire_title;
        if (!acc[sectionTitle]) {
          acc[sectionTitle] = [];
        }
        acc[sectionTitle].push(question);
        return acc;
      },
      {},
    );

  const existingSections: ISortedQuestionSection[] = sectionOrder
    .filter((sectionTitle) => sortedQuestions[sectionTitle])
    .map((sectionTitle) => ({
      sectionTitle,
      questions: sortedQuestions[sectionTitle],
    }));

  const otherSections: ISortedQuestionSection[] = Object.keys(sortedQuestions)
    .filter((sectionTitle) => !sectionOrder.includes(sectionTitle))
    .map((sectionTitle) => ({
      sectionTitle,
      questions: sortedQuestions[sectionTitle],
    }));

  const sortedQuestionList: ISortedQuestionSection[] = [
    ...existingSections,
    ...otherSections,
  ];

  return sortedQuestionList;
};
