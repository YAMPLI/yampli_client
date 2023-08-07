import styled from 'styled-components';
import YouTube from 'react-youtube';

const opts = {
  height: '1145px',
  width: '100%',
};

const Player = ({ song }) => (
  <PlayerContainer>
    {song && <YouTube videoId={song.vidId} opts={opts} />}
  </PlayerContainer>
);

export default Player;

const PlayerContainer = styled.div`
  flex: 8.5; // 이 값은 85%에 해당합니다.
  height: 100%;
  width: 100%;
  background-color: blue;
`;
