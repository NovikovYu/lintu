'use client';
import { FC, useCallback, useEffect, useRef, useState } from 'react';

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
import { BankDetailsFormBlockTitle, BankDetailsFormDevider, BankDetailsFormFieldRestyled, BankDetailsFormRightColumn, BankDetailsFormRow, BankDetailsFormRowLable, BankDetailsFormRowsWrapper, BankDetailsFormTitle, ForgotPasswordInputFieldRestyled, Subtitle, SurvayButtonsWrapper, SurvayQuestion } from './style-bank-details';
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
{/* <SurvayQuestion>Bank details</SurvayQuestion> */}
<BankDetailsFormTitle>Bank details</BankDetailsFormTitle>

<Box
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <ForgotPasswordInputFieldRestyled
              id="forgot-password-form-email"
              fullWidth
              label="Email"
              // size={InputSize}
              variant="outlined"
              error={!!fieldState.error?.message || manualError}
              helperText={manualError || fieldState.error?.message}
              value={field.value || ''}
              onChange={field.onChange}
            />
          )}
        /> */}
        <BankDetailsFormRowsWrapper>
        <BankDetailsFormRow>
        <BankDetailsFormRowLable>
          Sending Institution
        </BankDetailsFormRowLable>

      <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <BankDetailsFormFieldRestyled
              id="forgot-password-form-email"
              fullWidth
              label="Required (Max 64 characters)"
              // size={InputSize}
              variant="outlined"
              error={!!fieldState.error?.message || manualError}
              helperText={manualError || fieldState.error?.message}
              value={field.value || ''}
              onChange={field.onChange}
            />
          )}
        /> 
        </BankDetailsFormRow>
        {/* Account Number
Optional */}
        <BankDetailsFormRow>
        <BankDetailsFormRowLable>
          Account Number
        </BankDetailsFormRowLable>

      <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <BankDetailsFormFieldRestyled
              id="forgot-password-form-email"
              fullWidth
              label="Optional"
              // size={InputSize}
              variant="outlined"
              error={!!fieldState.error?.message || manualError}
              helperText={manualError || fieldState.error?.message}
              value={field.value || ''}
              onChange={field.onChange}
            />
          )}
        /> 
        </BankDetailsFormRow>

{/* Account Nickname
Required (5-55 characters) */}
        <BankDetailsFormRow>
        <BankDetailsFormRowLable>
          Account Nickname
        </BankDetailsFormRowLable>

      <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <BankDetailsFormFieldRestyled
              id="forgot-password-form-email"
              fullWidth
              label="Required (5-55 characters)"
              // size={InputSize}
              variant="outlined"
              error={!!fieldState.error?.message || manualError}
              helperText={manualError || fieldState.error?.message}
              value={field.value || ''}
              onChange={field.onChange}
            />
          )}
        /> 
        </BankDetailsFormRow>

<BankDetailsFormRow>
  <P>
  While some of the fields above are markered optional, we recommended that you enter them if possible.
  This helps us match your deposit notification to the actual deposited funds.
  </P>
</BankDetailsFormRow>

<BankDetailsFormDevider/>

<BankDetailsFormBlockTitle>I will be sending the folowwing amount:</BankDetailsFormBlockTitle>

{/* Deposit Amount 
Required
USD
Makethis a recurring transation? */}

<BankDetailsFormRow>
        <BankDetailsFormRowLable>
          Deposit Amount
        </BankDetailsFormRowLable>

<BankDetailsFormRightColumn>
<Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <BankDetailsFormFieldRestyled
              id="forgot-password-form-email"
              fullWidth
              label="Required"
              // size={InputSize}
              variant="outlined"
              error={!!fieldState.error?.message || manualError}
              helperText={manualError || fieldState.error?.message}
              value={field.value || ''}
              onChange={field.onChange}
            />
          )}
        /> 

<Controller
          control={control}
          name="isAccepted"
          render={({ field, fieldState }) => {
            const { value: fieldValue, onChange } = field;
            return (
              <FormControl error={!!fieldState.error?.message}>
                <LabelTextRestyled
                  id="reg-form-accepted"
                  label="Make this a recurring transation?"
                  control={
                    <Checkbox
                      // checked={fieldValue}
                      onChange={onChange}
                      id="reg-form-checkbox"
                      color={fieldState.error ? 'error' : 'secondary'}
                      // size={InputSize}
                    />
                  }
                  labelPlacement="end"
                />
                <AcceptedHelperTextRestyled>
                  {fieldState.error?.message}
                </AcceptedHelperTextRestyled>
              </FormControl>
            );
          }}
        />
</BankDetailsFormRightColumn>

        </BankDetailsFormRow>

</BankDetailsFormRowsWrapper>


        {/* <ButtonRestyled
          type="submit"
          id="forgot-password-form-button"
          variant="contained"
          fullWidth
          // size={ButtonSize}
          color="primary"
        >
          Send email
        </ButtonRestyled> */}
        {/* <BankDetailsFormButtonsWrapper> */}
          <PrimaryButton
            type="submit"
            size="large"
            variant="contained"
            id="forgot-password-form-button"
            // disabled={value === ''}
          >
            add new method
          </PrimaryButton>
        {/* </BankDetailsFormButtonsWrapper> */}
      </Box>


{/* <SurvayButtonsWrapper>
          <PrimaryButton
            type="submit"
            size="large"
            variant="contained"
            // disabled={value === ''}
          >
            add new method
          </PrimaryButton>
        </SurvayButtonsWrapper> */}
          </SurvayPartQuestionsWrapper>
        </SurvayWrapper>
      </Container>
    </MainBox>
  );
}
