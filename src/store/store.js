// state들을 redux store의 state로 정의하여
// 어떤 컴포넌트에서도 state를 사용할 수 있도록 한다.
// slice 생성해서 사용할 state, 함수들을 정의한다

// reducer 사용
import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice';
import groupReducer from './groupSlice';
import playlistReducer from './playlistSlice';
import modalReducer from './modalSlice';
import playerReducer from './playerSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    group: groupReducer,
    playlist: playlistReducer,
    modal: modalReducer,
    player: playerReducer,
  },
});
