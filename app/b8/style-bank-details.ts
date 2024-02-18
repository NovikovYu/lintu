import { Box, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

import { P } from '@/components/CommonComponents/Common-сomponents-style';

export const BankDetailsFormTitle = styled(P)(({ theme }) => ({
  // marginBottom: theme.spacing(1),
  // color: theme.palette.text.primary,

  // [theme.breakpoints.up('lg')]: {
  //   fontSize: '18px',
  // },
  marginTop: '0',
  marginBottom: theme.spacing(4),
  color: theme.palette.text.primary,
  fontSize: theme.typography.h6.fontSize,
  lineHeight: '1.35',
  fontWeight: theme.typography.h1.fontWeight,

  [theme.breakpoints.up('lg')]: {
    fontSize: theme.typography.h5.fontSize,
  },
}));

export const BankDetailsFormRowsWrapper = styled(Box)(({ theme }) => ({
  border: '1px solid blue',

  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),

  // marginBottom: theme.spacing(4),
}));
export const BankDetailsFormRow = styled(Box)(({ theme }) => ({
  border: '1px solid tomato',

  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  // marginBottom: theme.spacing(4),

  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',

    // fontSize: 'large',
    // '& .MuiSvgIcon-root': {
    //   fontSize: 'large',
    // },
  },
}));

export const BankDetailsFormRowLable = styled(P)(({ theme }) => ({
  border: '1px solid orange',
  width: '250px',
  margin: '0',

  // marginTop: '0',
  color: theme.palette.text.primary,
  // fontSize: theme.typography.h6.fontSize,
  // lineHeight: '1.35',
  fontWeight: theme.typography.h1.fontWeight,

  // [theme.breakpoints.up('lg')]: {
  //   fontSize: theme.typography.h5.fontSize,
  // },
}));

export const BankDetailsFormFieldRestyled = styled(TextField)(({ theme }) => ({
  // marginTop: theme.spacing(2),
  // marginBottom: theme.spacing(2),
  // [theme.breakpoints.down('sm')]: {
  //   marginBottom: theme.spacing(1.7),
  //   input: {
  //     fontSize: theme.typography.subtitle2.fontSize,
  //   },
  //   label: {
  //     fontSize: theme.typography.subtitle2.fontSize,
  //   },
  //   '.MuiFormHelperText-root.Mui-error': {
  //     fontSize: theme.typography.subtitle2.fontSize,
  //   },
  // },
}));
export const BankDetailsFormDevider = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.text.secondary}`,
}));

export const BankDetailsFormBlockTitle = styled(P)(({ theme }) => ({
  // marginBottom: theme.spacing(1),
  // color: theme.palette.text.primary,

  // [theme.breakpoints.up('lg')]: {
  //   fontSize: '18px',
  // },
  marginTop: '0',
  marginBottom: theme.spacing(4),
  color: theme.palette.text.primary,
  fontSize: theme.typography.h6.fontSize,
  lineHeight: '1.35',
  fontWeight: theme.typography.h1.fontWeight,

  [theme.breakpoints.up('lg')]: {
    fontSize: theme.typography.h5.fontSize,
  },
}));

export const BankDetailsFormRightColumn = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));
