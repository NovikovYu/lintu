import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const B9BackButtonWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

export const SurvayButtonsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}));

export const TableWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));
