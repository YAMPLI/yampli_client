import React from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Text from '../common/Text';
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
      <AlbumImageContainer>
        <AlbumImage
          src={selectedSong ? selectedSong.thumb[0] : defaultThumbnail}
        />
      </AlbumImageContainer>
      <ControllerContainer>
        <SongInfoContainer>
          <SongTitle>SongTitle</SongTitle>
          <SongArtist>SongArtist</SongArtist>
        </SongInfoContainer>
        <SeekBarContainer>
          <SeekBarTime>
            <SongTitle>SongTitle</SongTitle>
            <SongTitle>SongTitle</SongTitle>
          </SeekBarTime>
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
        </SeekBarContainer>
        <SongControllerContainer>
          <PlayTypeContainer>
            <PlayIcon
              name="SingleIcon"
              width="12"
              onClick={() => handleModeChange(PlayMode.SINGLE)}
            />
            <PlayIcon
              name="LoopIcon"
              width="12"
              onClick={() => handleModeChange(PlayMode.LOOP)}
            />
            <PlayIcon
              name="RandomIcon"
              width="12"
              onClick={() => handleModeChange(PlayMode.RANDOM)}
            />
          </PlayTypeContainer>
          <SongPlayControllerContainer>
            <PlayIcon
              name="PrevIcon"
              onClick={() =>
                dispatch(
                  playPreviousSong({
                    songs,
                    playFromStart: () => playerRef.current?.seekTo(0),
                  }),
                )
              }
            />
            <PlayButton1 onClick={handlePlay}>
              {isPlaying ? (
                <PlayIcon name="PauseIcon" />
              ) : (
                <PlayIcon name="PlayIcon" />
              )}
            </PlayButton1>
            <PlayIcon
              name="NextIcon"
              onClick={() =>
                dispatch(
                  playNextSong({
                    songs,
                    playFromStart: () => playerRef.current?.seekTo(0),
                  }),
                )
              }
            />
          </SongPlayControllerContainer>

          <VolumeContainer>
            <PlayIcon name="VolumeIcon" width="20px" height="22px" />
            <VolumeBar
              type="range"
              min={0}
              max={1}
              step="any"
              value={volume}
              onChange={handleVolumeChange}
            />
          </VolumeContainer>
        </SongControllerContainer>
      </ControllerContainer>
    </PlayerContainer>
  );
};

const PlayerContainer = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
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

const AlbumImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const AlbumImage = styled.div`
  background-image: url(${(props) => props.src});
  height: 300px;
  width: 300px;
  z-index: 2;
  background-size: cover;
`;
const ControllerContainer = styled.div`
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

const ModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  margin-left: 10px;
  z-index: 1;
`;
const SongInfoContainer = styled.div``;

const SongTitle = styled(Text).attrs({
  size: '30px',
})`
  font-weight: 800;
`;
const SongArtist = styled(Text).attrs({
  size: '24px',
})`
  font-weight: 800;
`;

const SeekBarContainer = styled.div`
  /* display: flex;
  flex-direction: column; */
  width: 90%;
`;
const SeekBarTime = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SeekBar = styled.input`
  width: 100%;
  height: 10px;
  appearance: none; // 기본 디자인 제거
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1;

  // -webkit-slider-thumb : 웹킷 브라우저 input type =range 요소의 슬라이더 스타일링
  &::-webkit-slider-thumb {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    border: 2px solid #b0b0b0;
    background-color: white;
    -webkit-appearance: none;
    opacity: 0; // 기본 상태에서 보여지지 않도록 투명화 처리
  }

  // 마우스로 thumb위에 있을 때 보여지도록 설정
  &:hover::-webkit-slider-thumb {
    opacity: 1;
  }

  // -webkit-slider-runnable-track : 슬라이더의 트랙 부분 스타일
  &::-webkit-slider-runnable-track {
    border-radius: 5px;
    // 재생된 부분의 색사을 변경해서 진행도 보여지도록 설정
    background: ${(props) =>
      `linear-gradient(to right, #f00 ${props.value * 100}%, blue 0%)`};
  }
`;
const SongControllerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

// 공통 스타일을 가지는 베이스 컴포넌트
const FlexContainer = styled.div`
  flex: 1;
`;
const PlayTypeContainer = styled(FlexContainer)``;
const PlayIcon = styled(Icon)`
  margin-right: 10px;
`;
const SongPlayControllerContainer = styled(FlexContainer)`
  display: flex;
  justify-content: space-between;
  flex: 2;
`;
const VolumeContainer = styled(FlexContainer)`
  display: flex;
`;
const VolumeBar = styled(SeekBar)`
  width: 100%;
  margin-top: 5px;
  cursor: pointer;
  z-index: 1;
`;
export default Player;
