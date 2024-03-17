import EastIcon from '@mui/icons-material/East';
import { Box, Button, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ResultsBlock = styled(Box)(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing(3),
  padding: theme.spacing(2),
  borderRadius: theme.spacing(0.5),
  backgroundColor: theme.palette.primary.contrastText,
  boxShadow: theme.palette.shadows[200],

  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(2.25, 3.5),
  },
}));

export const ResultsHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '20px',
  flexDirection: 'column',
  marginBottom: theme.spacing(2),

  [theme.breakpoints.up('sm')]: {
    alignItems: 'center',
    flexDirection: 'row',
  },
}));

export const ResultsNumbers = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  flexDirection: 'column',

  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));

export const ResultsNumberInner = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
}));

export const ResultsNetNumber = styled(Typography)(({ theme }) => ({
  marginTop: '0',
  marginBottom: theme.spacing(1.25),
  color: theme.palette.text.primary,
  fontSize: theme.typography.h4.fontSize,
  lineHeight: theme.typography.h5.letterSpacing,
  fontWeight: theme.typography.h1.fontWeight,

  [theme.breakpoints.up('lg')]: {
    fontSize: theme.typography.h3.fontSize,
  },
}));

export const ResultsNumberIconPositive = styled(EastIcon)(({ theme }) => ({
  color: 'green',
  transform: 'rotate(-90deg)',
}));

export const ResultsNumberIconNegative = styled(EastIcon)(({ theme }) => ({
  color: 'red',
  transform: 'rotate(90deg)',
}));

export const ResultsReturnNumberPositive = styled(Typography)(({ theme }) => ({
  color: 'green',
  marginTop: '0',
  marginBottom: theme.spacing(1.25),
  // color: theme.palette.text.primary,
  fontSize: theme.typography.h5.fontSize,
  lineHeight: theme.typography.h5.letterSpacing,
  fontWeight: theme.typography.h1.fontWeight,

  [theme.breakpoints.up('lg')]: {
    fontSize: theme.typography.h4.fontSize,
  },
}));

export const ResultsReturnNumberNegative = styled(Typography)(({ theme }) => ({
  color: 'red',
  marginTop: '0',
  marginBottom: theme.spacing(1.25),
  // color: theme.palette.text.primary,
  fontSize: theme.typography.h5.fontSize,
  lineHeight: theme.typography.h5.letterSpacing,
  fontWeight: theme.typography.h1.fontWeight,

  [theme.breakpoints.up('lg')]: {
    fontSize: theme.typography.h4.fontSize,
  },
}));

export const ResultsSwitcherButtonLeft = styled(Button)(({ theme }) => ({
  // marginTop: theme.spacing(1),
  marginLeft: 0,
  textTransform: 'none',
  whiteSpace: 'nowrap',
  borderRadius: '4px 0 0 4px',

  [theme.breakpoints.up('sm')]: {
    // marginTop: '0',
    // marginLeft: theme.spacing(3),
  },
}));

export const ResultsSwitcherButtonRigth = styled(Button)(({ theme }) => ({
  marginLeft: 0,
  textTransform: 'none',
  whiteSpace: 'nowrap',
  borderRadius: '0 4px 4px 0',

  [theme.breakpoints.up('sm')]: {
    // marginTop: '0',
    // marginLeft: theme.spacing(3),
  },
}));

export const ResultsPerformanceTitleWrapper = styled(Box)(({ theme }) => ({
  gap: '8px',
  marginBottom: theme.spacing(2),

  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    alignItems: 'flex-end',
  },
}));

export const ResultsPerformanceTitle = styled(Typography)(({ theme }) => ({
  marginTop: '0',
  marginBottom: '0',
  color: theme.palette.text.primary,
  fontSize: theme.typography.subtitle2.fontSize,
  lineHeight: theme.typography.h5.letterSpacing,
  fontWeight: theme.typography.h1.fontWeight,

  [theme.breakpoints.up('lg')]: {
    fontSize: theme.typography.subtitle1.fontSize,
  },
}));

export const ResultsbenchmarkSelectWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: theme.spacing(2),
}));

export const ResultsChartsWrapper = styled(Box)(({ theme }) => ({
  height: '300px',
  marginBottom: theme.spacing(2),
}));

export const ResultsChartsPeriodsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '8px',
  flexWrap: 'wrap',
}));
