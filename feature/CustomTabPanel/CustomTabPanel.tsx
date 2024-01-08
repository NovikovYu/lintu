import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  tabsGroupName: string;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, tabsGroupName } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${tabsGroupName}-tabpanel-${index}`}
      aria-labelledby={`${tabsGroupName}-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default CustomTabPanel;
