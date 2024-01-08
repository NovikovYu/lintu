import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/store/store';

export const accessKeySlice = createSlice({
  name: 'accessKey',
  initialState: {
    value: null,
  },
  reducers: {
    setAccessKey: (
      state: { value: string | null },
      action: { payload: any },
    ) => {
      state.value = action.payload;
    },
  },
});

export const { setAccessKey } = accessKeySlice.actions;

export const selectAccessKey = (state: RootState) => state.accessKey.value;
