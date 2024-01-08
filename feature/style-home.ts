import { Box, Button, FormControl } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ChangePasswordBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(15),
  width: 450,
  minHeight: 202,
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(11),
    width: 300,
    minHeight: 102,
  },
}));

export const ChangePasswordFormBox = styled(Box)(({ theme }) => ({
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

export const ChangePasswordHeading = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  marginBottom: theme.spacing(4),
  fontSize: theme.typography.h3.fontSize,
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(2.5),
    fontSize: theme.typography.h4.fontSize,
  },
}));

export const InputChangePassword = styled(FormControl)(({ theme }) => ({
  marginBottom: theme.spacing(1.5),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(1.5),
    input: {
      fontSize: theme.typography.h6.fontSize,
    },
    label: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
}));

export const ChangePasswordMessageBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(15),
  marginLeft: theme.spacing(10),
  width: 350,
  minHeight: 202,
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(11),
    width: 260,
    minHeight: 102,
  },
}));

export const ChangePasswordMessageHeading = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  marginBottom: theme.spacing(4),
  fontSize: theme.typography.h3.fontSize,
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(2.5),
    fontSize: theme.typography.h4.fontSize,
  },
}));

export const ChangePasswordButtonStyle = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.h6.fontSize,
    marginTop: theme.spacing(1),
  },
}));

export const ConfirmEmailBoxWrapperRestyle = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(20),
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: theme.palette.common.white,
  width: 760,
  height: 'auto',
  [theme.breakpoints.down('md')]: {
    width: 560,
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(11),
    marginBottom: theme.spacing(7),
    width: 344,
  },
}));

export const ConfirmEmailBoxRestyle = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  marginRight: theme.spacing(6),
  marginLeft: theme.spacing(6),
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(0.875),
    marginBottom: theme.spacing(0.875),
    marginRight: theme.spacing(4),
    marginLeft: theme.spacing(4),
  },
}));

export const ConfirmEmailContentWrapperRestyle = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const ConfirmEmailImgWrapperRestyle = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(3),
  },
}));

export const ConfirmEmailHeadingRestyle = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  marginTop: theme.spacing(1.5),
  marginBottom: theme.spacing(1),
  fontSize: theme.typography.h5.fontSize,
  fontWeight: theme.typography.h5.fontWeight,
  lineHeight: theme.typography.h5.lineHeight,
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(1),
    fontSize: theme.typography.h5.fontSize,
  },
}));

export const ConfirmEmailMessageRestyle = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.subtitle2.fontSize,
  letterSpacing: theme.typography.subtitle2.letterSpacing,
  textAlign: 'center',
  lineHeight: theme.typography.subtitle2.lineHeight,
  width: 480,
  height: 'auto',
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.subtitle2.fontSize,
    width: '100%',
    height: 'auto',
  },
}));

export const ConfirmEmailButtonRestyle = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  marginTop: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
}));
