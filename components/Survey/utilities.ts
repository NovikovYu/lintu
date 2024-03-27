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
  // console.log('112233 000000000000000000000000000000000000');
  // console.log('112233 000 questions >>', questions);
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
  // console.log('112233 001 sortedQuestions OLD >>', sortedQuestions);
  const sortedQuestionsWithUnitedLast4Sections = {
    ...sortedQuestions,
    sn_part1: [
      ...sortedQuestions.sn_part1,
      ...sortedQuestions.sn_part2,
      ...sortedQuestions.tf_part1,
      ...sortedQuestions.tf_part2,
    ],
  };
  // @ts-ignore
  delete sortedQuestionsWithUnitedLast4Sections.sn_part2;
  // @ts-ignore
  delete sortedQuestionsWithUnitedLast4Sections.tf_part1;
  // @ts-ignore
  delete sortedQuestionsWithUnitedLast4Sections.tf_part2;
  // console.log(
  //   '112233 002 sortedQuestions NEW>>',
  //   sortedQuestionsWithUnitedLast4Sections,
  // );
  const existingSections: ISortedQuestionSection[] = sectionOrder
    .filter(
      // @ts-ignore
      (sectionTitle) => sortedQuestionsWithUnitedLast4Sections[sectionTitle],
    )
    .map((sectionTitle) => ({
      sectionTitle,
      // @ts-ignore
      questions: sortedQuestionsWithUnitedLast4Sections[sectionTitle],
    }));

  const otherSections: ISortedQuestionSection[] = Object.keys(
    sortedQuestionsWithUnitedLast4Sections,
  )
    .filter((sectionTitle) => !sectionOrder.includes(sectionTitle))
    .map((sectionTitle) => ({
      sectionTitle,
      // @ts-ignore
      questions: sortedQuestionsWithUnitedLast4Sections[sectionTitle],
    }));

  const sortedQuestionList: ISortedQuestionSection[] = [
    ...existingSections,
    ...otherSections,
  ];

  return sortedQuestionList;
};
