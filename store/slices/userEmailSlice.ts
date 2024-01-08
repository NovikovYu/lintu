import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/store/store';

export const userEmailSlice = createSlice({
  name: 'userEmail',
  initialState: {
    value: null,
  },
  reducers: {
    setUserEmail: (
      state: { value: string | null },
      action: { payload: any },
    ) => {
      state.value = action.payload;
    },
  },
});

export const { setUserEmail } = userEmailSlice.actions;

export const selectUserEmail = (state: RootState) => state.userEmail.value;
