import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import { P } from '../CommonComponents/Common-сomponents-style';

export const SurvayWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

export const SurvayInner = styled(Box)(({ theme }) => ({
  background: theme.palette.common.white,
  boxShadow: theme.palette.shadows[300],
  borderRadius: theme.spacing(0.5),
}));

export const SurvayPartTitleWrapper = styled(SurvayInner)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  padding: theme.spacing(4, 1.5),

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(3, 4),
  },
}));

export const SurvayPartQuestionsWrapper = styled(SurvayInner)(({ theme }) => ({
  padding: theme.spacing(4, 1.5),

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4),
  },
}));

export const SurvayPartTitleTitle = styled(P)(({ theme }) => ({
  marginTop: '0',
  color: theme.palette.text.primary,
  fontSize: theme.typography.h6.fontSize,
  lineHeight: '1.35',
  fontWeight: theme.typography.h1.fontWeight,

  [theme.breakpoints.up('lg')]: {
    fontSize: theme.typography.h5.fontSize,
  },
}));

export const SurvayPartQuestionsCounter = styled(P)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
}));

export const SurvayQuestion = styled(P)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary,

  [theme.breakpoints.up('lg')]: {
    fontSize: '18px',
  },
}));
export const SurvayAnswer = styled(P)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary,

  [theme.breakpoints.up('lg')]: {
    fontSize: theme.typography.body1.fontSize,
  },
}));

export const SurvayAnswersWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),

  [theme.breakpoints.up('lg')]: {
    marginBottom: theme.spacing(4),
  },
}));

export const SurvayButtonsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}));
