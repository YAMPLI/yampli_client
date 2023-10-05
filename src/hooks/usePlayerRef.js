// import { useEffect, useRef } from 'react';
// import { useDispatch } from 'react-redux';
// import { setPlayerRef } from '../store/playerSlice';
// /**
//  *  커스텀훅 생성
//  * 기존에는 redux에서 playerRef를 관리하도록 했지만 비직렬화된 객체이기 때문에 에러가 발생,
//  * 커스텀훅을 사용하여 관리하도록 개선했다.
//  * 앞으로는 playerRef가 변경될 때 마다 Redux 스토어의 setPlayerRef 액션을 디스패치 한다.
//  */
// const usePlayerRef = () => {
//   const dispatch = useDispatch();
//   const playerRef = useRef(null);

//   useEffect(() => {
//     if (playerRef.current) {
//       dispatch(setPlayerRef(playerRef));
//     }
//   }, [playerRef.current, dispatch]);

//   return playerRef;
// };

// export default usePlayerRef;
