import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player/youtube';

const Player = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);
  const [played, setPlayed] = useState(100);
  const [duration, setDuration] = useState();
  const defaultThumbnail = '';

  const handlePlay = (state) => {
    setIsPlaying(true);
    playerRef.current.seekTo(0); // 영상을 처음부터 시작합니다.
    setPlayed(state.played);
  };
  const handleProgress = (state) => {
    setPlayed(state.played);
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };
  return (
    <PlayerContainer>
      {/* <Thumbnail
        src={song ? song.thumb[0] : defaultThumbnail}
        alt="Video Thumbnail"
      /> */}
      <Thumbnail src={song ? song.thumb[0] : defaultThumbnail} />
      <PlayButton onClick={handlePlay}>{isPlaying ? '⏸️' : '▶️'}</PlayButton>
      <StyledReactPlayer
        ref={playerRef}
        url={song ? song.url : null}
        width="100%"
        height="100%"
        playing={isPlaying}
        loop={true}
        controls={false} // controls 속성을 false로 설정
        muted={false}
        style={{ zIndex: 0, opacity: 0 }}
        onProgress={handleProgress}
        onDuration={handleDuration}
      />
      <ProgressBar>
        <Progress played={played} />
      </ProgressBar>
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
const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute !important; // ReactPlayer에는 기본 스타일이 있으므로 !important를 사용하여 덮어쓰기
  top: 0;
  left: 0;
  z-index: 0; // 모든 요소보다 아래에 위치하게 함
`;

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
  z-index: 0;
`;

export default Player;
