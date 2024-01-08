import { Box, Button, Link, Typography } from '@mui/material';
import { Theme, styled } from '@mui/material/styles';

import {
  PrimaryButton,
  StyledLink,
} from '../CommonComponents/Common-сomponents-style';

export const PortfolioTitleWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),

  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
  },
}));

export const PortfolioTitle = styled(Typography)(({ theme }) => ({
  marginTop: '0',
  color: theme.palette.text.primary,
  fontSize: theme.typography.h5.fontSize,
  lineHeight: theme.typography.h3.letterSpacing,
  fontWeight: theme.typography.h1.fontWeight,

  [theme.breakpoints.up('lg')]: {
    fontSize: theme.typography.h4.fontSize,
  },
}));

export const StudyLink = styled(StyledLink)(({ theme }) => ({
  display: 'inline-block',
  marginTop: theme.spacing(1.25),
  fontSize: theme.typography.subtitle2.fontSize,
  lineHeight: theme.typography.h3.letterSpacing,
  fontWeight: theme.typography.subtitle2.fontWeight,
  textTransform: 'uppercase',
  fontFamily: theme.typography.fontFamily,

  [theme.breakpoints.up('lg')]: {
    marginTop: theme.spacing(2),
  },
}));

export const PortfolioDownloadBtn = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(1),
  whiteSpace: 'nowrap',

  [theme.breakpoints.up('sm')]: {
    marginTop: '0',
    marginLeft: theme.spacing(3),
  },
}));

export const PortfolioActionBlock = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: theme.spacing(0.5),
  backgroundColor: theme.palette.primary.contrastText,
  boxShadow: theme.palette.shadows[200],

  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3),
  },
}));

export const PortfolioContentBlock = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing(3),
    gap: theme.spacing(2),
  },

  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: theme.spacing(3),
  },
}));

export const PortfolioCompositionBlockWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '564px',
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: theme.spacing(0.5),
  backgroundColor: theme.palette.primary.contrastText,
  boxShadow: theme.palette.shadows[200],

  [theme.breakpoints.up('md')]: {
    maxWidth: '368px',
  },

  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(2.25, 3.5),
    marginBottom: theme.spacing(3),
  },
}));

export const PortfolioLeftContentColumn = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '564px',

  [theme.breakpoints.up('md')]: {
    maxWidth: '368px',
  },
}));

export const PortfolioStudyBlockWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '564px',
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: theme.spacing(0.5),
  backgroundColor: theme.palette.primary.contrastText,
  boxShadow: theme.palette.shadows[200],

  [theme.breakpoints.up('md')]: {
    maxWidth: '368px',
  },

  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(2.25, 3.5),
  },
}));

export const PortfolioCompositionTopBlock = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),

  [theme.breakpoints.up('lg')]: {
    marginBottom: theme.spacing(4.5),
  },
}));

export const PortfolioCompositionChartWrapper = styled(Box)(({ theme }) => ({
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '320px',
  marginBottom: theme.spacing(3),

  [theme.breakpoints.up('lg')]: {
    marginBottom: theme.spacing(5.25),
  },
}));

export const PortfolioBlockTitle = styled(Typography)(({ theme }) => ({
  marginTop: '0',
  marginBottom: theme.spacing(1.25),
  color: theme.palette.text.primary,
  fontSize: theme.typography.subtitle2.fontSize,
  lineHeight: theme.typography.h5.letterSpacing,
  fontWeight: theme.typography.h1.fontWeight,

  [theme.breakpoints.up('lg')]: {
    fontSize: theme.typography.subtitle1.fontSize,
  },
}));

export const PortfolioActionBlockButton = styled(PrimaryButton)(
  ({ theme }) => ({
    marginTop: theme.spacing(1),

    [theme.breakpoints.up('lg')]: {
      marginTop: '0',
      marginLeft: theme.spacing(3),
    },
  }),
);

export const InvestmentProductsGroupWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),

  [theme.breakpoints.up('lg')]: {
    marginBottom: theme.spacing(4),
  },
}));

export const InvestmentProductGroupLabel = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontSize: theme.typography.subtitle2.fontSize,
  lineHeight: theme.typography.h5.letterSpacing,
  fontWeight: theme.typography.h1.fontWeight,
  color: theme.palette.text.primary,
}));

export const InvestmentProductWrapper = styled(Link)(({ theme }) => ({
  display: 'flex',
  marginBottom: theme.spacing(1.5),
  textDecoration: 'none',
}));

export const CustomInvestmentProductLabelWrapper = styled(Box)(
  ({ color, theme }: { color: string; theme: Theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50px',
    height: '50px',
    flexShrink: '0',
    padding: theme.spacing(0.5),
    marginRight: theme.spacing(1),
    backgroundColor: color,
  }),
);

export const InvestmentProductTicket = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.caption.fontSize,
  lineHeight: theme.typography.h5.letterSpacing,
  fontWeight: theme.typography.h1.fontWeight,
  color: theme.palette.primary.contrastText,
  textTransform: 'uppercase',
}));

export const InvestmentProductDescription = styled(Box)(({ theme }) => ({
  maxWidth: '300px',
  maxHeight: '50px',
  overflow: 'hidden',
}));

export const InvestmentProductTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  fontSize: theme.typography.caption.fontSize,
  lineHeight: theme.typography.h3.letterSpacing,
  fontWeight: theme.typography.h1.fontWeight,
  color: theme.palette.text.primary,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
}));

export const InvestmentProductSubtitle = styled(Typography)(({ theme }) => ({
  marginTop: 'auto',
  fontSize: theme.typography.caption.fontSize,
  lineHeight: theme.typography.h5.letterSpacing,
  fontWeight: theme.typography.h1.fontWeight,
  color: theme.palette.text.secondary,
}));

export const PortfolioStydyLink = styled(Link)(({ theme }) => ({
  display: 'block',
  fontSize: theme.typography.subtitle2.fontSize,
  lineHeight: theme.typography.h5.letterSpacing,
  fontWeight: theme.typography.subtitle1.fontWeight,
  color: theme.palette.lightBlue['900'],
}));

export const PortfolioRightBlock = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '564px',
  marginBottom: theme.spacing(3),
  padding: theme.spacing(2),
  borderRadius: theme.spacing(0.5),
  backgroundColor: theme.palette.primary.contrastText,
  boxShadow: theme.palette.shadows[200],

  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(2.25, 3.5),
  },
}));

export const PortfolioRiskBlockScale = styled('ul')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '0px',
  padding: 0,
  listStyle: 'none',
}));

export const PortfolioRiskBlockScaleItem = styled('li')(({ theme }) => ({
  padding: 0,
  margin: 0,
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,

  '&:nth-of-type(2)': {
    marginRight: theme.spacing(2),
  },
}));

export const PortfolioEconomicDetailsBlock = styled(PortfolioRightBlock)(
  ({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing(1),

    '&:nth-of-type(2)': {
      flexSrink: 0,
    },
  }),
);

export const HistoricalReturnsTitleWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: theme.spacing(1),

  '&:nth-of-type(2)': {
    flexSrink: 0,
  },
}));

export const HistoricalReturnsTopWrapper = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const PortfolioBlockTitleAccent = styled(PortfolioBlockTitle)(
  ({ theme }) => ({
    color: theme.palette.primary.main,
  }),
);

export const ESGPerformanceChartWrapper = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    width: '400px',
  },
}));
