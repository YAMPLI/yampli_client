import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const __getPlaylist = createAsyncThunk(
  'playlist/getList',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(`/api/playlist/socket/${payload}`, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const playlistSlice = createSlice({
  name: 'playlist',
  // group의 list state 초기값을 배열로 생성
  initialState: { list: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getPlaylist.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.list = payload;
    });
  },
});
export default playlistSlice.reducer;
