import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import ReactPlayer from 'react-player/youtube';
import {
  selectPlayerState,
  PlayMode,
  setPlayed,
  setDuration,
  setCurrentSongIndex,
  setSelectedSong,
  resetPlayedSongs,
  addPlayedSongIndex,
  playNextSong,
  playPreviousSong,
  setPlayerRef,
} from '../../store/playerSlice';
import { useEffect } from 'react';
import { useState } from 'react';

const GlobalPlayer = () => {
  const dispatch = useDispatch();
  const playerRef = useRef(null);
  //   const [playerCurrent, setPlayerCurrent] = useState(null);

  //   useEffect(() => {
  //     if (playerRef.current && !playerCurrent) {
  //       setPlayerCurrent(playerRef.current);
  //     }
  //   }, []);

  //   useEffect(() => {
  //     if (playerCurrent) {
  //       dispatch(setPlayerRef(playerRef));
  //     }
  //   }, [playerCurrent, dispatch]);

  useEffect(() => {
    if (playerRef.current) {
      dispatch(setPlayerRef(playerRef));
    }
  }, [playerRef, dispatch]);

  const {
    isPlaying,
    selectedSong,
    playMode,
    volume,
    duration,
    currentSongIndex,
    playedSongsIndices,
    isSeeking,
  } = useSelector(selectPlayerState);

  const songs = useSelector((state) => state.playlist.list);

  const handleProgress = (state) => {
    if (!isSeeking) {
      dispatch(setPlayed(state.played));
    }
  };

  const handleDurationChange = (duration) => {
    dispatch(setDuration(duration));
  };

  //   const handleEnded = () => {
  //     if (playMode === PlayMode.LOOP) {
  //       if (currentSongIndex + 1 < songs.length) {
  //         dispatch(setCurrentSongIndex(currentSongIndex + 1));
  //         dispatch(setSelectedSong(songs[currentSongIndex]));
  //       } else {
  //         dispatch(setCurrentSongIndex(0)); // 처음으로 돌아간다
  //         dispatch(setSelectedSong(songs[currentSongIndex]));
  //       }
  //     } else {
  //       //   playNext(); // PlayMode.SINGLE과 PlayMode.RANDOM은 여기서 처리됩니다.
  //     }
  //   };
  const handleEnded = () => {
    if (playMode === PlayMode.LOOP) {
      dispatch(playNextSong({ songs }));
    } else {
      dispatch(playNextSong({ songs }));
      // PlayMode.SINGLE과 PlayMode.RANDOM은 여기서 처리됩니다.
    }
  };
  //   const playNext = () => {
  //     let nextIndex;
  //     if (playMode === PlayMode.RANDOM) {
  //       const unplayedIndices = songs
  //         .map((_, index) => index)
  //         .filter((index) => !playedSongsIndices.includes(index));

  //       if (unplayedIndices.length === 0) {
  //         // 모든 노래가 재생되면
  //         dispatch(resetPlayedSongs());
  //         nextIndex = Math.floor(Math.random() * songs.length);
  //       } else {
  //         const randomIndex = Math.floor(Math.random() * unplayedIndices.length);
  //         nextIndex = unplayedIndices[randomIndex];
  //       }
  //       dispatch(addPlayedSongIndex(nextIndex)); // 재생된 노래 인덱스 추가
  //     } else {
  //       nextIndex = (currentSongIndex + 1) % songs.length;
  //     }

  //     dispatch(setCurrentSongIndex(nextIndex));
  //     console.log(playedSongsIndices);
  //   };
  return (
    // <>
    //   {selectedSong && (
    //     <StyledReactPlayer
    //       ref={playerRef}
    //       url={selectedSong ? selectedSong.url : null}
    //       width="0%" // 0%로 설정하여 UI에 보이지 않게 한다.
    //       height="0%"
    //       playing={isPlaying}
    //       loop={playMode === PlayMode.SINGLE}
    //       controls={false} // controls 속성을 false로 설정
    //       muted={false}
    //       volume={volume}
    //       style={{ display: 'none' }} // UI에 표시되지 않도록 설정
    //       onProgress={handleProgress} // 재생 진행 이벤트
    //       onDuration={handleDurationChange} // 영상 전체 길이
    //       onEnded={handleEnded} // 재생 종료시 발생하는 이벤트
    //     ></StyledReactPlayer>
    //   )}
    // </>
    <StyledReactPlayer
      ref={playerRef}
      url={selectedSong ? selectedSong.url : null}
      width="0%" // 0%로 설정하여 UI에 보이지 않게 한다.
      height="0%"
      playing={isPlaying}
      loop={playMode === PlayMode.SINGLE}
      controls={false} // controls 속성을 false로 설정
      muted={false}
      volume={volume}
      style={{ display: 'none' }} // UI에 표시되지 않도록 설정
      onProgress={handleProgress} // 재생 진행 이벤트
      onDuration={handleDurationChange} // 영상 전체 길이
      onEnded={handleEnded} // 재생 종료시 발생하는 이벤트
    ></StyledReactPlayer>
  );
};

export default GlobalPlayer;

const StyledReactPlayer = styled(ReactPlayer)`
  position: fixed;
  bottom: 0;
  z-index: -1;
`;
