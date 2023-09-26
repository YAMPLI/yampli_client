import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Promise } from 'es6-promise';

export const PlayMode = {
  LOOP: 'loop', // 전곡 반복 재생
  SINGLE: 'single', // 한곡 반복
  RANDOM: 'random', // 랜덤 재생
};

export const asyncSetPlayed = createAsyncThunk(
  'player/asyncSetPlayed',
  async (playedValue, thunkAPI) => {
    // 여기에서 실제로 비동기 작업을 수행할 수 있습니다.
    // 예제에서는 setTimeout을 사용하여 간단한 지연을 만듭니다.
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(playedValue);
      }, 500); // 예를 들어 500ms 지연을 설정했습니다.
    });
  },
);

const initialState = {
  isPlaying: false, // 재생 상태
  played: 0, // 재생 진행 상태, 0.5 -> 50% 진행
  duration: 0, // 프로그레스바를 위한 영상 길이
  selectedSong: null,
  volume: 0.3, // 볼륨제어 , 0~1
  currentSongIndex: 0,
  playMode: PlayMode.LOOP,
  playedSongsIndices: [],
  playerRef: null, // 다른 페이지에서도 플레이어를 참조할 수 있도록
  isSeeking: false, // seekBar 동작 제어 중 played 값을 변경하지 않도록
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
      console.log(action.payload);
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
    playNextSong: (state, action) => {
      const songs = action.payload.songs;
      console.log(songs);
      let nextIndex;
      if (state.playMode === PlayMode.LOOP) {
        state.currentSongIndex = (state.currentSongIndex + 1) % songs.length;
      } else if (state.playMode === PlayMode.RANDOM) {
        const unplayedIndices = songs
          .map((_, index) => index)
          .filter((index) => !state.playedSongsIndices.includes(index));

        if (unplayedIndices.length === 0) {
          state.resetPlayedSongs();
          // 모든 노래가 재생되면
          nextIndex = Math.floor(Math.random() * songs.length);
        } else {
          const randomIndex = Math.floor(
            Math.random() * unplayedIndices.length,
          );
          nextIndex = unplayedIndices[randomIndex];
        }
        state.addPlayedSongIndex(nextIndex);
      } else {
        state.currentSongIndex = (state.currentSongIndex + 1) % songs.length;
      }
      state.selectedSong = songs[state.currentSongIndex];
    },
    playPreviousSong: (state, action) => {
      const songs = action.payload.songs;
      state.currentSongIndex =
        (state.currentSongIndex - 1 + songs.length) % songs.length;
      state.selectedSong = songs[state.currentSongIndex];
    },
    // setPlayerRef: (state, action) => {
    //   state.playerRef = action.payload;
    // },
    setIsSeeking: (state, action) => {
      state.isSeeking = action.payload;
    },
  },
  // 비동기 리듀서 액션
  extraReducers: (builder) => {
    builder.addCase(asyncSetPlayed.fulfilled, (state, action) => {
      console.log('async reducer : ' + action.payload);
      state.played = action.payload;
      console.log('async state.played' + state.played);
    });
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
  playNextSong,
  playPreviousSong,
  setIsSeeking,
} = playerSlice.actions;

export const selectPlayerState = (state) => state.player;

export default playerSlice.reducer;
