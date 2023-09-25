import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  togglePlay,
  setPlayed,
  setDuration,
  selectPlayerState,
  setVolume,
  setCurrentSongIndex,
  PlayMode,
  setPlayMode,
  resetPlayedSongs,
  addPlayedSongIndex,
  playNextSong,
  playPreviousSong,
  setIsSeeking,
  asyncSetPlayed,
} from '../../store/playerSlice';
// import ReactPlayer from 'react-player/youtube';
import { useState } from 'react';

const Player = ({ song }) => {
  const dispatch = useDispatch();
  const {
    isPlaying,
    currentSongIndex,
    playMode,
    played,
    duration,
    volume,
    selectedSong,
    playedSongsIndices,
    globalPlayerRef,
    isSeeking,
    playerRef,
  } = useSelector(selectPlayerState);
  // const playerRef = useRef(null);
  const defaultThumbnail = '';
  const songs = useSelector((state) => state.playlist.list);
  const handlePlay = () => {
    dispatch(togglePlay());
    console.log(playMode);
    // playerRef.current.seekTo(0);
    // dispatch(setPlayed(state.played));
  };
  // const playNext = () => {
  //   let nextIndex;

  //   if (playMode === PlayMode.RANDOM) {
  //     const unplayedIndices = songs
  //       .map((_, index) => index)
  //       .filter((index) => !playedSongsIndices.includes(index));

  //     if (unplayedIndices.length === 0) {
  //       // 모든 노래가 재생되면
  //       dispatch(resetPlayedSongs());
  //       nextIndex = Math.floor(Math.random() * songs.length);
  //     } else {
  //       const randomIndex = Math.floor(Math.random() * unplayedIndices.length);
  //       nextIndex = unplayedIndices[randomIndex];
  //     }
  //     dispatch(addPlayedSongIndex(nextIndex)); // 재생된 노래 인덱스 추가
  //   } else {
  //     nextIndex = (currentSongIndex + 1) % songs.length;
  //   }

  //   dispatch(setCurrentSongIndex(nextIndex));
  //   console.log(playedSongsIndices);
  // };
  const playPrevious = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    dispatch(setCurrentSongIndex(prevIndex));
  };
  // const handleProgress = (state) => {
  //   dispatch(setPlayed(state.played));
  // };
  // const handleProgress = (state) => {
  //   if (!isSeeking) {
  //     // 사용자가 조작 중이 아닐 때만 상태 업데이트
  //     dispatch(setPlayed(state.played));
  //   }
  // };

  const handleDurationChange = (duration) => {
    dispatch(setDuration(duration));
  };
  const handleVolumeChange = (e) => {
    dispatch(setVolume(parseFloat(e.target.value)));
  };

  // const handleSeekChange = (e) => {
  //   dispatch(setPlayed(parseFloat(e.target.value)));
  // };

  // const handleSeekChange = (e) => {
  //   const seekValue = parseFloat(e.target.value);
  //   dispatch(setPlayed(seekValue));
  //   if (playerRef.current) {
  //     playerRef.current.seekTo(seekValue);
  //   }
  // };
  const handleSeekChange = (e) => {
    if (playerRef && playerRef.current) {
      dispatch(setPlayed(parseFloat(e.target.value)));
      playerRef.current.seekTo(parseFloat(e.target.value));
    }
  };
  const handleSeekMouseDown = (e) => {
    dispatch(togglePlay());
    dispatch(setIsSeeking(true));
  };

  // const handleSeekMouseUp = (e) => {
  //   dispatch(togglePlay());
  //   if (playerRef.current) {
  //     playerRef.current.seekTo(parseFloat(e.target.value));
  //   }
  // };

  // const handleSeekMouseUp = (e) => {
  //   if (globalPlayerRef && globalPlayerRef.current) {
  //     globalPlayerRef.current.seekTo(parseFloat(e.target.value));
  //   }
  //   console.log('mouseUP : ' + e.target.value);
  //   dispatch(setPlayed(parseFloat(e.target.value)));
  //   // seeToBar가 원상태로 돌아오는걸 방지하기 위해서
  //   // 지연 후 isSeeking 상태 변경
  //   setTimeout(() => {
  //     dispatch(togglePlay());
  //     dispatch(setIsSeeking(false));
  //   }, 500); // 예를 들어 500ms 지연을 줍니다.
  // };

  // const handleSeekMouseUp = (e) => {
  //   // dispatch(setPlayed(parseFloat(e.target.value)));
  //   // 비동기로 전송
  //   dispatch(asyncSetPlayed(parseFloat(e.target.value)));
  //   console.log('handleSeekMouseUp' + played);
  //   // if (globalPlayerRef && globalPlayerRef.current) {
  //   //   globalPlayerRef.current.seekTo(parseFloat(e.target.value));
  //   // }
  //   dispatch(togglePlay());
  //   dispatch(setIsSeeking(false));
  // };

  const handleSeekMouseUp = async (e) => {
    const playedValue = parseFloat(e.target.value);
    await dispatch(asyncSetPlayed(playedValue));
    if (playerRef && playerRef.current) {
      playerRef.current.seekTo(playedValue);
    }
    dispatch(togglePlay());
    dispatch(setIsSeeking(false));
  };
  // const handleEnded = () => {
  //   if (playMode === PlayMode.LOOP) {
  //     if (currentSongIndex + 1 < songs.length) {
  //       dispatch(setCurrentSongIndex(currentSongIndex + 1));
  //     } else {
  //       dispatch(setCurrentSongIndex(0)); // 처음으로 돌아간다
  //     }
  //   } else {
  //     playNext(); // PlayMode.SINGLE과 PlayMode.RANDOM은 여기서 처리됩니다.
  //   }
  // };
  // const handleModeChange = (mode) => {
  //   if (
  //     mode === PlayMode.RANDOM &&
  //     !playedSongsIndices.includes(currentSongIndex)
  //   ) {
  //     dispatch(addPlayedSongIndex(currentSongIndex));
  //   }
  //   if (mode !== PlayMode.RANDOM) {
  //     dispatch(resetPlayedSongs());
  //   }
  //   dispatch(setPlayMode(mode));
  //   playerRef.current.seekTo(0); // 노래를 처음부터 재생
  //   if (!isPlaying) {
  //     // 노래가 일시정지 상태라면 재생 상태로 변경
  //     dispatch(togglePlay());
  //   }
  // };

  return (
    <PlayerContainer>
      {/* <StyledReactPlayer
        ref={playerRef}
        url={song ? songs[currentSongIndex].url : null}
        width="100%"
        height="100%"
        playing={isPlaying}
        loop={playMode === PlayMode.SINGLE}
        controls={false} // controls 속성을 false로 설정
        muted={false}
        volume={volume}
        style={{ zIndex: 0, opacity: 0 }}
        onProgress={handleProgress}
        onDuration={handleDurationChange}
        onEnded={handleEnded}
      /> */}
      <Thumbnail
        // src={song ? songs[currentSongIndex].thumb[0] : defaultThumbnail}
        src={selectedSong ? selectedSong.thumb[0] : defaultThumbnail}
      />

      <Con>
        <PlayButton1 onClick={handlePlay}>
          {isPlaying ? '⏸️' : '▶️'}
        </PlayButton1>
        <PlayButton1 onClick={() => dispatch(playNextSong({ songs }))}>
          Nexssssssst
        </PlayButton1>
        <PlayButton1 onClick={() => dispatch(playPreviousSong({ songs }))}>
          Previousssssss
        </PlayButton1>
      </Con>
      <ProgressBar>
        <Progress played={played} />
      </ProgressBar>
      <SeekBar
        type="range"
        min={0}
        max={1}
        step="any"
        value={played}
        onMouseDown={handleSeekMouseDown}
        onChange={handleSeekChange}
        onMouseUp={handleSeekMouseUp}
      />
      <VolumeBar
        type="range"
        min={0}
        max={1}
        step="any"
        value={volume}
        onChange={handleVolumeChange}
      />
      {/* <ModeButton onClick={() => handleModeChange(PlayMode.LOOP)}>
        🔁
      </ModeButton>
      <ModeButton onClick={() => handleModeChange(PlayMode.SINGLE)}>
        🔂
      </ModeButton>
      <ModeButton onClick={() => handleModeChange(PlayMode.RANDOM)}>
        🔀
      </ModeButton> */}
    </PlayerContainer>
  );
};

const PlayerContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
`;

const Thumbnail = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-size: 40%;
  /* background-repeat: no-repeat; // 이미지 반복 x */
  background-repeat: repeat; // 이미지를 반복하여 표시
  background-position: center;
  opacity: 0.8; // 투명도
  filter: blur(8px); // 블러 처리 적용
  z-index: 1;
`;
const Con = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60%;
  left: 50%;
  z-index: 2;
`;
const PlayButton1 = styled.button`
  z-index: 2;
  cursor: pointer;
`;

const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 2; // Thumbnail보다 위에 위치하게 함
  transition: opacity 0.3s;
`;
// const StyledReactPlayer = styled(ReactPlayer)`
//   position: absolute !important; // ReactPlayer에는 기본 스타일이 있으므로 !important를 사용하여 덮어쓰기
//   top: 0;
//   left: 0;
//   z-index: 0; // 모든 요소보다 아래에 위치하게 함
// `;

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: #ddd;
  margin-top: 10px;
  z-index: 0;
`;

const Progress = styled.div`
  width: ${(props) => props.played * 100}%;
  height: 100%;
  background-color: #ff0000;
  z-index: 1;
`;

const SeekBar = styled.input`
  width: 100%;
  margin-top: 10px;
  cursor: pointer;
  z-index: 1;
`;

const VolumeBar = styled.input`
  width: 100%;
  margin-top: 5px;
  cursor: pointer;
  z-index: 1;
`;

const ModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  margin-left: 10px;
  z-index: 1;
`;
export default Player;
