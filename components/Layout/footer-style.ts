import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

export const FooterWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.grey[800],
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(3, 2, 4, 2),
  },
}));

export const FooterInner = styled(Box)(({ theme }) => ({
  maxWidth: theme.breakpoints.values.lg,
  margin: '0 auto',

  [theme.breakpoints.up('xs')]: {
    padding: theme.spacing(0, 6),
  },
}));

export const FooterLogoLink = styled(Link)(({ theme }) => ({
  display: 'block',
  marginBottom: theme.spacing(1.5),
}));

export const FooterLink = styled(Link)(({ theme }) => ({
  display: 'block',
  color: theme.palette.primary.contrastText,
  textTransform: 'capitalize',
  fontWeight: theme.typography.caption.fontWeight,
  fontSize: theme.typography.caption.fontSize,
  letterSpacing: theme.typography.caption.letterSpacing,
}));
