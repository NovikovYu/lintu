import styled from '@emotion/styled';
import { Box, TableCell, TableRow } from '@mui/material';

interface ActiveGroupIconProps {
  bgColor: string;
}

export const ExposuresDescriptionText = styled(TableCell)(() => ({
  marginBottom: '8px',
}));
export const HolingName = styled(TableCell)(() => ({
  textTransform: 'uppercase',
}));

export const ActiveGroupTableCell = styled(TableCell)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
}));

// @ts-ignore
export const ActiveGroupIcon = styled.div(({ backgroundColor }) => ({
  width: '10px',
  height: '10px',
  backgroundColor: backgroundColor || 'black',
}));

export const BarChartsWrapper = styled(Box)(({ theme }) => ({
  height: '500px',
}));
