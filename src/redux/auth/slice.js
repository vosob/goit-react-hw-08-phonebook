import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refreshUser,
} from '../../redux/auth/operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.pending, (state, action) => {
        state.isLoggedIn = false;
      })

      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoggedIn = false;
      })

      // logIn
      .addCase(logIn.pending, (state, action) => {
        state.isLoggedIn = false;
      })

      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isLoggedIn = false;
      })

      // logOut
      .addCase(logOut.pending, (state, action) => {
        state.isLoggedIn = false;
      })

      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isLoggedIn = false;
      })

      // refresh
      .addCase(refreshUser.pending, state => {
        state.isFetchingCurrentUser = true;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.token = null;
        state.isLoggedIn = false;
        state.isFetchingCurrentUser = false;
      });
  },
});

export const authReducer = authSlice.reducer;
