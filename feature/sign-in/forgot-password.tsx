import * as React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from 'react-hook-form';

import { resetPassword, signUp } from '@/actions/actions';

import {
  ForgotPasswordBoxRestyled,
  ForgotPasswordFormRestyled,
  ForgotPasswordHeadingFormRestyled,
  ForgotPasswordIconButtonRestyled,
  ForgotPasswordInputFieldRestyled,
} from './style-sign-in';
import { ButtonRestyled } from '../sign-up/style-sign-up-form';
import { schemaEmailValidation } from '../utils/validation/common-validation';

interface Props {
  handleCloseForgotPasswordModal: () => void;
  handleOpenForgotPasswordMessageModal: () => void;
  isMobile: boolean;
}

export type ForgotPasswordFormTypes = {
  email: string;
};

const ForgotPasswordForm = ({
  handleCloseForgotPasswordModal,
  handleOpenForgotPasswordMessageModal,
  isMobile,
}: Props) => {
  const InputSize = isMobile ? 'small' : 'medium';
  const ButtonSize = isMobile ? 'small' : 'large';
  // const { handleSubmit, control, setError } = useForm<SignUpFormTypes>({
  //   mode: 'onChange',
  //   resolver: yupResolver<SignUpFormTypes>(signAppSchema),
  //   defaultValues: {
  //     isAccepted: false,
  //   },
  // });
  const { handleSubmit, control, setError } = useForm<ForgotPasswordFormTypes>({
    mode: 'onChange',
    resolver: yupResolver(schemaEmailValidation),
  });

  const { errors, isValid } = useFormState({
    control,
  });
  const [isLoading, setIsLoading] = React.useState(false);
  // console.log('0 >> isLoading >>', isLoading);

  const onSubmit: SubmitHandler<ForgotPasswordFormTypes> = async (data) => {
    // console.log('0 >> data.email >>', data.email);

    if (isValidForm(data)) {
      // // mock data
      // const randomPhone = () => {
      //   let result = '';
      //   for (let i = 0; i < 7; i++) {
      //     result += Math.floor(Math.random() * 10);
      //   }
      //   return result;
      // };
      // const randomPhoneEnd = randomPhone();
      // // console.log('1 >> randomPhoneEnd >>', randomPhoneEnd);

      // const mockRegistrationData = {
      //   first_name: 'Ivan',
      //   last_name: 'Ivanov',
      //   email: data.email,
      //   phone_number: '+7921' + randomPhoneEnd,
      //   password: 'Lintu4ever!',
      //   repeatPassword: 'Lintu4ever!',
      //   isAccepted: true,
      //   country: 'Kazakhstan',
      // };
      // const signUpResult = await signUp(
      const resetPasswordResult = await resetPassword(
        // mockRegistrationData,
        { email: data.email },
        setIsLoading,
        setError,
      );

      // console.log('2 >> signUpResult >>', signUpResult);

      if (resetPasswordResult?.data) {
        // console.log('3 >> signUpResult?.data?.id >>', signUpResult?.data?.id);

        handleCloseForgotPasswordModal();
        handleOpenForgotPasswordMessageModal();
      }
    } else errors;
  };

  const isValidForm = (data: ForgotPasswordFormTypes) =>
    schemaEmailValidation.isValidSync(data);

  return (
    <ForgotPasswordBoxRestyled>
      <ForgotPasswordFormRestyled>
        <ForgotPasswordHeadingFormRestyled>
          Forgot a password?
        </ForgotPasswordHeadingFormRestyled>
        <ForgotPasswordIconButtonRestyled
          aria-label="Close-form"
          onClick={handleCloseForgotPasswordModal}
        >
          <CloseIcon />
        </ForgotPasswordIconButtonRestyled>
      </ForgotPasswordFormRestyled>
      <Box
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <ForgotPasswordInputFieldRestyled
              id="forgot-password-form-email"
              fullWidth
              label="Email"
              size={InputSize}
              variant="outlined"
              error={!!fieldState.error?.message}
              helperText={fieldState.error?.message}
              value={field.value || ''}
              onChange={field.onChange}
            />
          )}
        />
        <ButtonRestyled
          type="submit"
          id="forgot-password-form-button"
          variant="contained"
          fullWidth
          size={ButtonSize}
          color="primary"
        >
          Send email
        </ButtonRestyled>
      </Box>
    </ForgotPasswordBoxRestyled>
  );
};
export default ForgotPasswordForm;
