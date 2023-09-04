import React, { useState } from 'react';
import styled from 'styled-components';
// react-player의 youtube 유형만 사용
import ReactPlayer from 'react-player/youtube';

const Player = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const defaultThumbnail =
    'https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000';
  return (
    <PlayerContainer className="playerContainer">
      <Thumbnail
        src={song ? song.thumb[0] : defaultThumbnail}
        alt="Video Thumbnail"
        isPlaying={isPlaying}
      />
      <PlayButton isPlaying={isPlaying} onClick={() => setIsPlaying(true)}>
        ▶️
      </PlayButton>
      {song && (
        <ReactPlayer
          url={song ? song.url : null}
          width="100%"
          height="100%"
          playing={true}
          loop={true}
          controls={true}
          muted={true}
        />
      )}
    </PlayerContainer>
  );
};

export default Player;

const PlayerContainer = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
`;
const Thumbnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  width: auto;
  object-fit: cover;
  transition: opacity 0.3s;
  opacity: ${({ isPlaying }) => (isPlaying ? 0 : 1)};
`;
const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 1;
  opacity: ${({ isPlaying }) => (isPlaying ? 0 : 1)};
  transition: opacity 0.3s;
`;
