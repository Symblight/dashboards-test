
import { createSlice } from "@reduxjs/toolkit";
import { onLogin, onRegistered, dropSession } from 'stores/services'

export const initialState = {
  token: localStorage.getItem('token'),
  refreshToken: localStorage.getItem('refreshToken'),
  user: null,
  authenticated: localStorage.getItem('token') !== null && localStorage.getItem('token') !== undefined,
  attempt: false,
  loading: false,
  error: false,
};

const setAuthPayload = (state, action) => {
  const {user, tokens} = action.payload.data;
  state.user = user;
  state.token = tokens.access.token
  state.refreshToken = tokens.refresh.token
  state.authenticated = true;
  state.attempt = true;
  state.error = false;
  localStorage.setItem('token', tokens.access.token)
  localStorage.setItem('refreshToken', tokens.refresh.token)
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [onLogin.fulfilled]: setAuthPayload,
    [onRegistered.fulfilled]: setAuthPayload,
    [dropSession.rejected]: (state, action) => {
      localStorage.removeItem('token')
      localStorage.removeItem('refreshToken')
      state.authenticated = false;
      state.token = null;
    }
  },
});

export const { setAuth, dropAuth, getUser } = authSlice.actions;

export default authSlice.reducer;
