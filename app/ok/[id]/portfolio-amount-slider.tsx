import React, { FC } from 'react';

import { Slider, useTheme } from '@mui/material';

interface IProps {
  amount: number;
  setAmount: (amount: number | number[]) => void;
}

const PortfolioAmountSlider: FC<IProps> = ({ amount, setAmount }) => {
  const theme = useTheme();
  return (
    <Slider
      value={amount}
      max={100000}
      min={1000}
      valueLabelDisplay="auto"
      onChange={(_: Event, value: number | number[]) => setAmount(value)}
      sx={{
        width: '100%',
        color: theme.palette.primary.main,
        height: '4px',
        '& .MuiSlider-thumb': {
          backgroundColor: theme.palette.primary.main,
        },
        '& .MuiSlider-track': {
          backgroundColor: theme.palette.primary.main,
        },
      }}
    />
  );
};

export default PortfolioAmountSlider;
