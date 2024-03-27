import * as React from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import {
  PrimaryButton,
  SecondaryButton,
} from '@/components/CommonComponents/Common-сomponents-style';

import { RechargeMethods } from './page';
import { SurvayButtonsWrapper, TableWrapper } from './style-b3';

// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number,
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

interface RechargeMethodsTableProps {
  data: RechargeMethods[];
}

const handleRefill = (id: string) => {
  // console.log('handleRefill', id);
};

const handleDelete = (id: string) => {
  // console.log('handleRefill', id);
};

export default function RechargeMethodsTable({
  data,
}: RechargeMethodsTableProps) {
  return (
    // <TableContainer component={Paper}>
    <TableWrapper>
      {/* <Table sx={{ minWidth: 650 }} aria-label="simple table"> */}
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Method name</TableCell>
            <TableCell>Account</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.account}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.methodName}
              </TableCell>
              <TableCell>{row.account}</TableCell>
              <TableCell>
                <SurvayButtonsWrapper>
                  <PrimaryButton
                    type="button"
                    size="small"
                    variant="contained"
                    onClick={() => handleRefill(row.account)}
                  >
                    Refill
                  </PrimaryButton>
                  <SecondaryButton
                    type="button"
                    size="small"
                    variant="contained"
                    onClick={() => handleDelete(row.account)}
                  >
                    delete
                  </SecondaryButton>
                </SurvayButtonsWrapper>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
