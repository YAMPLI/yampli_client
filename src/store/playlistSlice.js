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

const initialState = {
  songList: [],
  isShowSongList: true,
};
const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    // 음악 리스트 사이드바 노출
    setIsShowSongList: (state) => {
      state.isShowSongList = !state.isShowSongList;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(__getPlaylist.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.songList = payload;
    });
  },
});

export const { setIsShowSongList } = playlistSlice.actions;

export const selectPlaylistState = (state) => state.playlist;
export default playlistSlice.reducer;
