import React from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Text from '../common/Text';
import Icon from '../icons';
import LoadingSpinner from '../common/LoadingSpinner';
import {
  togglePlay,
  setPlayed,
  selectPlayerState,
  setVolume,
  setCurrentSongIndex,
  PlayMode,
  setPlayMode,
  setCurrentPlayingIndex,
  playNextSong,
  playPreviousSong,
  setIsSeeking,
  asyncSetPlayed,
  initPlayedSongsIndices,
} from '../../store/playerSlice';
import { usePlayerRef } from '../../context/PlayerContext';
import { useEffect } from 'react';
import useTimeFormat from '../../hooks/useTimeFormat';
import {
  selectPlaylistState,
  setIsShowSongList,
} from '../../store/playlistSlice';

// 재생 컨트롤러 아이콘 이름
const iconNames = ['PrevIcon', 'PlayIcon', 'PauseIcon', 'NextIcon'];

// ==========================
// React Component Section
// ==========================
const Player = () => {
  const dispatch = useDispatch();
  const playerRef = usePlayerRef();
  const {
    isPlaying,
    playMode,
    played,
    volume,
    selectedSong,
    playedSongsIndices,

    // playerRef,
  } = useSelector(selectPlayerState);

  // const songs = useSelector((state) => state.playlist.list);
  const { songList, isShowSongList } = useSelector(selectPlaylistState);

  useEffect(() => {
    if (playMode === PlayMode.RANDOM && playedSongsIndices.length === 0) {
      dispatch(initPlayedSongsIndices({ length: songList.length }));
    }
  }, [playMode, playedSongsIndices, dispatch]);

  const handlePlay = () => {
    dispatch(togglePlay());
  };
  const handleShowSongList = () => {
    dispatch(setIsShowSongList());
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
    dispatch(initPlayedSongsIndices({ length: songList.length }));
    dispatch(setCurrentSongIndex(0)); // 첫 노래부터 다시 재생
    if (mode === 'random') {
      dispatch(setCurrentPlayingIndex(0));
    }
    if (playerRef && playerRef.current) {
      playerRef.current.seekTo(0); // 노래를 처음부터 재생
    }
    if (!isPlaying) {
      // 노래가 일시정지 상태라면 재생 상태로 변경
      dispatch(togglePlay());
    }
  };

  const handleNextSong = () =>
    dispatch(
      playNextSong({
        songList,
        playFromStart: () => playerRef.current?.seekTo(0),
      }),
    );

  const handlePrevSong = () =>
    dispatch(
      playPreviousSong({
        songList,
        playFromStart: () => playerRef.current?.seekTo(0),
      }),
    );

  const songCurrentTime = playerRef.current.getCurrentTime();
  const songDuration = playerRef.current.getDuration();

  const { timeFormat } = useTimeFormat();

  if (!selectedSong) {
    return <LoadingSpinner />;
  }

  return (
    <PlayerContainer>
      <Thumbnail src={selectedSong.thumb[0]} />
      <DarkOverlay />
      <AlbumImageContainer>
        <AlbumImage src={selectedSong.thumb[0]} />
      </AlbumImageContainer>
      <PlayerControllerContainer>
        <SongInfoContainer>
          <SongInfoText>{selectedSong.title}</SongInfoText>
          <SongInfoText isArtist>{selectedSong.artist}</SongInfoText>
        </SongInfoContainer>
        <TopSectionContainer>
          <VolumeControlWrapper>
            <PlayerIcon name="VolumeIcon" width="18px" height="18px" />
            <VolumeBar
              type="range"
              min={0}
              max={1}
              step="any"
              value={volume}
              onChange={handleVolumeChange}
            />
          </VolumeControlWrapper>
          <SongListIconWrapper>
            <PlayerIcon
              name="SongListIcon"
              width="20px"
              height="22px"
              onClick={handleShowSongList}
            />
          </SongListIconWrapper>
        </TopSectionContainer>
        <SeekBarContainer>
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
          <SeekBarTimeContainer>
            <SongTime>{timeFormat(songCurrentTime)}</SongTime>
            <SongTime>{timeFormat(songDuration)}</SongTime>
          </SeekBarTimeContainer>
        </SeekBarContainer>

        <BottomSectionContainer>
          <PlaybackModeWrapper>
            {playMode === 'single' ? (
              <PlayerIcon
                name="SingleIcon"
                width="12"
                onClick={() => handleModeChange(PlayMode.LOOP)}
              />
            ) : playMode === 'loop' ? (
              <PlayerIcon
                name="LoopIcon"
                width="12"
                onClick={() => handleModeChange(PlayMode.RANDOM)}
              />
            ) : (
              <PlayerIcon
                name="RandomIcon"
                width="12"
                onClick={() => handleModeChange(PlayMode.SINGLE)}
              />
            )}
          </PlaybackModeWrapper>
          <PlaybackControlWrapper>
            <PlayerIcon name="PrevIcon" onClick={handlePrevSong} />
            {isPlaying ? (
              <PlayerIcon name="PauseIcon" onClick={handlePlay} />
            ) : (
              <PlayerIcon name="PlayIcon" onClick={handlePlay} />
            )}
            <PlayerIcon name="NextIcon" onClick={handleNextSong} />
          </PlaybackControlWrapper>
          <SongHeartIconWrapper>
            <PlayerIcon
              name="HeartIcon"
              width="12"
              color="none"
              stroke="white"
              strokeWidth="2px"
            />
          </SongHeartIconWrapper>
        </BottomSectionContainer>
      </PlayerControllerContainer>
    </PlayerContainer>
  );
};

export default Player;

/**
 * =========================
 * Styled Component Section
 * =========================
 */

// 공통 스타일을 가지는 베이스 컴포넌트
const FlexContainer = styled.div`
  flex: 1;
`;
const PlayerIcon = styled(Icon)`
  margin-right: ${(props) => (iconNames.includes(props.name) ? '0' : '0')};
`;

const SeekBar = styled.input`
  width: 100%;
  height: 10px;
  appearance: none; // 기본 디자인 제거
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1;

  // -webkit-slider-thumb : 웹킷 브라우저 input type =range 요소의 슬라이더 스타일링
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    margin-top: -2px; // 버튼 위치 기준점 고려해서 중앙 위치 하도록 설정
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.color.darkGray};
    background: ${({ theme }) => theme.color.offWhite};
    opacity: 0; // 기본 상태에서 보여지지 않도록 투명화 처리
  }

  // 마우스로 thumb위에 있을 때 보여지도록 설정
  &:hover::-webkit-slider-thumb {
    opacity: 1;
  }

  // -webkit-slider-runnable-track : 슬라이더의 트랙 부분 스타일
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 10px;
    border-radius: 5px;
    // 재생된 부분의 색상을 변경해서 진행도 보여지도록 설정
    background: ${({ value }) =>
      `linear-gradient(to right, 
      rgba(250, 250, 250, 0.1) ${value * 100}%, 
      rgba(213, 213, 213, 0.9) ${value * 100}%)`};
  }
`;
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
  z-index: 1;
  border: none;
  opacity: 0.2;
`;
const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(23, 27, 27, 0.3); // 검은색에 50% 투명도
  z-index: 1; // Thumbnail과 같은 z-index
  border: none;
`;
const AlbumImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AlbumImage = styled.div`
  background-image: url(${(props) => props.src});
  height: 450px;
  width: 450px;
  z-index: 2;
  background-size: cover;
`;
const PlayerControllerContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 70%;
  height: 350px;
  z-index: 2;
`;

const SongInfoContainer = styled.div`
  margin-bottom: 50px;
  font-size: 30px;
`;
// attrs 하이라이팅 이슈로 인해서 Text 컴포넌트에 인자값을 전달하지 않고 css 스타일 재지정으로 해결
const SongInfoText = styled(Text)`
  font-size: ${(props) => (props.isArtist ? '0.6em' : '1em')};
  font-weight: ${(props) => (props.isArtist ? 400 : 600)};
  line-height: 1.4;
  margin-top: ${(props) => (props.isArtist ? '10px' : '0px')};
`;

const TopSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 20px;
`;

const SongListIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VolumeControlWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const VolumeBar = styled(SeekBar)`
  margin: 0 0 0 10px;
  cursor: pointer;
  z-index: 1;
`;

const SeekBarContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;
const SeekBarTimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2px;
`;

const SongTime = styled(Text).attrs({
  size: 'small',
})`
  font-weight: 500;
`;

const BottomSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4px;
`;

const PlaybackModeWrapper = styled(FlexContainer)``;

const PlaybackControlWrapper = styled(FlexContainer)`
  display: flex;
  justify-content: space-around;
  flex: 2;
`;

const SongHeartIconWrapper = styled(FlexContainer)`
  display: flex;
  justify-content: flex-end;
`;
