
import { Box, ButtonProps, List, ListItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import {
  PrimaryButton,
  SecondaryButton,
  P,
} from '../CommonComponents/Common-сomponents-style';

  export const ProgressBarWrapper = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(2),
  }));
  
  export const ProgressBarBG = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.grey['300'],
    borderRadius: theme.spacing(0.5),
    overflow: 'hidden',
  }));

  export const ProgressBarScale = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: theme.spacing(2),
  }));