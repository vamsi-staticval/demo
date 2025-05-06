import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../services/api';

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

export const signIn = createAsyncThunk('auth/signIn', async (userData) => {
  const response = await api({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    url: '/auth/login',
    method: 'POST',
    data: JSON.stringify(userData),
  });
  return response?.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
