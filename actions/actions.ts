// 'use server';
// the build crashes with an error inside next
import axios from 'axios';
import { UseFormSetError } from 'react-hook-form';

import { NewPasswordFormTypes } from '@/app/change_password/[id]/page';
import { IPortfolioCard, PortfolioModel } from '@/app/portfolios/page';
import { ISortedQuestionSection } from '@/app/survey/[id]/page';
import {
  Exposures,
  IExposuresData,
} from '@/components/Portfolio/ExposuresBlock/exposures-block';
import { IPortfolioOverallInfo } from '@/components/Portfolio/LevelOfRickBlock/level-of-rick-block';
import { IFinancialResultData } from '@/components/Portfolio/ResultsBlock/financial-result-component';
import { IQuestion } from '@/components/Survey/Question';
import { sortQuestionsBySections } from '@/components/Survey/utilities';
import { ForgotPasswordFormTypes } from '@/feature/sign-in/forgot-password';
import { SignInFormTypes } from '@/feature/sign-in/sign-in-form';
import { SignUpFormTypes } from '@/feature/sign-up/sign-up-form';

export interface PortfolioResponse {
  portfolio_id: string;
}

export const startNewQuestionnaire = async (
  accessKey: string | null,
  router: any,
): Promise<void> => {
  try {
    const response = await axios.post<PortfolioResponse>(
      process.env.BASE_DEV_URL + 'portfolio/',
      {},
      {
        headers: {
          Authorization: `Bearer ${accessKey}`,
        },
      },
    );

    if (response.data) {
      router.push(`/survey/${response.data.portfolio_id}`);
    }
  } catch (error) {
    console.error('Request error:', error);
  }
};

export const getQuestionList = async (
  id: string,
): Promise<ISortedQuestionSection[]> => {
  try {
    const response = await axios.get(
      process.env.BASE_DEV_URL + `portfolio_questionnaire/?portfolio_id=${id}`,
    );

    if (response.data) {
      const sortedQuestionList = sortQuestionsBySections(response.data);
      return sortedQuestionList;
    }

    return [];
  } catch (error) {
    console.error('Request error:', error);
    throw error;
  }
};

export const getUnsortedQuestionList = async (
  id: string,
): Promise<IQuestion[]> => {
  try {
    const response = await axios.get(
      process.env.BASE_DEV_URL + `portfolio_questionnaire/?portfolio_id=${id}`,
    );

    if (response.data) {
      // const sortedQuestionList = sortQuestionsBySections(response.data);
      return response.data;
    }

    return [];
  } catch (error) {
    console.error('Request error:', error);
    throw error;
  }
};

export const saveAnswer = async (
  portfolioId: string,
  questionId: string,
  answerId: string,
  accessKey: string | null,
): Promise<void> => {
  try {
    const response = await axios.post(
      process.env.BASE_DEV_URL + `portfolio_answers/`,
      {
        answer: answerId,
        portfolio: portfolioId,
        question: questionId,
      },
      {
        headers: {
          Authorization: `Bearer ${accessKey}`,
        },
      },
    );
  } catch (error) {
    console.error('Request error:', error);
  }
};

export const getQuestionnairesList = async (
  accessKey: string | null,
): Promise<PortfolioModel | undefined> => {
  try {
    const response = await axios.get(process.env.BASE_DEV_URL + 'portfolio/', {
      headers: {
        Authorization: `Bearer ${accessKey}`,
      },
    });

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.error('Request error:', error);
  }
  return undefined;
};

export const signIn = async (
  userData: SignInFormTypes,
  setIsLoading: (isLoading: boolean) => void,
  setError: UseFormSetError<SignInFormTypes>,
) => {
  setIsLoading(true);

  try {
    const response = await axios.post(process.env.BASE_DEV_URL + 'login/', {
      password: userData.password,
      email: userData.email,
    });
    return response;
  } catch (error) {
    try {
      setError(
        'email',
        {
          type: 'manual',
          message:
            'A user with this email and password combination was not found in the system.',
        },
        { shouldFocus: true },
      );
      setError(
        'password',
        {
          type: 'manual',
          message:
            'A user with this email and password combination was not found in the system.',
        },
        { shouldFocus: true },
      );
    } catch (error) {
      console.error(error);
    }
  } finally {
    setIsLoading(false);
  }
};

export const signUp = async (
  userData: SignUpFormTypes,
  setIsLoading: (isLoading: boolean) => void,
  setError: UseFormSetError<SignUpFormTypes>,
) => {
  setIsLoading(true);

  try {
    const response = await axios.post(process.env.BASE_DEV_URL + 'signup/', {
      password: userData.password,
      email: userData.email,
      first_name: userData.first_name,
      last_name: userData.last_name,
      country: userData.country,
      phone_number: `+${userData.phone_number}`,
    });
    return response;
  } catch (error: any) {
    try {
      const errorsData = error.response?.data || {};
      const errorsNamesList = Object.keys(errorsData);

      errorsNamesList.forEach((errorPath) => {
        setError(
          errorPath as
            | 'first_name'
            | 'last_name'
            | 'phone_number'
            | 'isAccepted'
            | 'email'
            | 'password'
            | 'repeatPassword'
            | 'country'
            | `root.${string}`
            | 'root',
          { type: 'manual', message: errorsData[errorPath][0] },
          { shouldFocus: true },
        );
      });
    } catch (error) {
      console.error(error);
    }
  } finally {
    setIsLoading(false);
  }
};

export const resetPassword = async (
  userData: ForgotPasswordFormTypes,
  setIsLoading: (isLoading: boolean) => void,
  setError: UseFormSetError<ForgotPasswordFormTypes>,
) => {
  setIsLoading(true);

  try {
    const response = await axios.post(
      process.env.BASE_DEV_URL + 'change_password_request/',
      userData,
    );
    return response;
  } catch (error: any) {
    try {
      const errorsData = error.response?.data || {};
      const errorsNamesList = Object.keys(errorsData);

      errorsNamesList.forEach((errorPath) => {
        setError(
          errorPath as 'email' | `root.${string}` | 'root',
          { type: 'manual', message: errorsData[errorPath] },
          { shouldFocus: true },
        );
      });
    } catch (error) {
      console.error(error);
    }
  } finally {
    setIsLoading(false);
  }
};

export const saveNewPassword = async (
  userData: NewPasswordFormTypes,
  setIsLoading: (isLoading: boolean) => void,
  setError: UseFormSetError<NewPasswordFormTypes>,
) => {
  setIsLoading(true);

  try {
    const response = await axios.post(
      process.env.BASE_DEV_URL + 'new_password/',
      userData,
    );
    return response;
  } catch (error: any) {
    try {
      const errorsData = error.response?.data || {};
      const errorsNamesList = Object.keys(errorsData);

      errorsNamesList.forEach((errorPath) => {
        setError(
          errorPath as
            | `root.${string}`
            | 'root'
            | 'new_password'
            | 'repeatPassword'
            | 'token',
          { type: 'manual', message: errorsData[errorPath][0] },
          { shouldFocus: true },
        );
      });
    } catch (error) {
      console.error(error);
    }
  } finally {
    setIsLoading(false);
  }
};

export const portfolioPerformanceChartRequest = async (
  accessKey: string | null,
  chartData: {
    portfolio: string;
    dataType: string;
    period: string;
    benchmark: string;
  },
  setIsLoading: (isLoading: boolean) => void,
): Promise<IFinancialResultData | undefined> => {
  setIsLoading(true);
  // console.log(
  //   '123 portfolioPerformanceChartRequest chartData.benchmark >>',
  //   chartData.benchmark,
  // );
  // console.log(
  //   '123 portfolioPerformanceChartRequest chartData.benchmark ?? S&P 500 Index >>',
  //   chartData.benchmark.length > 2 ? chartData.benchmark : 'S&P 500 Index',
  // );

  // сваггер
  // benchmark=S%26P%20500%20Index
  // МОЙ
  // benchmark=S&P%20500%20Index

  const benchmarkMapper: Record<string, string> = {
    'S&P 500': 'S%26P%20500%20Index',
    'NASDAQ Composite': 'NASDAQ%20Composite%20index',
    'MSCI WORLD': 'MSCI%20WORLD%20index',
  };

  const mappedBenchmark =
    chartData.benchmark.length > 2
      ? benchmarkMapper[chartData.benchmark]
      : benchmarkMapper['S&P 500'];

  try {
    const response = await axios.get(
      process.env.BASE_DEV_URL +
        `portfolio/historic/?portfolio=${chartData.portfolio}&dataType=${chartData.dataType}&period=${chartData.period}&benchmark=${mappedBenchmark}`,
      // 'http://127.0.0.1:8000/api/v1/portfolio/historic/',
      {
        headers: {
          Authorization: `Bearer ${accessKey}`,
        },
      },
    );
    console.log('123 portfolioPerformanceChartRequest response >>', response);
    return response.data;
  } catch (error) {
    console.error(error);
  } finally {
    setIsLoading(false);
  }
};

interface exposuresChartRequestParams {
  portfolio: string;
}
export const exposuresChartRequest = async (
  accessKey: string | null,
  params: exposuresChartRequestParams,
  setIsLoading: (isLoading: boolean) => void,
  // ): Promise<IExposuresData | undefined> => {
): Promise<Exposures[] | undefined> => {
  setIsLoading(true);

  try {
    const response = await axios.get(
      process.env.BASE_DEV_URL +
        `portfolio/exposures/?portfolio=${params.portfolio}`,
      {
        headers: {
          Authorization: `Bearer ${accessKey}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
  } finally {
    setIsLoading(false);
  }
};

interface amountSaveParams {
  portfolio: string;
  investment: number;
}

export const portfolioAmountSaveRequest = async (
  accessKey: string | null,
  params: amountSaveParams,
  setIsLoading: (isLoading: boolean) => void,
): Promise<IPortfolioOverallInfo | undefined> => {
  setIsLoading(true);

  try {
    const response = await axios.post(
      process.env.BASE_DEV_URL + 'invest/',
      params,
      {
        headers: {
          Authorization: `Bearer ${accessKey}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
  } finally {
    setIsLoading(false);
  }
};

// export const getQuestionnairesList = async (
//   accessKey: string | null,
// ): Promise<PortfolioModel | undefined> => {
//   try {
//     const response = await axios.get(process.env.BASE_DEV_URL + 'portfolio/', {
//       headers: {
//         Authorization: `Bearer ${accessKey}`,
//       },
//     });

export const portfolioOverallInfoRequest = async (
  accessKey: string | null,
  params: exposuresChartRequestParams,
  setIsLoading: (isLoading: boolean) => void,
): Promise<IPortfolioOverallInfo | undefined> => {
  setIsLoading(true);

  try {
    const response = await axios.get(
      process.env.BASE_DEV_URL + `risk_score/?portfolio=${params.portfolio}`,
      {
        headers: {
          Authorization: `Bearer ${accessKey}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
  } finally {
    setIsLoading(false);
  }
};
