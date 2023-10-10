import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Promise } from 'es6-promise';
import { shuffle } from 'lodash';

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
  selectedSong: null, // 현재 재생중인 노래 정보
  volume: 0.3, // 볼륨제어 , 0~1
  currentSongIndex: 0, // 실제 노래 리스트의 인덱스를 갖는 변수
  currentPlayingIndex: 0, // 현재 재생 중인 곡의 인덱스를 추적하는 변수
  playMode: PlayMode.LOOP,
  playedSongsIndices: [],
  playerRef: null, // 다른 페이지에서도 플레이어를 참조할 수 있도록
  isSeeking: false, // seekBar 동작 제어 중 played 값을 변경하지 않도록
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    initPlayedSongsIndices: (state, action) => {
      // Array.from을 이용해서 빈 배열을 초기화
      // 새로운 배열의 원소 값을 songs 리스트의 길이만큼 0부터 채운다.
      // ex) song.length =  3 -> songIndices=[0,1,2]
      const songIndices = Array.from(
        { length: action.payload.length },
        (_, i) => i,
      );
      // lodash 라이브러리의 shuffle를 사용해서 랜덤모드인 경우 배열 요소를 섞어준다.
      state.playedSongsIndices =
        state.playMode === PlayMode.RANDOM ? shuffle(songIndices) : songIndices;
    },
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
    playNextSong: (state, action) => {
      const songs = action.payload.songs;
      const playFromStart = action.payload.playFromStart;
      if (state.playMode === PlayMode.SINGLE) {
        playFromStart();
        return;
      }
      if (state.playMode === PlayMode.LOOP) {
        state.currentSongIndex = (state.currentSongIndex + 1) % songs.length;
      } else if (state.playMode === PlayMode.RANDOM) {
        if (state.currentPlayingIndex >= state.playedSongsIndices.length - 1) {
          state.playedSongsIndices = shuffle(state.playedSongsIndices);
          state.currentPlayingIndex = 0;
        } else {
          state.currentPlayingIndex += 1;
        }
        state.currentSongIndex =
          state.playedSongsIndices[state.currentPlayingIndex];
      }
      state.selectedSong = songs[state.currentSongIndex];
    },
    playPreviousSong: (state, action) => {
      const songs = action.payload.songs;
      const playFromStart = action.payload.playFromStart;
      if (state.playMode === PlayMode.SINGLE) {
        playFromStart();
        return;
      }
      if (state.playMode === PlayMode.LOOP) {
        state.currentSongIndex =
          (state.currentSongIndex - 1 + songs.length) % songs.length;
      } else if (state.playMode === PlayMode.RANDOM) {
        if (state.currentPlayingIndex > 0) {
          state.currentPlayingIndex -= 1;
        } else {
          // 리스트의 처음에 도달한 경우, 마지막 곡으로 이동
          state.currentPlayingIndex = state.playedSongsIndices.length - 1;
        }
        state.currentSongIndex =
          state.playedSongsIndices[state.currentPlayingIndex];
      }
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
  initPlayedSongsIndices,
} = playerSlice.actions;

export const selectPlayerState = (state) => state.player;

export default playerSlice.reducer;
