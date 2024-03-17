import { green } from '@mui/material/colors';

export const ACTIVE_GROUPS_COLORS: Record<string, string> = {
  // У equities (акции) должны быть оттенки зеленого.
  // У Bonds (облигации) оттенки синего, чтобы была понятна разница.
  'U.S. Stocks': green[900],
  'INTERNATIONAL Stocks': green[700],
};
