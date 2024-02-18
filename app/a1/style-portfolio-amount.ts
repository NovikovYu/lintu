import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import { P } from '@/components/CommonComponents/Common-сomponents-style';

export const PortfolioAmountSliderWrapper = styled(Box)(({ theme }) => ({
    width: '100%',
    maxWidth: theme.spacing(50),
    marginBottom: theme.spacing(4),
    marginTop: -theme.spacing(2),
}))
export const AmountSliderMarksTextTextWrapper = styled(Box)(({ theme }) => ({
width: '100%',  
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: theme.spacing(1),
}))

export const AmountSliderMarksTextText = styled(P)(({ theme }) => ({
    textAlign: 'center',
    overflowWrap: 'anywhere',
  }));