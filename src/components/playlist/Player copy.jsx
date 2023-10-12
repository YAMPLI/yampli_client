import React from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Icon from '../icons';
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
  initPlayedSongsIndices,
} from '../../store/playerSlice';
import { usePlayerRef } from '../../context/PlayerContext';
import { useEffect } from 'react';

const Player = ({ song }) => {
  const dispatch = useDispatch();
  const playerRef = usePlayerRef();
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
    // playerRef,
  } = useSelector(selectPlayerState);

  const defaultThumbnail = '';
  const songs = useSelector((state) => state.playlist.list);

  useEffect(() => {
    if (playMode === PlayMode.RANDOM && playedSongsIndices.length === 0) {
      dispatch(initPlayedSongsIndices({ length: songs.length }));
    }
  }, [playMode, playedSongsIndices, dispatch]);

  const handlePlay = () => {
    dispatch(togglePlay());
    console.log(playMode);
  };

  const handleDurationChange = (duration) => {
    dispatch(setDuration(duration));
  };
  const handleVolumeChange = (e) => {
    dispatch(setVolume(parseFloat(e.target.value)));
  };

  const handleSeekChange = (e) => {
    dispatch(setPlayed(parseFloat(e.target.value)));
    if (playerRef && playerRef.current) {
      playerRef.current.seekTo(parseFloat(e.target.value));
    }
  };
  const handleSeekMouseDown = (e) => {
    dispatch(togglePlay());
    dispatch(setIsSeeking(true));
  };

  const handleSeekMouseUp = async (e) => {
    const playedValue = parseFloat(e.target.value);
    await dispatch(asyncSetPlayed(playedValue));
    if (playerRef && playerRef.current) {
      playerRef.current.seekTo(playedValue);
    }
    dispatch(togglePlay());
    dispatch(setIsSeeking(false));
  };

  const handleModeChange = (mode) => {
    dispatch(setPlayMode(mode));
    dispatch(initPlayedSongsIndices({ length: songs.length }));
    dispatch(setCurrentSongIndex(0)); // 첫 노래부터 다시 재생
    if (playerRef && playerRef.current) {
      playerRef.current.seekTo(0); // 노래를 처음부터 재생
    }
    if (!isPlaying) {
      // 노래가 일시정지 상태라면 재생 상태로 변경
      dispatch(togglePlay());
    }
  };

  return (
    <PlayerContainer>
      <Thumbnail
        // src={song ? songs[currentSongIndex].thumb[0] : defaultThumbnail}
        src={selectedSong ? selectedSong.thumb[0] : defaultThumbnail}
      />

      <ControllerContainer>
        <PlayButton1 onClick={handlePlay}>
          {isPlaying ? '⏸️' : <Icon name="PlayIcon" />}
        </PlayButton1>
        <PlayButton1
          onClick={() =>
            dispatch(
              playNextSong({
                songs,
                playFromStart: () => playerRef.current?.seekTo(0),
              }),
            )
          }
        >
          Nexssssssst
        </PlayButton1>
        <PlayButton1
          onClick={() =>
            dispatch(
              playPreviousSong({
                songs,
                playFromStart: () => playerRef.current?.seekTo(0),
              }),
            )
          }
        >
          Previousssssss
        </PlayButton1>
      </ControllerContainer>
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
      <ModeButton onClick={() => handleModeChange(PlayMode.LOOP)}>
        🔁
      </ModeButton>
      <ModeButton onClick={() => handleModeChange(PlayMode.SINGLE)}>
        🔂
      </ModeButton>
      <ModeButton onClick={() => handleModeChange(PlayMode.RANDOM)}>
        🔀
      </ModeButton>
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
const ControllerContainer = styled.div`
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
