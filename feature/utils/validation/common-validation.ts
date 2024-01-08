import * as yup from 'yup';
export const REG_EMAIL =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const REG_PASSWORD =
  /^.*((?=.*[!@#$%^&*\:]))(?=.*\d)((?=.*[a-z]))((?=.*[A-Z])).*$/;
const ERROR_MESSAGE_INPUT_PASSWORD_FIELD = 'Input your password';
const ERROR_MESSAGE_PASSWORD_FIELD = 'Password must be more then 8 characters';

export const schemaEmailValidation = yup.object().shape({
  email: yup
    .string()
    .matches(REG_EMAIL, 'Invalid email')
    .required('Input your email'),
});

export const schemaPasswordValidation = yup.object().shape({
  password: yup
    .string()
    .matches(REG_PASSWORD, ' ')
    .min(8, ERROR_MESSAGE_PASSWORD_FIELD)
    .required(ERROR_MESSAGE_INPUT_PASSWORD_FIELD),
});

export const schemaRepeatPasswordValidation = yup.object().shape({
  repeatPassword: yup
    .string()
    .min(8, ERROR_MESSAGE_PASSWORD_FIELD)
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required(ERROR_MESSAGE_INPUT_PASSWORD_FIELD),
});

export const schemaTokenValidation = yup.object().shape({
  token: yup.string().min(3, ERROR_MESSAGE_PASSWORD_FIELD),
});

export const signAppSchema = yup
  .object()
  .shape({
    first_name: yup
      .string()
      .required('Input your name')
      .matches(/^([^0-9]*)$/, 'Name should not contain numbers')
      .min(2, 'Name must be more then 2 characters')
      .max(50, 'Name must be more then 50 characters'),
    last_name: yup
      .string()
      .required('Input your last name')
      .matches(/^([^0-9]*)$/, 'Last Name should not contain numbers')
      .min(2, 'Last name must be more then 2 characters')
      .max(50, 'Last name must be less than 50 characters'),
    phone_number: yup.string().required('Input your number'),
    isAccepted: yup
      .bool()
      .required('You need to agree with the terms&conditions')
      .oneOf([true], 'You need to agree with the terms&conditions'),
    country: yup.string(),
  })
  .concat(schemaEmailValidation)
  .concat(schemaPasswordValidation)
  .concat(schemaRepeatPasswordValidation);

export const schemaNewPasswordValidation = schemaPasswordValidation
  .concat(schemaRepeatPasswordValidation)
  .concat(schemaTokenValidation);

export const signInSchema = schemaEmailValidation.concat(
  schemaPasswordValidation,
);
