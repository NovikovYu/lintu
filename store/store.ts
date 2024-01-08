import { configureStore } from '@reduxjs/toolkit';

import { accessKeySlice } from '@/store/slices/sessionSlice';
import { signinPopupStateSlice } from '@/store/slices/signinPopupStateSlice';
import { userEmailSlice } from '@/store/slices/userEmailSlice';

export const store = configureStore({
  reducer: {
    accessKey: accessKeySlice.reducer,
    userEmail: userEmailSlice.reducer,
    signinPopupState: signinPopupStateSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
