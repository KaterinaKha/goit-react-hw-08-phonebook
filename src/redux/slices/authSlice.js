import {
  logOutUserThunk,
  loginUserThunk,
  refreshUserThunk,
  registerUserThunk,
} from 'redux/operations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: null,
  token: null,
  authentificated: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(registerUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.authentificated = false;
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authentificated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //----- login -----
      .addCase(loginUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.authentificated = false;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authentificated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //----- refresh -----
      .addCase(refreshUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.authentificated = false;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authentificated = true;
        state.user = action.payload;
      })
      .addCase(refreshUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //----- logout -----
      .addCase(logOutUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.authentificated = false;
      })
      .addCase(logOutUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authentificated = false;
        state.user = null;
        state.token = null;
      })
      .addCase(logOutUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const authReducer = authSlice.reducer;
