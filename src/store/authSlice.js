import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api/axios';
import jwtDecode from 'jwt-decode';

const initialState = {};

export const __getLogin = createAsyncThunk(
  'auth/getLogin',
  async (payload, thunkAPI) => {
    return await api
      .get(`/api/auth/kakao/oauth?code=${payload}`)
      .then((response) => thunkAPI.fulfillWithValue(response.data.token))
      .catch(() => thunkAPI.rejectWithValue());
  },
);

const getLoginExtraReducer = (builder) => {
  builder.addCase(__getLogin.fulfilled, (state, { payload }) => {
    return { ...state, user: jwtDecode(payload), token: payload };
  });
  builder.addCase(__getLogin.rejected, (state, { payload }) => {
    console.log(payload.response.data.data.url);
    state.url = payload.response.data.data.url;
  });
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    getLoginExtraReducer(builder);
  },
});

export default authSlice.reducer;
