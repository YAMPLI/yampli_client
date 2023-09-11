// import React, { useState } from 'react';
// import styled from 'styled-components';
// // react-player의 youtube 유형만 사용
// import ReactPlayer from 'react-player/youtube';

// const Player = ({ song }) => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   const defaultThumbnail =
//     'https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000';
//   return (
//     <PlayerContainer className="playerContainer">
//       <Thumbnail
//         src={song ? song.thumb[0] : defaultThumbnail}
//         alt="Video Thumbnail"
//         isPlaying={isPlaying}
//       />
//       <PlayButton isPlaying={isPlaying} onClick={() => setIsPlaying(true)}>
//         ▶️
//       </PlayButton>
//       {song && (
//         <ReactPlayer
//           url={song ? song.url : null}
//           width="100%"
//           height="100%"
//           playing={true}
//           loop={true}
//           controls={true}
//           muted={true}
//         />
//       )}
//     </PlayerContainer>
//   );
// };

// export default Player;

// const PlayerContainer = styled.div`
//   display: flex;
//   position: relative;
//   height: 100%;
// `;
// const Thumbnail = styled.img`
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 100%;
//   width: 100%;
//   object-fit: cover;
//   transition: opacity 0.3s;
//   opacity: ${({ isPlaying }) => (isPlaying ? 0 : 1)};
// `;
// const PlayButton = styled.button`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-color: transparent;
//   border: none;
//   cursor: pointer;
//   z-index: 1;
//   opacity: ${({ isPlaying }) => (isPlaying ? 0 : 1)};
//   transition: opacity 0.3s;
// `;

import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player/youtube';

const Player = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  const defaultThumbnail =
    'https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000';

  const handlePlay = () => {
    setIsPlaying(true);
    playerRef.current.seekTo(0); // 영상을 처음부터 시작합니다.
  };

  return (
    <PlayerContainer>
      <Thumbnail
        src={song ? song.thumb[0] : defaultThumbnail}
        alt="Video Thumbnail"
      />
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
      />
    </PlayerContainer>
  );
};

const PlayerContainer = styled.div`
  display: flex;
  position: relative;
  width: 300px;
  height: 200px;
`;

const Thumbnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1; // zIndex를 1로 설정
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
export default Player;
