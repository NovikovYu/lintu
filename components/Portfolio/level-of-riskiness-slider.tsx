import React, { FC } from 'react';

import { Slider, useTheme } from '@mui/material';

interface IProps {
  levelOfRisk: number;
}
const LevelOfRiskinessSlider: FC<IProps> = ({ levelOfRisk }) => {
  const theme = useTheme();

  return (
    <Slider
      disabled={true}
      track={false}
      defaultValue={levelOfRisk}
      max={6}
      min={0}
      valueLabelDisplay="auto"
      marks={true}
      sx={{
        width: '100%',
        color: theme.palette.grey['500'],
        '& .MuiSlider-thumb': {
          backgroundColor: theme.palette.primary.main,
        },
        '& .MuiSlider-mark': {
          backgroundColor: theme.palette.grey['500'],
          height: '10px',
        },
      }}
    />
  );
};

export default LevelOfRiskinessSlider;
