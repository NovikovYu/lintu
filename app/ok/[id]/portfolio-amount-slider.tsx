import React, { FC } from 'react';

import { Slider, useTheme } from '@mui/material';

interface IProps {
  defaultValue: number;
  setAmount: (amount: number | number[]) => void;
}

function valuetext(value: number) {
  return `${value}°C`;
}

const PortfolioAmountSlider: FC<IProps> = ({ defaultValue, setAmount }) => {
  const theme = useTheme();

  return (
    <Slider
      defaultValue={defaultValue}
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
