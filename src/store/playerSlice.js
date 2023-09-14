import { createSlice } from '@reduxjs/toolkit';

export const PlayMode = {
  LOOP: 'loop', // 전곡 반복 재생
  SINGLE: 'single', // 한곡 반복
  RANDOM: 'random', // 랜덤 재생
};

const initialState = {
  isPlaying: false, // 재생 상태
  played: 0, // 재생 진행 상태, 0.5 -> 50% 진행
  duration: 0, // 프로그레스바를 위한 영상 길이
  selectedSong: null,
  volume: 0.3, // 볼륨제어 , 0~1
  currentSongIndex: 0,
  playMode: PlayMode.LOOP,
  playedSongsIndices: [],
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    togglePlay(state) {
      state.isPlaying = !state.isPlaying;
    },
    setPlayed(state, action) {
      state.played = action.payload;
    },
    setDuration(state, action) {
      state.duration = action.payload;
    },
    setSelectedSong(state, action) {
      state.selectedSong = action.payload;
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
    setCurrentSongIndex: (state, action) => {
      state.currentSongIndex = action.payload;
    },
    setPlayMode: (state, action) => {
      state.playMode = action.payload;
    },
    addPlayedSongIndex: (state, action) => {
      state.playedSongsIndices.push(action.payload);
    },
    resetPlayedSongs: (state) => {
      state.playedSongsIndices = [];
    },
  },
});

export const {
  togglePlay,
  setPlayed,
  setDuration,
  setSelectedSong,
  setVolume,
  setCurrentSongIndex,
  setPlayMode,
  addPlayedSongIndex,
  resetPlayedSongs,
} = playerSlice.actions;

export const selectPlayerState = (state) => state.player;

export default playerSlice.reducer;
