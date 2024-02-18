'use client';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { Checkbox, Container, FormControl, useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

import {
  MainBox,
  P,
  PrimaryButton,
} from '@/components/CommonComponents/Common-сomponents-style';
import {
  SurvayWrapper,
  SurvayPartQuestionsWrapper,
} from '@/components/Survey/Survey-style';
import { selectAccessKey } from '@/store/slices/sessionSlice';
import * as React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from 'react-hook-form';

import { resetPassword, signUp } from '@/actions/actions';
import { ForgotPasswordFormTypes } from '@/feature/sign-in/forgot-password';
import { schemaEmailValidation } from '@/feature/utils/validation/common-validation';
import { Title } from 'chart.js';
import { LabelTextRestyled, AcceptedHelperTextRestyled } from '@/feature/sign-up/style-sign-up-form';
import { BankDetailsFormTitle } from '../b8/style-bank-details';

// import { ButtonRestyled } from '../sign-up/style-sign-up-form';
// import { schemaEmailValidation } from '../utils/validation/common-validation';

// export interface ISortedQuestionSection {
//   sectionTitle: string;
//   questions: IQuestion[];
// }

type Props = {
  params: {
    id: string;
  };
};

// export interface RechargeMethods {
//   methodName: string
//   account: string
// }

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

// const handleSubmit = (value: string) => {
//   console.log('handleSubmit value >>> ', value)
// }

// закладка - ниже логика обработки формы

const { handleSubmit, control, setError } = useForm<ForgotPasswordFormTypes>({
  mode: 'onChange',
  resolver: yupResolver(schemaEmailValidation),
});

const { errors, isValid } = useFormState({
  control,
});
const [isLoading, setIsLoading] = React.useState(false);

const onSubmit: SubmitHandler<ForgotPasswordFormTypes> = async (data) => {
  if (isValidForm(data)) {
    console.log('onSubmit data >>', data)
    // const resetPasswordResult = await resetPassword(
    //   { email: data.email },
    //   setIsLoading,
    //   setError,
    // );

    // if (resetPasswordResult?.status === 200) {
    //   handleCloseForgotPasswordModal();
    //   handleOpenForgotPasswordMessageModal();
    // }
  } else errors;
};

const isValidForm = (data: ForgotPasswordFormTypes) =>
  schemaEmailValidation.isValidSync(data);

// @ts-ignore
const manualError = errors?.detail?.message;


  return (
    <MainBox>
      <Container
        sx={{ maxWidth: theme.breakpoints.values.containersMd }}
        maxWidth={false}
      >
        <SurvayWrapper>
          <SurvayPartQuestionsWrapper>
            <BankDetailsFormTitle>KYC</BankDetailsFormTitle>


          </SurvayPartQuestionsWrapper>
        </SurvayWrapper>
      </Container>
    </MainBox>
  );
}
