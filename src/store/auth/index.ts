import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '..';

export interface AuthState {
  email?: string | null;
  token?: string | null;
  refreshToken?: string | null;
}

const initialState: AuthState = {
  email: null,
  token: null,
  refreshToken: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      if ('email' in action.payload) state.email = action.payload.email;
      if ('token' in action.payload) state.token = action.payload.token;
      if ('refreshToken' in action.payload) state.refreshToken = action.payload.refreshToken;
    },
    logout: (state) => {
      state.email = null;
      state.token = null;
      state.refreshToken = null;
    },
  },
});

export const { setCredentials, logout } = slice.actions;

export const selectEmail = (state: RootState) => state.auth.email;
export const selectToken = (state: RootState) => state.auth.token;
export const selectRefreshToken = (state: RootState) => state.auth.refreshToken;

export default slice.reducer;
