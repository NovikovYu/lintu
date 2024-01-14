import { ButtonProps, List, ListItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import {
  PrimaryButton,
  SecondaryButton,
  P,
} from '../../components/CommonComponents/Common-сomponents-style';

export const PrimaryButtonForPortfolioCard = styled(PrimaryButton)<ButtonProps>(
  ({ theme }) => ({
    marginTop: 'auto',
    textTransform: 'uppercase',
  }),
);

export const SecondaryButtonForPortfolioCard = styled(
  SecondaryButton,
)<ButtonProps>(({ theme }) => ({
  marginTop: 'auto',
  textTransform: 'uppercase',
}));

export const SettingsTitle = styled(Typography)(({ theme }) => ({
  marginTop: '0',
  marginBottom: theme.spacing(1),
  color: theme.palette.text.primary,
  fontSize: theme.typography.h5.fontSize,
  lineHeight: '1.2',
  fontWeight: theme.typography.h1.fontWeight,

  [theme.breakpoints.up('lg')]: {
    fontSize: theme.typography.h4.fontSize,
  },
}));

export const SettingsCardTitle = styled(Typography)(({ theme }) => ({
  marginTop: '0',
  marginBottom: '0',
  color: theme.palette.text.primary,
  fontSize: theme.typography.h6.fontSize,
  lineHeight: '1.35',
  fontWeight: theme.typography.h1.fontWeight,

  [theme.breakpoints.up('lg')]: {
    fontSize: theme.typography.h5.fontSize,
  },
}));

export const SettingsSubtitle = styled(P)(({ theme }) => ({
  marginTop: '0',
  marginBottom: theme.spacing(3),
  color: theme.palette.text.secondary,
  fontSize: theme.typography.body2.fontSize,

  [theme.breakpoints.up('lg')]: {
    marginBottom: theme.spacing(4),
  },
}));

export const SettingsCardsList = styled(List)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: theme.spacing(3.25),
  margin: '0',
  padding: '0',
  listStyle: 'none',

  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
}));

export const SettingsCardItem = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  padding: theme.spacing(3, 2),
  backgroundColor: theme.palette.common.white,
  boxShadow:
    '0px 2px 4px -2px rgba(24, 39, 75, 0.12), 0px 4px 4px -2px rgba(24, 39, 75, 0.08)',
  borderRadius: theme.spacing(0.5),
}));
