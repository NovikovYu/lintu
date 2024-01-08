import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import { P } from '@/components/CommonComponents/Common-сomponents-style';

export const ChangePasswordBox = styled(Box)(({ theme }) => ({
  marginLeft: 'auto',
  marginRight: 'auto',
  width: 450,
  minHeight: 202,
  [theme.breakpoints.down('sm')]: {
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

export const ChangePasswordTitle = styled(P)(({ theme }) => ({
  marginTop: '0',
  marginBottom: theme.spacing(3),
  color: theme.palette.text.primary,
  fontSize: theme.typography.h5.fontSize,
  lineHeight: '1.2',
  fontWeight: theme.typography.h1.fontWeight,

  [theme.breakpoints.up('lg')]: {
    fontSize: theme.typography.h4.fontSize,
  },
}));

export const ChangePasswordSubtitle = styled(P)(({ theme }) => ({
  marginTop: '0',
  marginBottom: theme.spacing(3),
  color: theme.palette.text.secondary,
  fontSize: theme.typography.body2.fontSize,

  [theme.breakpoints.up('lg')]: {
    marginBottom: theme.spacing(4),
  },
}));

export const ButtonRestyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.subtitle2.fontSize,
  },
}));
