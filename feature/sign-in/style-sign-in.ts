import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const SignInBoxRestyled = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const SignInFormRestyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  marginRight: theme.spacing(6),
  marginLeft: theme.spacing(6),
  gap: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(3.5),
    marginLeft: theme.spacing(3.5),
    gap: theme.spacing(1.5),
  },
}));

export const SignInInputPasswordRestyled = styled(FormControl)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(0),
    input: {
      fontSize: theme.typography.subtitle2.fontSize,
    },
    label: {
      fontSize: theme.typography.subtitle2.fontSize,
    },
  },
}));

export const SignInLoadingButtonRestyled = styled(LoadingButton)(
  ({ theme }) => ({
    color: theme.palette.primary.contrastText,
    '&.Mui-disabled': {
      backgroundColor: theme.palette.primary.main,
    },
    '& .MuiLoadingButton-loadingIndicator': {
      color: theme.palette.primary.contrastText,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.subtitle2.fontSize,
    },
  }),
);

export const SignUpButtonRestyled = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.subtitle2.fontSize,
  },
}));

export const SendIconButtonRestyled = styled(SendIcon)(() => ({
  display: 'none',
  '&.MuiLoadingButton-endIcon': {
    display: 'none',
  },
}));

export const ForgotPasswordBoxRestyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  marginRight: theme.spacing(6),
  marginLeft: theme.spacing(6),
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2.5),
    marginRight: theme.spacing(4),
    marginLeft: theme.spacing(4),
  },
}));

export const ForgotPasswordInputLabelRestyled = styled(InputLabel)(
  ({ theme }) => ({
    fontSize: theme.typography.body2.fontSize,
    textAlign: 'end',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.caption.fontSize,
    },
  }),
);

export const ForgotPasswordFormRestyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(0),
    marginBottom: theme.spacing(0),
  },
}));

export const ForgotPasswordHeadingFormRestyled = styled(Typography)(
  ({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: theme.typography.h5.fontSize,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.h6.fontSize,
      gap: theme.spacing(0),
      marginBottom: theme.spacing(0),
    },
  }),
);

export const ForgotPasswordIconButtonRestyled = styled(IconButton)(
  ({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      fontSize: 'large',
      '& .MuiSvgIcon-root': {
        fontSize: 'large',
      },
    },
  }),
);

export const ForgotPasswordInputFieldRestyled = styled(TextField)(
  ({ theme }) => ({
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(1.7),
      input: {
        fontSize: theme.typography.subtitle2.fontSize,
      },
      label: {
        fontSize: theme.typography.subtitle2.fontSize,
      },
      '.MuiFormHelperText-root.Mui-error': {
        fontSize: theme.typography.subtitle2.fontSize,
      },
    },
  }),
);
