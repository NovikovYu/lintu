import { blue, green } from '@mui/material/colors';

export const ACTIVE_GROUPS_COLORS: Record<string, string> = {
  // У equities (акции) должны быть оттенки зеленого.
  // У Bonds (облигации) оттенки синего, чтобы была понятна разница.
  'U.S. Stocks': green[900],
  'INTERNATIONAL Stocks': green[700],
};

// У equities (акции) должны быть оттенки зеленого.
export const EQUITIES_COLORS: string[] = [
  green[900],
  green[800],
  green[700],
  green[600],
  green[500],
  green[400],
  green[300],
  green[200],
];

// У Bonds (облигации) оттенки синего, чтобы была понятна разница.
export const BONDS_COLORS: string[] = [
  blue[900],
  blue[800],
  blue[700],
  blue[600],
  blue[500],
  blue[400],
  blue[300],
  blue[200],
];
