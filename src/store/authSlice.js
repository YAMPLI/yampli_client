import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const initialState = {};

export const __getLogin = createAsyncThunk(
  'auth/getLogin',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/auth/kakao/oauth?code=${payload}`);
      // 요청 성공시 fulfillwithvalue 실행
      return thunkAPI.fulfillWithValue(data.token);
    } catch (error) {
      // 실패시 rejectwithvalue실행
      return thunkAPI.rejectWithValue(error);
    }
  },
);
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getLogin.fulfilled, (state, { payload }) => {
      console.log(jwtDecode(payload));
      return { ...state, user: jwtDecode(payload), token: payload };
    });
  },
});
export default authSlice.reducer;
