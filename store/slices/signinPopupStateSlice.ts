import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/store/store';

export const signinPopupStateSlice = createSlice({
  name: 'signinPopupState',
  initialState: {
    value: false,
  },
  reducers: {
    setSigninPopupState: (
      state: { value: boolean },
      action: { payload: boolean },
    ) => {
      state.value = action.payload;
    },
  },
});

export const { setSigninPopupState } = signinPopupStateSlice.actions;

export const selectSigninPopupState = (state: RootState) =>
  state.signinPopupState.value;
