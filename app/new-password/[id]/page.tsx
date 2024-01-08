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
import { Container, useMediaQuery, useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from 'react-hook-form';

import { saveNewPassword } from '@/actions/actions';
import {
  MainBox,
  P,
} from '@/components/CommonComponents/Common-сomponents-style';
import { IQuestion } from '@/components/Survey/Question';
import {
  InputPasswordRestyled,
  PasswordHelperTextRestyled,
} from '@/feature/sign-up/style-sign-up-form';
import { schemaNewPasswordValidation } from '@/feature/utils/validation/common-validation';

import {
  ChangePasswordBox,
  ChangePasswordFormBox,
  ButtonRestyled,
  ChangePasswordTitle,
} from './style-new-password';

type Props = {
  params: {
    id: string;
  };
};

// type NewPasswordFormTypes = {
//   password: string;
//   repeatPassword: string;
// };

// export type NewPasswordRequestTypes = {
//   password: string;
//   token: string;
// };

export type NewPasswordFormTypes = {
  password: string;
  repeatPassword: string;
  token?: string;
};

// export type NewPasswordRequestTypes = {
//   password: string;
//   token: string;
// };

export default function NewPassword({ params: { id } }: Props) {
  const router = useRouter();
  const unickToken = id ?? '';
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const ButtonSize = isMobile ? 'small' : 'large';
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [showRepeatPassword, setShowRepeatPassword] = React.useState(false);
  const handleClickShowRepeatPassword = () =>
    setShowRepeatPassword((show) => !show);

  const handleMouseDownRepeatPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const { handleSubmit, control, setError } = useForm<NewPasswordFormTypes>({
    mode: 'onChange',
    resolver: yupResolver<NewPasswordFormTypes>(schemaNewPasswordValidation),
  });

  const { errors, isValid } = useFormState({
    control,
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit: SubmitHandler<NewPasswordFormTypes> = async (data) => {
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
      // const mockRegistrationData = {
      //   first_name: 'Ivan',
      //   last_name: 'Ivanov',
      //   email: 'g' + randomPhoneEnd + '@gmail.com',
      //   phone_number: '+7921' + randomPhoneEnd,
      //   password: 'Lintu4ever!',
      //   repeatPassword: 'Lintu4ever!',
      //   isAccepted: true,
      //   country: 'Kazakhstan',
      // };
      const saveNewPasswordResult = await saveNewPassword(
        {
          password: data.password,
          repeatPassword: data.password,
          token: unickToken,
        },
        setIsLoading,
        setError,
      );

      if (saveNewPasswordResult?.data) {
        router.push('/new-password-success');
      }
    } else errors;
  };

  const isValidForm = (data: NewPasswordFormTypes) =>
    schemaNewPasswordValidation.isValidSync(data);

  return (
    <MainBox>
      <Container
        sx={{ maxWidth: theme.breakpoints.values.containersMd }}
        maxWidth={false}
      >
        <ChangePasswordBox>
          <ChangePasswordFormBox>
            <ChangePasswordTitle variant="h1">
              Change password
            </ChangePasswordTitle>
            <Box
              component="form"
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Controller
                control={control}
                name="password"
                render={({ field, fieldState }) => {
                  const { value: fieldValue, onChange } = field;
                  return (
                    <InputPasswordRestyled
                      id="change-form-password"
                      fullWidth
                      variant="outlined"
                      error={!!fieldState.error?.message}
                      size={isMobile ? 'small' : 'medium'}
                    >
                      <InputLabel
                        htmlFor="auth-form-password"
                        id="auth-form-password"
                      >
                        Password
                      </InputLabel>
                      <OutlinedInput
                        id="change-form-password"
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
                      <PasswordHelperTextRestyled error={false}>
                        The password must be more than 8 characters and contain
                        at least one capital letter, a special sign !@#$%^&* and
                        a number
                      </PasswordHelperTextRestyled>
                      <PasswordHelperTextRestyled>
                        {fieldState.error?.message}
                      </PasswordHelperTextRestyled>
                    </InputPasswordRestyled>
                  );
                }}
              />
              <Controller
                control={control}
                name="repeatPassword"
                render={({ field, fieldState }) => {
                  const { value: fieldValue, onChange } = field;
                  return (
                    <InputPasswordRestyled
                      fullWidth
                      variant="outlined"
                      error={!!fieldState.error?.message}
                      size={isMobile ? 'small' : 'medium'}
                    >
                      <InputLabel htmlFor="reg-form-repeat-password">
                        Repeat Password
                      </InputLabel>
                      <OutlinedInput
                        id="change-form-repeat-password"
                        label="Repeat Password"
                        type={showRepeatPassword ? 'text' : 'password'}
                        autoComplete="current-repeat-password"
                        value={fieldValue || ''}
                        onChange={onChange}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowRepeatPassword}
                              onMouseDown={handleMouseDownRepeatPassword}
                              edge="end"
                            >
                              {showRepeatPassword ? (
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
                    </InputPasswordRestyled>
                  );
                }}
              />
              <ButtonRestyled
                type="submit"
                id="change-password-form-button"
                variant="contained"
                fullWidth
                size={ButtonSize}
              >
                change password
              </ButtonRestyled>
            </Box>
          </ChangePasswordFormBox>
        </ChangePasswordBox>
      </Container>
    </MainBox>
  );
}
