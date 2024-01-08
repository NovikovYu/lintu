import { Box, Button, ButtonProps, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PrimaryButton = styled(Button)<ButtonProps>(({ theme }) => ({
  textTransform: 'uppercase',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

export const SecondaryButton = styled(Button)<ButtonProps>(({ theme }) => ({
  textTransform: 'uppercase',
  backgroundColor: theme.palette.grey['200'],
  color: theme.palette.secondary.contrastText,
}));

export const MainBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey['100'],
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(4.5),
  minHeight: '100vh',

  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(11),
  },

  [theme.breakpoints.up('lg')]: {
    paddingTop: theme.spacing(16),
  },
}));

export const P = styled(Typography)(({ theme }) => ({
  marginTop: '0',
  marginBottom: '0',
  color: theme.palette.text.secondary,
  fontSize: theme.typography.body2.fontSize,
  lineHeight: '1.6',
  letterSpacing: '0.1px',
  fontWeight: theme.typography.body1.fontWeight,
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  marginTop: '0',
  marginBottom: '0',
  color: theme.palette.lightBlue['700'],
  fontSize: theme.typography.body2.fontSize,
  lineHeight: '1.6',
  letterSpacing: '0.1px',
  fontWeight: theme.typography.body1.fontWeight,
  textDecoration: 'none',
}));
