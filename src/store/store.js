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

// 테스트용
import ttestReducer from '../myTest/store/ttestSlice';
export default configureStore({
  reducer: {
    auth: authReducer,
    group: groupReducer,
    playlist: playlistReducer,
    modal: modalReducer,
    player: playerReducer,
    ttest: ttestReducer,
  },
  // middleware 추가 코드이다. Redux에서는 action을 전달할 때 직렬화된 string형태의 데이터를 보내야한다.
  // Player.jsx 컴포넌트에서 전달하는 seekTo 함수는 직렬화된 데이터가 아니기 때문에 에러가 발생
  // 직렬화 가능한 값을 체크하는 미들웨어를 사용하지 않도록 설정
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
