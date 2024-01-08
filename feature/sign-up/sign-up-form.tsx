import * as React from 'react';

import 'react-phone-number-input/style.css';
import 'react-phone-input-2/lib/material.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Checkbox,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { signUp } from '@/actions/actions';
import { setUserEmail } from '@/store/slices/userEmailSlice';

import {
  AcceptedHelperTextRestyled,
  ButtonRestyled,
  CloseIconButtonRestyled,
  DataInputsRestyled,
  HeadingFormRestyled,
  InputFieldRestyled,
  InputFormControlRestyled,
  InputPasswordRestyled,
  LabelTextRestyled,
  PasswordHelperTextRestyled,
  PhoneHelperTextRestyled,
  PhoneInputRestyled,
  SignUpBoxFormRestyled,
  SignUpBoxRestyled,
} from './style-sign-up-form';
import { SignInLoadingButtonRestyled } from '../sign-in/style-sign-in';
import { signAppSchema } from '../utils/validation/common-validation';

export type SignUpFormTypes = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
  repeatPassword: string;
  isAccepted: boolean;
  country?: string;
};

type Country = {
  countryCode: string;
  dialCode: string;
  format: string;
  name: string;
};

interface Props {
  handleCloseSignUpModal: () => void;
  isMobile: boolean;
}

const EXCLUDE_COUNTRIES = ['ru', 'by'];

const SignUpForm = ({ handleCloseSignUpModal, isMobile }: Props) => {
  const InputSize = isMobile ? 'small' : 'medium';
  const ButtonSize = isMobile ? 'small' : 'large';
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [showRepeatPassword, setShowRepeatPassword] = React.useState(false);
  const handleClickShowRepeatPassword = () =>
    setShowRepeatPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };
  const [countryName, setCountryName] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const dispatch = useDispatch();

  const { handleSubmit, control, setError } = useForm<SignUpFormTypes>({
    mode: 'onChange',
    resolver: yupResolver<SignUpFormTypes>(signAppSchema),
    defaultValues: {
      isAccepted: false,
    },
  });

  const { errors, isValid } = useFormState({
    control,
  });

  const onSubmit: SubmitHandler<SignUpFormTypes> = async (data) => {
    if (isValidForm(data)) {
      const dataWithCountry = { ...data, country: countryName };
      const signUpResult = await signUp(
        dataWithCountry,
        setIsLoading,
        setError,
      );

      if (signUpResult?.data?.id) {
        dispatch(setUserEmail(signUpResult.data.email));
        handleCloseSignUpModal();
        router.push('/confirm-email');
      }
    } else errors;
  };

  const isValidForm = (data: SignUpFormTypes) =>
    signAppSchema.isValidSync(data);
  return (
    <SignUpBoxFormRestyled>
      <SignUpBoxRestyled>
        <HeadingFormRestyled>Sign up</HeadingFormRestyled>
        <IconButton aria-label="Close form" onClick={handleCloseSignUpModal}>
          <CloseIconButtonRestyled />
        </IconButton>
      </SignUpBoxRestyled>
      <Box
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <DataInputsRestyled>
          <Controller
            control={control}
            name="first_name"
            render={({ field, fieldState }) => (
              <InputFieldRestyled
                id="reg-form-name"
                fullWidth
                label="First Name"
                size={InputSize}
                variant="outlined"
                value={field.value || ''}
                error={!!fieldState.error?.message}
                helperText={fieldState.error?.message}
                onChange={field.onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="last_name"
            render={({ field, fieldState }) => (
              <InputFieldRestyled
                id="reg-form-last-name"
                fullWidth
                label="Last Name"
                size={InputSize}
                variant="outlined"
                error={!!fieldState.error?.message}
                helperText={fieldState.error?.message}
                value={field.value || ''}
                onChange={field.onChange}
              />
            )}
          />
        </DataInputsRestyled>
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <InputFieldRestyled
              id="reg-form-email"
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
          name="phone_number"
          render={({ field, fieldState }) => {
            const { value: fieldValue, onChange } = field;

            const handleCountryChange = (value: string, country: Country) => {
              setCountryName(country?.name || '');
              onChange(value);
            };
            return (
              <InputFormControlRestyled
                error={!!fieldState.error?.message}
                fullWidth
              >
                <PhoneInputRestyled
                  excludeCountries={EXCLUDE_COUNTRIES}
                  defaultErrorMessage={fieldState.error?.message}
                  value={fieldValue}
                  inputClass={
                    !!fieldState.error?.message ? 'invalid-number' : ''
                  }
                  onChange={handleCountryChange}
                  inputStyle={{ width: '100%' }}
                />
                <PhoneHelperTextRestyled>
                  {fieldState.error?.message}
                </PhoneHelperTextRestyled>
              </InputFormControlRestyled>
            );
          }}
        />
        <Controller
          control={control}
          name="password"
          render={({ field, fieldState }) => {
            const { value: fieldValue, onChange } = field;
            return (
              <InputPasswordRestyled
                fullWidth
                variant="outlined"
                error={!!fieldState.error?.message}
                size={InputSize}
              >
                <InputLabel htmlFor="reg-form-password">Password</InputLabel>
                <OutlinedInput
                  id="reg-form-password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={fieldValue || ''}
                  onChange={onChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        id="reg-form-password-eye"
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
                  The password must be more than 8 characters and contain at
                  least one capital letter, a special sign !@#$%^&* and a number
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
                size={InputSize}
              >
                <InputLabel htmlFor="reg-form-repeat-password">
                  Repeat Password
                </InputLabel>
                <OutlinedInput
                  id="reg-form-repeat-password"
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
                        onMouseDown={handleMouseDownPassword}
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
        <Controller
          control={control}
          name="isAccepted"
          render={({ field, fieldState }) => {
            const { value: fieldValue, onChange } = field;
            return (
              <FormControl error={!!fieldState.error?.message}>
                <LabelTextRestyled
                  id="reg-form-accepted"
                  label="I apply terms&conditions"
                  control={
                    <Checkbox
                      checked={fieldValue}
                      onChange={onChange}
                      id="reg-form-checkbox"
                      color={fieldState.error ? 'error' : 'secondary'}
                      size={InputSize}
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

        <SignInLoadingButtonRestyled
          loading={isLoading}
          type="submit"
          variant="contained"
          fullWidth
          size={ButtonSize}
          color="primary"
        >
          <span>SIGN UP </span>
        </SignInLoadingButtonRestyled>
      </Box>
    </SignUpBoxFormRestyled>
  );
};

export default SignUpForm;
