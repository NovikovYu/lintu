import { Box, ButtonProps, List, ListItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import {
  PrimaryButton,
  SecondaryButton,
  P,
} from '../CommonComponents/Common-сomponents-style';

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

export const PortfoliosTitle = styled(Typography)(({ theme }) => ({
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

export const PortfolioCardTitle = styled(Typography)(({ theme }) => ({
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

export const PortfolioCardAssentTitle = styled(PortfolioCardTitle)(
  ({ theme }) => ({
    color: theme.palette.primary.light,
  }),
);

export const PortfolioNoSuccedCardAssentTitle = styled(PortfolioCardTitle)(
  ({ theme }) => ({
    color: theme.palette.error.main,
  }),
);

export const PortfolioCardNumbersColumnLeftTitle = styled(Typography)(
  ({ theme }) => ({
    marginTop: '0',
    marginBottom: '0',
    color: theme.palette.text.primary,
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.h1.fontWeight,

    [theme.breakpoints.up('lg')]: {
      fontSize: theme.typography.h5.fontSize,
    },
  }),
);

export const PortfoliosSubtitle = styled(P)(({ theme }) => ({
  marginTop: '0',
  marginBottom: theme.spacing(3),
  color: theme.palette.text.secondary,
  fontSize: theme.typography.body2.fontSize,

  [theme.breakpoints.up('lg')]: {
    marginBottom: theme.spacing(4),
  },
}));

export const PortfolioCardSubtitle = styled(P)(({ theme }) => ({
  marginTop: '0',
  marginBottom: theme.spacing(3),
  color: theme.palette.text.secondary,
  fontSize: theme.typography.body2.fontSize,
}));

export const BlockedPortfolioCardSubtitle = styled(P)(({ theme }) => ({
  marginTop: '0',
  color: theme.palette.text.secondary,
  fontSize: theme.typography.body2.fontSize,
}));

export const PortfolioCardsList = styled(List)(({ theme }) => ({
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

export const PortfolioCardItem = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '368px',
  padding: theme.spacing(3, 2),
  backgroundColor: theme.palette.common.white,
  boxShadow:
    '0px 2px 4px -2px rgba(24, 39, 75, 0.12), 0px 4px 4px -2px rgba(24, 39, 75, 0.08)',
  borderRadius: theme.spacing(0.5),

  [theme.breakpoints.up('sm')]: {
    alignItems: 'flex-start',
    width: 'calc(50% - 13px)',
  },
}));

export const BlockedPortfolioCardItem = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  width: '100%',
  maxWidth: '368px',
  padding: theme.spacing(3, 2),
  backgroundColor: theme.palette.common.white,
  boxShadow:
    '0px 2px 4px -2px rgba(24, 39, 75, 0.12), 0px 4px 4px -2px rgba(24, 39, 75, 0.08)',
  border: '1px solid #ED6C02',
  borderRadius: theme.spacing(0.5),

  [theme.breakpoints.up('sm')]: {
    alignItems: 'flex-start',
    width: 'calc(50% - 13px)',
  },
}));

export const PortfolioCardItemSkeleton = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '368px',
  padding: theme.spacing(3, 2),
  backgroundColor: theme.palette.common.white,
  boxShadow: theme.palette.shadows[300],
  borderRadius: theme.spacing(0.5),

  [theme.breakpoints.up('sm')]: {
    flexDirection: 'column',
    width: 'calc(50% - 13px)',
  },
}));

export const PortfolioCardNumbersWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  display: 'flex',
  justifyContent: 'space-between',
}));

export const PortfolioCardNumbersColumnRight = styled(Box)(({ theme }) => ({
  textAlign: 'right',
}));

export const PortfolioCardNumbersColumnLeft = styled(Box)(({ theme }) => ({
  textAlign: 'left',
}));
