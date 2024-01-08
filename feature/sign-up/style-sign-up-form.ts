import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import PhoneInput from 'react-phone-input-2';

export const SignUpBoxRestyled = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const SignUpBoxFormRestyled = styled(Box)(({ theme }) => ({
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

export const DataInputsRestyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(0),
  },
}));

export const HeadingFormRestyled = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h5.fontSize,
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.h6.fontSize,
  },
}));

export const CloseIconButtonRestyled = styled(CloseIcon)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: 'large',
  },
}));

export const InputFieldRestyled = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(1.5),
    input: {
      fontSize: theme.typography.subtitle2.fontSize,
    },
    label: {
      fontSize: theme.typography.subtitle2.fontSize,
    },
    '.MuiFormHelperText-root.Mui-error': {
      fontSize: theme.typography.caption.fontSize,
    },
  },
}));

export const InputFormControlRestyled = styled(FormControl)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(1.5),
  },
}));

export const InputPasswordRestyled = styled(FormControl)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(1),
    input: {
      fontSize: theme.typography.subtitle2.fontSize,
    },
    label: {
      fontSize: theme.typography.subtitle2.fontSize,
    },
  },
}));

export const PhoneInputRestyled = styled(PhoneInput)(({ theme }) => ({
  '& .selected-flag:focus': {
    outline: `${theme.spacing(0.125)} solid ${theme.palette.primary.main}`,
    borderRadius: theme.spacing(0.625),
  },
  '& .react-tel-input .selected-flag .arrow': {
    borderTop: `${theme.spacing(0.5)} solid ${theme.palette.primary.main}`,
  },
  '&.react-tel-input .form-control:focus, &.react-tel-input .form-control:hover':
    {
      borderColor: theme.palette.primary.main,
      boxShadow: theme.palette.shadows[200],
    },
  '&.react-tel-input .form-control.invalid-number:focus': {
    borderColor: theme.palette.primary.main,
    boxShadow: theme.palette.shadows[200],
  },
  [theme.breakpoints.down('sm')]: {
    '&.react-tel-input .form-control': {
      fontSize: theme.typography.subtitle2.fontSize,
      height: theme.spacing(3.75),
    },
    '&.react-tel-input .special-label': {
      fontSize: theme.typography.subtitle2.fontSize,
    },
  },
}));

export const PhoneHelperTextRestyled = styled(FormHelperText)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.caption.fontSize,
  },
}));

export const AcceptedHelperTextRestyled = styled(FormHelperText)(
  ({ theme }) => ({
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.caption.fontSize,
    },
  }),
);

export const PasswordHelperTextRestyled = styled(FormHelperText)(
  ({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.overline.fontSize,
      textAlign: 'justify',
    },
  }),
);

export const LabelTextRestyled = styled(FormControlLabel)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    '& .MuiFormControlLabel-label': {
      fontSize: theme.typography.subtitle2.fontSize,
    },
  },
}));

export const ButtonRestyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.subtitle2.fontSize,
  },
}));

export const SendingMessageBoxWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  marginRight: theme.spacing(6),
  marginLeft: theme.spacing(6),
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    marginRight: theme.spacing(4),
    marginLeft: theme.spacing(4),
  },
}));

export const SendingMessageContentBoxWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(0),
  },
}));

export const MessageRestyled = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    fontWeight: theme.typography.body1.fontWeight,
    fontSize: theme.typography.body1.fontSize,
    letterSpacing: theme.typography.body1.letterSpacing,
    marginBottom: theme.spacing(1),
    textAlign: 'left',
  },
}));

export const ButtonMessageRestyled = styled(Button)(({ theme }) => ({
  textTransform: 'uppercase',
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.subtitle2.fontSize,
    marginTop: theme.spacing(1),
  },
}));
