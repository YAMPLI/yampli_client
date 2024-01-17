import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api/axios';
import jwtDecode from 'jwt-decode';
import QUERY from '../constants/query';
const initialState = {};

export const __getKakaoLogin = createAsyncThunk(
  'auth/getKakaoLogin',
  async (payload, thunkAPI) => {
    return await api
      .get(`${QUERY.END_POINT.AUTH.LOGIN_KAKAO(payload)}`)
      .then((response) => thunkAPI.fulfillWithValue(response.data.token))
      .catch(() => thunkAPI.rejectWithValue());
  },
);

export const __getEmailLogin = createAsyncThunk(
  'auth/getEmailLogin',
  async (payload, thunkAPI) => {
    return await api
      .post(
        QUERY.END_POINT.AUTH.LOGIN_EMAIL,
        payload.userInfo,
        payload.customObj,
      )
      .then((response) => thunkAPI.fulfillWithValue(response.data))
      .catch(() => thunkAPI.rejectWithValue());
  },
);
const getKakaoLoginExtraReducer = (builder) => {
  builder.addCase(__getKakaoLogin.fulfilled, (state, { payload }) => {
    return { ...state, user: jwtDecode(payload), token: payload };
  });
  builder.addCase(__getKakaoLogin.rejected, (state, { payload }) => {
    console.log(payload.response.data.data.url);
    state.url = payload.response.data.data.url;
  });
};

const getEmailLoginExtraReducer = (builder) => {
  builder.addCase(__getEmailLogin.fulfilled, (state, { payload }) => {
    console.log(payload);
    return { ...state, url: payload };
  });
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    getKakaoLoginExtraReducer(builder);
    getEmailLoginExtraReducer(builder);
  },
});

export default authSlice.reducer;
