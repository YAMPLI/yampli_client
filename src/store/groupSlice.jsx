import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

export const __getGroupList = createAsyncThunk(
  'group/getList',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(`/api/group/list`, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const __addGroup = createAsyncThunk(
  'group/addGroup',
  async (title, thunkAPI) => {
    try {
      const response = await axios.post(
        '/api/group',
        { title },
        {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        },
      );
      // 그룹 리스트 받아오기
      console.log('res' + response.data);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const groupSlice = createSlice({
  name: 'group',
  // group의 list state 초기값을 배열로 생성
  initialState: { list: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getGroupList.fulfilled, (state, { payload }) => {
      // thunkAPI.fulfillWithValue(response.data)로 action.payload 값을 반환
      // 즉 action 함수 -> axion 를 실행하고 받아온 데이터 결과 값 -> payload를 바로 가져온다
      state.list = payload;
    });
    builder.addCase(__addGroup.fulfilled, (state, { payload }) => {
      return (state = [...state, payload]);
    });
  },
});
export default groupSlice.reducer;
