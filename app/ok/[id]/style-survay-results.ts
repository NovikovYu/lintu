import { Box, Button, Input, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { P } from '@/components/CommonComponents/Common-сomponents-style';

export const SurvayResultsTitle = styled(Typography)(({ theme }) => ({
  marginTop: '0',
  marginBottom: theme.spacing(4),
  color: theme.palette.text.primary,
  fontSize: theme.typography.h6.fontSize,
  lineHeight: '1.35',
  fontWeight: '600',
  textAlign: 'center',
  overflowWrap: 'anywhere',

  [theme.breakpoints.up('lg')]: {
    fontSize: theme.typography.h5.fontSize,
  },
}));

export const SurvayResultsSubtitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2.5),
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary,
  fontSize: '16px',
  lineHeight: '1.35',
  fontWeight: '600',
  textAlign: 'center',
  overflowWrap: 'anywhere',

  [theme.breakpoints.up('lg')]: {
    fontSize: '18px',
  },
}));

export const SurvayResultsText = styled(P)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  textAlign: 'center',
  overflowWrap: 'anywhere',
}));

export const SurvayResultsTextWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  textAlign: 'center',
  overflowWrap: 'anywhere',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
}));
export const SurvayResultsInput = styled(Input)(({ theme }) => ({
  width: '70px',

  '.MuiInputBase-input': {
    textAlign: 'center',
  },
}));

export const SurvayResultsTextBold = styled(P)(({ theme }) => ({
  display: 'inline',
  fontWeight: theme.typography.h6.fontWeight,
}));

export const SurvayResultsTextBigBold = styled(SurvayResultsTextBold)(
  ({ theme }) => ({
    fontSize: '16px',
  }),
);

export const SurvayResultsRiskBlockWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: theme.spacing(50),
  marginBottom: theme.spacing(6),
}));

export const SurvayResultsRiskLoader = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '59px',
  maxWidth: theme.spacing(50),
  marginBottom: theme.spacing(6),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const SurvayResultsRiskBlockScale = styled('ul')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0',
  padding: 0,
  listStyle: 'none',
}));

export const SurvayResultsRiskBlockScaleItem = styled(P)(({ theme }) => ({
  padding: 0,
  margin: 0,
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,

  '&:nth-of-type(2)': {
    marginRight: theme.spacing(2),
  },
}));

export const SurvayResultsAmountSliderWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: theme.spacing(50),
  marginBottom: theme.spacing(6),
}));

export const SurvayResultsSliderMarksTextWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: theme.spacing(1),
  marginTop: -theme.spacing(2),
}));

export const SurvayResultsSliderMarksText = styled(P)(({ theme }) => ({
  textAlign: 'center',
  overflowWrap: 'anywhere',
}));
