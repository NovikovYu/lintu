'use client';
import * as React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { useRouter } from 'next/navigation';
// import { signIn as nextAuthSingIn } from 'next-auth/react';
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { signIn } from '@/actions/actions';
import { setAccessKey } from '@/store/slices/sessionSlice';

import {
  ForgotPasswordInputLabelRestyled,
  SendIconButtonRestyled,
  SignInBoxRestyled,
  SignInFormRestyled,
  SignInInputPasswordRestyled,
  SignInLoadingButtonRestyled,
  SignUpButtonRestyled,
} from './style-sign-in';
import {
  CloseIconButtonRestyled,
  HeadingFormRestyled,
  InputFieldRestyled,
  PasswordHelperTextRestyled,
} from '../sign-up/style-sign-up-form';
import saveSessionToLocalStorage from '../utils/session/saveSessionToLocalStorage';
import { signInSchema } from '../utils/validation/common-validation';

export type SignInFormTypes = {
  email: string;
  password: string;
};

interface Props {
  handleCloseSignInModal: () => void;
  handleOpenSignUpModal: () => void;
  handleOpenForgotPasswordModal: () => void;
  isMobile: boolean;
}

const SignInForm = ({
  handleCloseSignInModal,
  handleOpenSignUpModal,
  handleOpenForgotPasswordModal,
  isMobile,
}: Props) => {
  const InputSize = isMobile ? 'small' : 'medium';
  const ButtonSize = isMobile ? 'small' : 'large';
  const [isLoading, setIsLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const { handleSubmit, control, setError } = useForm<SignInFormTypes>({
    mode: 'onChange',
    resolver: yupResolver(signInSchema),
  });

  const { errors, isValid } = useFormState({
    control,
  });

  const onSubmit: SubmitHandler<SignInFormTypes> = async (data) => {
    if (isValidForm(data)) {
      const signInResult = await signIn(data, setIsLoading, setError);

      if (signInResult?.data?.access) {
        try {
          saveSessionToLocalStorage(signInResult.data);
          dispatch(setAccessKey(signInResult.data.access));
          // 24 12 2023 next-auth was disabled. Because I didn’t work in production
          // const authRes = await nextAuthSingIn('credentials', {
          //   name: signInResult.data.access,
          //   redirect: false,
          // });
          // if (authRes && !authRes.error) {
          //   handleCloseSignInModal();
          //   router.push('/portfolios');
          // } else {
          //   console.error('Auth error:', authRes);
          // }
        } catch (e) {
          console.error('Sign in error:', e);
        }

        handleCloseSignInModal();
        router.push('/portfolios');
      }
    } else errors;
  };

  const isValidForm = (data: SignInFormTypes) => signInSchema.isValidSync(data);

  const ControlForms = () => {
    handleOpenSignUpModal();
    handleCloseSignInModal();
  };

  const ForgotPasswordForm = () => {
    handleCloseSignInModal();
    handleOpenForgotPasswordModal();
  };

  return (
    <SignInFormRestyled>
      <SignInBoxRestyled>
        <HeadingFormRestyled>Sign in</HeadingFormRestyled>
        <IconButton aria-label="Close form" onClick={handleCloseSignInModal}>
          <CloseIconButtonRestyled />
        </IconButton>
      </SignInBoxRestyled>
      <Box
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <InputFieldRestyled
              id="auth-form-email"
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
        <Controller
          control={control}
          name="password"
          render={({ field, fieldState }) => {
            const { value: fieldValue, onChange } = field;
            return (
              <SignInInputPasswordRestyled
                id="auth-form-password"
                fullWidth
                variant="outlined"
                error={!!fieldState.error?.message}
                size={InputSize}
              >
                <InputLabel
                  htmlFor="auth-form-password"
                  id="auth-form-password"
                >
                  Password
                </InputLabel>
                <OutlinedInput
                  id="auth-form-password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={fieldValue || ''}
                  onChange={onChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOff
                            fontSize={isMobile ? 'small' : 'medium'}
                          />
                        ) : (
                          <Visibility
                            fontSize={isMobile ? 'small' : 'medium'}
                          />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <PasswordHelperTextRestyled>
                  {fieldState.error?.message}
                </PasswordHelperTextRestyled>
                <PasswordHelperTextRestyled error={false}>
                  The password must be more than 8 characters and contain at
                  least one capital letter, a special sign !@#$%^&* and a number
                </PasswordHelperTextRestyled>
              </SignInInputPasswordRestyled>
            );
          }}
        />
        <ForgotPasswordInputLabelRestyled
          htmlFor="auth-forgot-password"
          id="auth-form-forgot-password"
          onClick={ForgotPasswordForm}
        >
          Forgot a password?
        </ForgotPasswordInputLabelRestyled>
        <SignInLoadingButtonRestyled
          loading={isLoading}
          loadingPosition="end"
          type="submit"
          variant="contained"
          fullWidth
          size={ButtonSize}
          color="primary"
          endIcon={<SendIconButtonRestyled />}
        >
          <span>sign in</span>
        </SignInLoadingButtonRestyled>
        <SignUpButtonRestyled
          type="button"
          id="auth-form-button"
          fullWidth
          size={ButtonSize}
          onClick={ControlForms}
        >
          sign up
        </SignUpButtonRestyled>
      </Box>
    </SignInFormRestyled>
  );
};

export default SignInForm;
